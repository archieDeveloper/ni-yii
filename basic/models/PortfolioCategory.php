<?php

namespace app\models;

use Yii;

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
 */
class PortfolioCategory extends \yii\db\ActiveRecord
{
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
}
