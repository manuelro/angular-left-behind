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
<div left-behind lb-body-class="left-behind-element" lb-leave-after></div>
```

##Directive options
The directive comes bundled with multiple options, like custom classes names for the element and body, and leaving point definition; these options are detailed below:

1.`left-behind`: This is the directive itself. It's contents will be used as the classes for the tracked element.

