// requirejs config
require.config({
   paths: {
       "app": "app",
       "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min","libs/jquery/jquery"]
   }
});

requirejs(["app/main"]);
