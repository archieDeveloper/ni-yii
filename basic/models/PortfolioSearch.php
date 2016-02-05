<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;

/**
 * PortfolioSearch represents the model behind the search form about `app\models\Portfolio`.
 */
class PortfolioSearch extends Portfolio
{
    public $categoryName;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'category_id', 'is_active'], 'integer'],
            [['title', 'description', 'date_create', 'date_update', 'categoryName'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $loadParams = [
            'PortfolioSearch' => $params
        ];
        $query = Portfolio::find()
            ->where(['is_active' => 1])
            ->with(['cover', 'category'])
            ->orderBy(['date_create' => SORT_DESC]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => false,
            'pagination' => [
                'pageSize' => 5
            ]
        ]);


        $this->load($loadParams);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'category_id' => $this->category_id,
            'is_active' => $this->is_active,
            'date_create' => $this->date_create,
            'date_update' => $this->date_update,
        ]);

        $query->andFilterWhere(['like', 'title', $this->title])
            ->andFilterWhere(['like', 'description', $this->description]);

        $query->joinWith(['category' => function ($q) {
            $q->where('portfolio_category.name LIKE "%' . $this->categoryName . '%"');
        }]);

        return $dataProvider;
    }
}