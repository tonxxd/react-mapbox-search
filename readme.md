# react-mapbox-search

A location picker powered by mapbox, implemented in React.

## Quick Start

`npm i react-mapbox-search`

## Features

- Suggestions for locations using the mapbox API
- Autofill when user selects suggestion
- Suggestions selectable with mouse click or with arrow key up/down + enter key
- Callback when location is selected, providing the mapbox location object and click event if selected with mouse
- Suggestions show/hide on input focus/blur
- Custom selection color
- Optional ISO 3166-1 country code prop to narrow search

## Usage

```
import SearchBox from "react-mapbox-search";

<SearchBox
    token={mapBoxApiToken}
    country="US"
    callback={({ location, event }) => {
        // location object from mapbox
        // event onMouseDown supplied if suggestion clicked
    })}
    selectColor="#ef4836"
/>
```

## API

| Prop        | Type     | Default   | Description                                    |
| ----------- | -------- | --------- | ---------------------------------------------- |
| token       | string   |           | mapbox API token                               |
| country     | string   | undefined | ISO 3166-1 country code to narrow search       |
| callback    | function | undefined | Callback function fired when suggestion chosen |
| selectColor | string   | "#58A"    | Color for currently selected suggestion item   |
