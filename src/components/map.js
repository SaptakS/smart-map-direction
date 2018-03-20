import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FwdGFrcyIsImEiOiJjamV5M2dvZjEwMm1oMnpsajFodnVteDU0In0.RUK78dPlDlTrMsePv5SGlA';

let Map = class Map extends React.Component {
  map;

  static propTypes = {
    forms: PropTypes.array.isRequired,
    coordinates: PropTypes.array.isRequired
  };

  componentDidUpdate() {
    console.log("Ihere");
    this.setFill();
  }

  componentDidMount() {
    const stops = this.props.forms;
    for (let index = 0; index < stops.length; index++) {
      this.props.coordinates.push(stops[index].data.coordinates);
    }
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.coordinates[3],
      zoom: 16
    });

    this.map.on('load', () => {
      this.map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": this.props.coordinates
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#888",
          "line-width": 8
        }
      });
    });
  }

  setFill() {
    const stops = this.props.forms;
    for (let index = 0; index < stops.length; index++) {
      this.props.coordinates.push(stops[index].data.coordinates);
    }
    let geojson = {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": this.props.coordinates
      }
    };
    setTimeout(this.map.flyTo({ center: this.props.coordinates[3], zoom: 16 }), 3000);
    this.map.getSource("route").setData(geojson);
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

function mapStateToProps(state) {
  return {
    forms: state.forms,
    coordinates: []
  };
}

Map = connect(mapStateToProps)(Map);

export default Map;
