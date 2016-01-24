<?php

use yii\db\Schema;
use yii\db\Migration;

class m160123_200358_create_table_portfolio_categories extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%portfolio_category}}', [
            'id' => Schema::TYPE_PK . ' COMMENT "Индификатор категории"',
            'link' => Schema::TYPE_STRING . ' NOT NULL UNIQUE COMMENT "Ссылка на категорию"',
            'name' => Schema::TYPE_STRING . ' NOT NULL UNIQUE COMMENT "Имя категории"',
            'description' => Schema::TYPE_STRING . ' NOT NULL COMMENT "Описание категории"',
            'position' => Schema::TYPE_INTEGER . ' COMMENT "Позиция сортировки категории"',
            'date_create' => Schema::TYPE_DATETIME . ' COMMENT "Дата создания категории"',
            'date_update' => Schema::TYPE_DATETIME . ' COMMENT "Дата обновления категории"'
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%portfolio_category}}');
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
