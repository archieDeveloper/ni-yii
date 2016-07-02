<?php

namespace app\models;

use rico\yii2images\models\Image;
use Yii;
use yii\behaviors\AttributeBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;
use yii\web\UploadedFile;

/**
 * This is the model class for table "portfolio".
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $title
 * @property string $description
 * @property integer $is_active
 * @property string $date_create
 * @property string $date_update
 *
 * @property PortfolioCategory $category
 */
class Portfolio extends ActiveRecord
{
    public $image;

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'image' => [
                'class' => 'rico\yii2images\behaviors\ImageBehave',
            ],
            [
                'class' => TimestampBehavior::className(),
                'createdAtAttribute' => 'date_create',
                'updatedAtAttribute' => 'date_update',
                'value' => new Expression('NOW()'),
            ],
            [
                'class' => AttributeBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => 'is_active'
                ],
                'value' => 1,
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'portfolio';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'is_active', 'date_create', 'date_update'], 'integer'],
            [['image'], 'required'],
            [['title', 'description'], 'string', 'max' => 255]
        ];
    }

    public function extraFields()
    {
        return ['category', 'cover'];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'category_id' => 'Категория',
            'categoryName' => 'Имя категории',
            'title' => 'Заголовок',
            'description' => 'Описание',
            'is_active' => 'Активна',
            'date_create' => 'Дата создания',
            'date_update' => 'Дата обновления',
            'image' => 'Изображение',
            'cover' => 'Изображение'
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(PortfolioCategory::className(), ['id' => 'category_id']);
    }

    public function getCategoryName()
    {
        return $this->category->name;
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCover()
    {
        return $this->hasOne(Image::className(), ['itemId' => 'id'])
            ->onCondition(['modelName' => $this->tableName()]);
    }

    public function remove()
    {
        $this->updateAttributes(['is_active' => 0]);
    }

    public function restore()
    {
        $this->updateAttributes(['is_active' => 1]);
    }

    public function beforeValidate()
    {
        $this->image = UploadedFile::getInstance($this, 'image');
        return parent::beforeValidate();
    }

}
