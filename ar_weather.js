let coordinates = {}

$(document).ready(function () {
 //call the function
 get_coordinates()
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        //split the values of source and destination in respective corrdinates
        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lon = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lon = destination.split(';')[1]
    } else {
      //show the alert message and add condition to go back to previous page 
      alert('Co-ordinates not selected.')
      window.history.back()
    }
}