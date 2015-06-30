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
