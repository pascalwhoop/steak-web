# SteakWeb Overview

This application is based on Angular 2 + Angular Material + Angular flex-layout


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


------

# Todos for steak web app

##Admin

- STEP V1
    - Creation of new Offers
    - Editing of Offers
    - Deletion of Offers
        - Only, if no bookings have been created yet --> Backend Error handling
- STEP V2
    - Creating new Offers based on autocomplete
        1. Start typing the name of the Offer causes an autocomplete query
        2. Rows of previous offers.
            1. "Create new Offer"
            2. "Old Offer 1 | 5,45€"
            3. "Old Offer 2 | 5,45€"
            4. ...
        3. Navigation using keyboard
            - Up/Down Key for up/Down
            - Enter for selection
        4. On Select, the old offer gets filled into the fields
            - Date updated
            - `_id` deleted
    - Preselected data during create new / new based on template
        - date updated to the last used date of this session (or next free date if no date was entered yet in this session)
        - If no lastDate, fetch all offers of the future, check for 'next free day' → set date to this day
- STEP V3
    - while entering title, look for keywords suggesting "non vegetarian" offers
        - e.g. Braten, Wurst, Hack, Schnitzel, Salami, ...

### Tests

- if not all fields entered, button "submit" not ready → ngForm
- price should not allow for anything but numbers and '.'
- On Submit, show Toast
- show spinner on submit
- On autocomplete search, show spinner in NavBar

## Caching

- Cache Offer Array for Application
    - Create HashMap, based on ID
    - For Admin Page: Store in localDB,
    - Keep this abstracted from Controller, only "behind the scenes" in OfferApi

## Offers

- Grid of Cards, each Card a day
- Day of week as big title, date small as subheader
- Each offer as row in list, having a + and - round button

### Tests

- If offer is for next day AND time is after 5pm, disable buttons
    → method for `isTooLate() : boolean`, `Spy.and.return(true)`
- show little toast on success
- show spinner on submit



## Cross feature systems

- `xhrSpinner` component
    - on each async request to API, show spinner. Wrap all calls or hook into event system somehow
- ToastService
    - `showToastWithMessage(message: string, timeout: number, autoDismiss: boolean) : Observable<any>`
- Authentication for http calls
    - Option A: Auth0 wrapping http / HttpAuth
    - Option B: Add on each request
- CachingService
    - Option A: Hard caching [StackOverflow](http://stackoverflow.com/questions/36420814/angular-2-http-caching#36420866)
    - Option B: Caching using ServiceWorker
        - [Basics of Caching in ServiceWorkers](https://medium.com/@philipp.schaechtele/asset-caching-with-service-worker-c40dcda43842#.lyfdat9i4)
        - Problem: Again fixed caching based on URL
    - Option C:
        - "Understand" query in OfferApi
        - Keep a map of Offers based on `_id` in memory/persist in storage
        - always return reference to this object, fill additional offers after request completed
