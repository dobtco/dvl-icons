<html>
<head>
<style type='text/css'>
  <%= css %>
  .icon_box {
    width: 9rem;
    margin: 2rem;
    text-align: center;
    display: inline-block;
  }
  p {
    font-size: 13px;
    font-family: 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif;
    text-align: center;
    color: #666;
    text-transform: lowercase;
  }
  .icon {
    /*Test that colors and sizes are completely controlled by CSS */
    stroke: #46FFEE;
    width: 5rem;
    height: 5rem;
  }
  .iconfill {
    fill: #46FFEE;
  }
</style>
</head>
<body>
<% for (i in icons){ %>
<div class="icon_box">
  <div><%= icons[i] %></div>
  <p><%= i %></p>
</div>
<% } %>
</body>
</html>
