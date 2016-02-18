<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "portfolio_category".
 *
 * @property integer $id
 * @property string $link
 * @property string $name
 * @property string $description
 * @property integer $position
 * @property string $date_create
 * @property string $date_update
 *
 * @property Portfolio[] $portfolios
 */
class PortfolioCategory extends ActiveRecord
{
    public $label;
    public $url;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'portfolio_category';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['link', 'name', 'description'], 'required'],
            [['position'], 'integer'],
            [['date_create', 'date_update'], 'safe'],
            [['link', 'name', 'description'], 'string', 'max' => 255],
            [['link'], 'unique'],
            [['name'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'link' => 'Link',
            'name' => 'Name',
            'description' => 'Description',
            'position' => 'Position',
            'date_create' => 'Date Create',
            'date_update' => 'Date Update',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPortfolios()
    {
        return $this->hasMany(Portfolio::className(), ['category_id' => 'id']);
    }

    public function getMenu($currentCategory = null)
    {
        $categories = $this->find()->select(['name', 'link'])->orderBy('position')->all();
        $items = [[
            'label' => 'Все',
            'url' => ['/portfolio'],
            'active' => !$currentCategory
        ]];
        foreach($categories as $category) {
            $items[] = [
                'label' => $category->name,
                'url' => ['/portfolio/category/' . $category->link],
                'active' => $category->link === $currentCategory
            ];
        }
        return $items;
    }

    public function getDropDownList()
    {
        $categories = $this->find()->select(['id', 'name'])->orderBy('position')->all();
        return ArrayHelper::map($categories, 'id', 'name');
    }
}
