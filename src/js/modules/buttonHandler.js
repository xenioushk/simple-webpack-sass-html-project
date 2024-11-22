import $ from 'jquery'

const handleButtonClick = () => {
  $(document).on('click', '#myButton', function () {
    alert('Button clicked!')
  })
}

export default handleButtonClick
