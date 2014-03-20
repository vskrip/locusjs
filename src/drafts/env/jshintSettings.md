#JSHint in locusjs project
##Description

For control of quality javascript code in locusjs project is used [JSHint](http://jshint.com/ "JSHint").
We use in development proccess TextMate 2 IDE also.
On github for this IDE exist [JSHint bundle for TextMate 2](https://github.com/bodnaristvan/JSHint.tmbundle/ "JSHint.tmbundel on github").

##Settings

For correct work jshint bundle with TextMate 2 we need create some settings.
Create in the project root directory jshint configuration file .jshintrc with follow content:

~~~
{
    "node" : true,
    "jquery" : true,
    "multistr" : true
}
~~~

It allows to using character "\" for placing long string on a some rows, checking quality code with nodejs internal modules and jquery.