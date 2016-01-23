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
            'id' => Schema::TYPE_PK,
            'link' => Schema::TYPE_STRING . ' NOT NULL',
            'name' => Schema::TYPE_STRING . ' NOT NULL',
            'description' => Schema::TYPE_STRING . ' NOT NULL',
            'position' => Schema::TYPE_INTEGER,
            'date_create' => Schema::TYPE_DATETIME,
            'date_update' => Schema::TYPE_DATETIME
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
