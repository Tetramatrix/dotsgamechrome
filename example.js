window.onload = function ready ()
{
  var cd = new Board(5,5,new List());
  cd.AddPlayer(new Element(cd.uid,1,0,"No.","70","20"));
  cd.AddPlayer(new Element(cd.uid,2,0,"No.","70","20"));
}
