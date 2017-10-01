# Circles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Install
Run 'npm install'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Folders \ Files Explanation
#app\models (app classes / models) => 
1. circle.ts (Circle Class)
2. circle-store.ts (CircleStore Class)

#app\services (app services) => 
1. circle.service.ts (Service that provide API communication with Circle & CircleStore APIs)
2. circle.service.spec.ts (UniTest file for circle Service)

#app\circle-list (CircleList component - UI - render circles on screen) => 
1. circle-list.component.ts (Circle List Controller)
2. circle-list.component.html (HTML)
3. circle-list.component.css (CSS)
4. circle-list.component.spec.ts (UniTest file for CircleList component - checks that component is created)
