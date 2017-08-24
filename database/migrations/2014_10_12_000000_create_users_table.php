<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 191);
            $table->string('email', 191)->unique();
            $table->string('password', 191);
            $table->string('avatar', 191)->nullable();
            $table->date('birthday')->nullable();
            $table->string('phone', 15)->nullable();
            $table->string('employment', 191)->nullable();
            $table->string('address', 191)->nullable();
            $table->string('hobby', 191)->nullable();
            $table->string('study_at', 191)->nullable();
            $table->smallInteger('relationship_status')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
