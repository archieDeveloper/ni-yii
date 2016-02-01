<?php

use yii\db\Schema;
use yii\db\Migration;

class m160201_192044_changeDateFieldsInPortfolio extends Migration
{
    public function up()
    {
        $this->alterColumn('{{%portfolio}}', 'date_update', Schema::TYPE_TIMESTAMP . ' NOT NULL COMMENT "Дата обновления работы"');
        $this->alterColumn('{{%portfolio}}', 'date_create', Schema::TYPE_TIMESTAMP . ' NOT NULL COMMENT "Дата создания работы"');
    }

    public function down()
    {
        $this->alterColumn('{{%portfolio}}', 'date_update', Schema::TYPE_DATETIME . ' NOT NULL COMMENT "Дата обновления работы"');
        $this->alterColumn('{{%portfolio}}', 'date_create', Schema::TYPE_DATETIME . ' NOT NULL COMMENT "Дата создания работы"');
        return true;
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
