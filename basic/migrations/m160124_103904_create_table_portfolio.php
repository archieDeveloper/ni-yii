<?php

use yii\db\Schema;
use yii\db\Migration;

class m160124_103904_create_table_portfolio extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%portfolio}}', [
            'id' => Schema::TYPE_PK,
            'category_id' => Schema::TYPE_INTEGER . ' COMMENT "Индификатор категории"',
            'component_image_id' => Schema::TYPE_INTEGER . ' COMMENT "Индификатор изображения"',
            'title' => Schema::TYPE_STRING . ' NOT NULL COMMENT "Заголовок работы"',
            'description' => Schema::TYPE_STRING . ' NOT NULL COMMENT "Описание работы"',
            'is_active' => Schema::TYPE_BOOLEAN . ' NOT NULL COMMENT "Активна ли работа?"',
            'date_create' => Schema::TYPE_DATETIME . ' NOT NULL COMMENT "Дата создания работы"',
            'date_update' => Schema::TYPE_DATETIME . ' NOT NULL COMMENT "Дата обновления работы"'
        ], $tableOptions);
        $this->createIndex(
            'FK_portfolio_category',
            '{{%portfolio}}',
            'category_id'
        );
        $this->addForeignKey(
            'FK_portfolio_category',
            '{{%portfolio}}',
            'category_id',
            '{{%portfolio_category}}',
            'id',
            'SET NULL',
            'CASCADE'
        );
        $this->createIndex(
            'FK_portfolio_component_image',
            '{{%portfolio}}',
            'component_image_id'
        );
        $this->addForeignKey(
            'FK_portfolio_component_image',
            '{{%portfolio}}',
            'component_image_id',
            '{{%component_image}}',
            'id',
            'SET NULL',
            'CASCADE'
        );
    }

    public function down()
    {
        $this->dropTable('{{%portfolio}}');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
