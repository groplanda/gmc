<?php namespace Acme\Settings;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Acme\Settings\Components\Services' => 'services',
            'Acme\Settings\Components\Contents' => 'contents'
        ];
    }

    public function registerSettings()
    {

    }

}
