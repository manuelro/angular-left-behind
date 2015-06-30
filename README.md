# angular-left-behind

An AngularJS directive that let's you add arbitrary classes to body and element once window scroll has passed over it. Useful for responsive sticky navigation bars and attention catching spots.

##Installation
###Using Bower
If you are using Bower to manage your dependencies you can run:

`bower install angular-left-behind`

##What this does
Oftenly, as a developer, I want to trigger a certain CSS animation after scrolling down and pass over an element on the screen, this is what this directive does: it adds a custom optional class to the target element and another optional class to the `body` element. The rest can be handled via CSS3 animations and transitions.

##Use cases
1. Scroll triggered sticky navbars or menus
2. Scroll triggered CSS animations
3. Scroll triggered CSS pop-ups
4. Scroll triggered CSS modal messages

#The directive
##Use alternatives
The directive can be used as a `class` and as an `attribute`, please refer to [AngularJS Directive Docs](https://docs.angularjs.org/guide/directive) for further information regarding directives use.
##Use example
```html
<!-- Simply add the directive to the element you want to track -->
<div left-behind="element-class" lb-body-class="body-class" lb-leave-after="100px"></div>
```

##Directive options
The directive comes bundled with multiple options, like custom classes names for the element and body, and leaving point definition; these options are detailed below:

`left-behind` 
	is the directive itself. Its contents will be used as the classes for the tracked element.
	```html
		<div left-behind="element-class" lb-body-class="body-class"></div>
	```

`lb-body-class` sets the body class that will be used once the scroll has passed over the element.

`lb-leave-after` includes `element` height in the calculation, therefore the passed over event will be triggered at the end of the element rather than at the beginning of it. Its contents represent a number of pixels that will also be added during calculation.

`lb-leave-before` the same as `lb-leave-after`, its contents also will represent an amount of pixels.

