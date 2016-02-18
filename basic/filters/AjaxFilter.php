<?php

namespace app\filters;

use Yii;
use yii\base\Behavior;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\Response;

/**
 * Filter deny or allow access to actions of controllers.
 *
 * public function behaviors()
 * {
 *     return [
 *         [
 *             'class' => AjaxFilter::className(),
 *             'actions' => ['actionName', 'actionName2'],
 *         ],
 *     ];
 * }
 * @version 0.1.0
 */
class AjaxFilter extends Behavior
{

    /**
     * @var array Actions of controller which will be apply this filter.
     */
    public $actions = [];

    public function events()
    {
        return [Controller::EVENT_BEFORE_ACTION => 'beforeAction'];
    }

    public function beforeAction($event)
    {
        $existActionInFilter = in_array($event->action->id, $this->actions);
        $isAjaxRequest = Yii::$app->request->isAjax;
        if ($existActionInFilter) {
            if ($isAjaxRequest) {
                Yii::$app->response->format = Response::FORMAT_JSON;
            } else {
//                throw new BadRequestHttpException('This URL can call only via Ajax.');
            }
        }
    }
}