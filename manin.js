lines = []

function buttonclick()
{
  for(var i = 1 ; i < 18 ; i++)
  {
      lines.push(document.getElementById("input_"+ i).value);
  }
  lines.join(". ");
  document.getElementById('paragraph').innerHTML = " "
  document.getElementById('paragraph').innerHTML = lines
}