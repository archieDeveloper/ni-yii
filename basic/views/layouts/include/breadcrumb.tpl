<div class="wrap breadcrumb-wrap">
    <div class="wrap-center">
        {Breadcrumbs::widget([
            'links' => $this->params['breadcrumbs']|default:[],
            'homeLink' => [
                'label' => '',
                'url' => '',
                'template' => '<li><a href="/"><i class="flaticon-home11"></i></a></li>'
            ]
        ])}
    </div>
</div>