import React from 'react';

class Rrna2Zoom extends React.Component{

    componentDidMount(){

        //add styling
        var allLines = document.getElementById('svg-zoom').getElementsByTagName('line');
        for(var t of allLines){
            t.setAttribute('stroke-linecap',"round");
            if(t.getAttribute('stroke-width')!=2){
                t.setAttribute('stroke-width',1);
            }
            t.setAttribute('stroke','#000000');
        }
        var allCircles = document.getElementById('svg-zoom').getElementsByTagName('circle');
        for(var t of allCircles){
            t.setAttribute('fill', '#000000');
        }
        var allText = document.getElementById('svg-zoom').getElementsByTagName('text');
        for(var t of allText){
            t.setAttribute('font-size', '12');
            t.setAttribute('fill', '#000000');
            t.setAttribute('font-family', 'monospace');
            t.setAttribute("text-anchor", "middle"); 
            t.setAttribute("dominant-baseline", "middle"); 
        }

        //highlight variant
        var variant = this.props.variant;
        var allText = document.getElementById('svg-zoom').getElementsByTagName('title');
        for(var t of allText){
            if(t.innerHTML==variant){
                var textNode = t.parentElement;
                textNode.setAttribute('font-weight',"bold");
                textNode.setAttribute('font-size',"14");
                textNode.setAttribute('fill',"crimson");
                textNode.setAttribute('id', 'highlight');

                //add circle for background color of highlight
                var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                var newX = parseFloat(textNode.getAttribute('x'));
                var newY = parseFloat(textNode.getAttribute('y'));
                circle.setAttribute('cx',newX);
                circle.setAttribute('cy',newY);
                circle.setAttribute('r','14');
                circle.setAttribute('fill','yellow');
                var svgnode = document.getElementById("svg-zoom"); 
                svgnode.insertBefore(circle, svgnode.childNodes[0]);

                //set viewBox for zooming in
                var zoom = (newX-220)+" "+(newY-484)+" 440 704";
                svgnode.setAttribute('viewBox',zoom);
                
            }
        }

    }

    render() {
        return(    
            <svg id="svg-zoom" height="800" width="500" style={{position:'absolute', left:'0',top:'0'}} xmlns="http://www.w3.org/2000/svg">
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1105" y="1425" >G<title>1671</title> </text>
                <text x="1105" y="1425" >G<title>1671</title> </text>
                <line x1="1094.33333333" y1="1424.66666667" x2="1083.66666667" y2="1424.33333333" ><title>1671,1817</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1105" y="1444" >C<title>1672</title> </text>
                <text x="1105" y="1444" >C<title>1672</title> </text>
                <line x1="1094.0" y1="1443.66666667" x2="1083.0" y2="1443.33333333" ><title>1672,1816</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1136" y="1459" >T<title>1673</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1158" y="1490" >A<title>1674</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1166" y="1524" >A<title>1675</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1158" y="1558" >A<title>1676</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1136" y="1586" >C<title>1677</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1107" y="1602" >C<title>1678</title> </text>
                <text x="1107" y="1602" >C<title>1678</title> </text>
                <line x1="1093.0" y1="1602" x2="1085.0" y2="1602" ><title>1678,1797</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1131" y="1612" >T<title>1679</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1153" y="1634" >A<title>1680</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1166" y="1661" >G<title>1681</title> </text>
                <text x="1166" y="1661" >G<title>1681</title> </text>
                <line x1="1165.66666667" y1="1672.0" x2="1165.33333333" y2="1683.0" ><title>1681,1771</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1185" y="1661" >C<title>1682</title> </text>
                <text x="1185" y="1661" >C<title>1682</title> </text>
                <line x1="1185" y1="1680.0" x2="1185" y2="1672.0" ><title>1682,1770</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1211" y="1661" >C<title>1683</title> </text>
                <text x="1211" y="1661" >C<title>1683</title> </text>
                <line x1="1211" y1="1681.0" x2="1211" y2="1673.0" ><title>1683,1768</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1232" y="1661" >C<title>1684</title> </text>
                <text x="1232" y="1661" >C<title>1684</title> </text>
                <line x1="1231.66666667" y1="1672.0" x2="1231.33333333" y2="1683.0" ><title>1684,1767</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1234" y="1645" >C<title>1685</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1237" y="1631" >A<title>1686</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1242" y="1616" >A<title>1687</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1248" y="1602" >A<title>1688</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1256" y="1588" >C<title>1689</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1265" y="1576" >C<title>1690</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1275" y="1564" >C<title>1691</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1286" y="1553" >A<title>1692</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1298" y="1543" >C<title>1693</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1310" y="1534" >T<title>1694</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1324" y="1527" >C<title>1695</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1338" y="1520" >C<title>1696</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1352" y="1516" >A<title>1697</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1368" y="1512" >C<title>1698</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1382" y="1509" >C<title>1699</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1398" y="1508" >T<title>1700</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1413" y="1509" >T<title>1701</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1429" y="1511" >A<title>1702</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1444" y="1514" >C<title>1703</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1458" y="1518" >T<title>1704</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1473" y="1524" >A<title>1705</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1487" y="1531" >C<title>1706</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1500" y="1540" >C<title>1707</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1512" y="1549" >A<title>1708</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1523" y="1560" >G<title>1709</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1533" y="1572" >A<title>1710</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1543" y="1584" >C<title>1711</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1551" y="1597" >A<title>1712</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1557" y="1612" >A<title>1713</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1563" y="1625" >C<title>1714</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1567" y="1640" >C<title>1715</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1570" y="1655" >T<title>1716</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1571" y="1671" >T<title>1717</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1571" y="1687" >A<title>1718</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1570" y="1702" >G<title>1719</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1567" y="1717" >C<title>1720</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1563" y="1732" >C<title>1721</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1557" y="1747" >A<title>1722</title> </text>
                <text x="1557" y="1747" >A<title>1722</title> </text>
                <line x1="1551.66666667" y1="1756.33333333" x2="1546.33333333" y2="1765.66666667" ><title>1722,1729</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1575" y="1746" >A<title>1723</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1589" y="1757" >A<title>1724</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1592" y="1774" >C<title>1725</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1584" y="1790" >C<title>1726</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1567" y="1797" >A<title>1727</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1550" y="1790" >T<title>1728</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1541" y="1775" >T<title>1729</title> </text>
                <text x="1541" y="1775" >T<title>1729</title> </text>
                <line x1="1546.33333333" y1="1765.66666667" x2="1551.66666667" y2="1756.33333333" ><title>1729,1722</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1528" y="1792" >T<title>1730</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1513" y="1808" >A<title>1731</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1496" y="1821" >C<title>1732</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1477" y="1832" >C<title>1733</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1457" y="1840" >C<title>1734</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1436" y="1846" >A<title>1735</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1415" y="1849" >A<title>1736</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1393" y="1850" >A<title>1737</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1372" y="1846" >T<title>1738</title> </text>
                <text x="1372" y="1846" >T<title>1738</title> </text>
                <circle cx="1356.0" cy="1841.0" r="2"><title>1738,1759</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1376" y="1830" >A<title>1739</title> </text>
                <text x="1376" y="1830" >A<title>1739</title> </text>
                <line x1="1365.33333333" y1="1827.0" x2="1354.66666667" y2="1824.0" ><title>1739,1758</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1390" y="1820" >A<title>1740</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1404" y="1809" >A<title>1741</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1412" y="1794" >G<title>1742</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1414" y="1774" >T<title>1743</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1408" y="1759" >A<title>1744</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1397" y="1747" >T<title>1745</title> </text>
                <text x="1397" y="1747" >T<title>1745</title> </text>
                <line x1="1386.33333333" y1="1744.0" x2="1375.66666667" y2="1741.0" ><title>1745,1753</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1403" y="1729" >A<title>1746</title> </text>
                <text x="1403" y="1729" >A<title>1746</title> </text>
                <line x1="1392.33333333" y1="1726.0" x2="1381.66666667" y2="1723.0" ><title>1746,1752</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1412" y="1717" >G<title>1747</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1410" y="1702" >G<title>1748</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1397" y="1692" >C<title>1749</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1381" y="1694" >G<title>1750</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1371" y="1706" >A<title>1751</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1371" y="1720" >T<title>1752</title> </text>
                <text x="1371" y="1720" >T<title>1752</title> </text>
                <line x1="1381.66666667" y1="1723.0" x2="1392.33333333" y2="1726.0" ><title>1752,1746</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1365" y="1738" >A<title>1753</title> </text>
                <text x="1365" y="1738" >A<title>1753</title> </text>
                <line x1="1375.66666667" y1="1741.0" x2="1386.33333333" y2="1744.0" ><title>1753,1745</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1348" y="1747" >G<title>1754</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1333" y="1762" >A<title>1755</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1329" y="1783" >A<title>1756</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1334" y="1803" >A<title>1757</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1344" y="1821" >T<title>1758</title> </text>
                <text x="1344" y="1821" >T<title>1758</title> </text>
                <line x1="1354.66666667" y1="1824.0" x2="1365.33333333" y2="1827.0" ><title>1758,1739</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1340" y="1837" >T<title>1759</title> </text>
                <text x="1340" y="1837" >T<title>1759</title> </text>
                <circle cx="1356.0" cy="1841.0" r="2"><title>1759,1738</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1319" y="1828" >G<title>1760</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1298" y="1816" >A<title>1761</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1280" y="1800" >A<title>1762</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1265" y="1782" >A<title>1763</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1252" y="1761" >C<title>1764</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1242" y="1740" >C<title>1765</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1234" y="1717" >T<title>1766</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1231" y="1694" >G<title>1767</title> </text>
                <text x="1231" y="1694" >G<title>1767</title> </text>
                <line x1="1231.33333333" y1="1683.0" x2="1231.66666667" y2="1672.0" ><title>1767,1684</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1211" y="1693" >G<title>1768</title> </text>
                <text x="1211" y="1693" >G<title>1768</title> </text>
                <line x1="1211" y1="1681.0" x2="1211" y2="1673.0" ><title>1768,1683</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1198" y="1698" >C<title>1769</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1185" y="1691" >G<title>1770</title> </text>
                <text x="1185" y="1691" >G<title>1770</title> </text>
                <line x1="1185" y1="1680.0" x2="1185" y2="1672.0" ><title>1770,1682</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1165" y="1694" >C<title>1771</title> </text>
                <text x="1165" y="1694" >C<title>1771</title> </text>
                <line x1="1165.33333333" y1="1683.0" x2="1165.66666667" y2="1672.0" ><title>1771,1681</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1161" y="1709" >A<title>1772</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1154" y="1722" >A<title>1773</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1144" y="1732" >T<title>1774</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1132" y="1743" >A<title>1775</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1120" y="1749" >G<title>1776</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1105" y="1755" >A<title>1777</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1090" y="1756" >T<title>1778</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1075" y="1755" >A<title>1779</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1061" y="1750" >T<title>1780</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1047" y="1744" >A<title>1781</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1036" y="1735" >G<title>1782</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1026" y="1722" >T<title>1783</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1018" y="1710" >A<title>1784</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1014" y="1696" >C<title>1785</title> </text>
                <text x="1014" y="1696" >C<title>1785</title> </text>
                <line x1="1014" y1="1683.0" x2="1014" y2="1675.0" ><title>1785,1792</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="993" y="1696" >C<title>1786</title> </text>
                <text x="993" y="1696" >C<title>1786</title> </text>
                <line x1="993" y1="1683.0" x2="993" y2="1675.0" ><title>1786,1791</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="976" y="1700" >G<title>1787</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="962" y="1689" >C<title>1788</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="962" y="1672" >A<title>1789</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="975" y="1660" >A<title>1790</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="993" y="1663" >G<title>1791</title> </text>
                <text x="993" y="1663" >G<title>1791</title> </text>
                <line x1="993" y1="1683.0" x2="993" y2="1675.0" ><title>1791,1786</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1014" y="1663" >G<title>1792</title> </text>
                <text x="1014" y="1663" >G<title>1792</title> </text>
                <line x1="1014" y1="1683.0" x2="1014" y2="1675.0" ><title>1792,1785</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1018" y="1646" >G<title>1793</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1027" y="1631" >A<title>1794</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1039" y="1619" >A<title>1795</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1053" y="1610" >A<title>1796</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1071" y="1602" >G<title>1797</title> </text>
                <text x="1071" y="1602" >G<title>1797</title> </text>
                <line x1="1093.0" y1="1602" x2="1085.0" y2="1602" ><title>1797,1678</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1059" y="1600" >A<title>1798</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1048" y="1594" >T<title>1799</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1038" y="1589" >G<title>1800</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1029" y="1582" >A<title>1801</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1021" y="1572" >A<title>1802</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1014" y="1562" >A<title>1803</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1009" y="1551" >A<title>1804</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1006" y="1540" >A<title>1805</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1004" y="1527" >T<title>1806</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1004" y="1516" >T<title>1807</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1006" y="1504" >A<title>1808</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1009" y="1492" >T<title>1809</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1014" y="1482" >A<title>1810</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1021" y="1474" >A<title>1811</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1029" y="1463" >C<title>1812</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1039" y="1456" >C<title>1813</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1049" y="1450" >A<title>1814</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1060" y="1445" >A<title>1815</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1072" y="1443" >G<title>1816</title> </text>
                <text x="1072" y="1443" >G<title>1816</title> </text>
                <line x1="1083.0" y1="1443.33333333" x2="1094.0" y2="1443.66666667" ><title>1816,1672</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1073" y="1424" >C<title>1817</title> </text>
                <text x="1073" y="1424" >C<title>1817</title> </text>
                <line x1="1083.66666667" y1="1424.33333333" x2="1094.33333333" y2="1424.66666667" ><title>1817,1671</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1054" y="1423" >A<title>1818</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1038" y="1417" >T<title>1819</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1021" y="1412" >A<title>1820</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1007" y="1406" >A<title>1821</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="989" y="1394" >T<title>1822</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="976" y="1387" >A<title>1823</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="962" y="1376" >T<title>1824</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="950" y="1363" >A<title>1825</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="939" y="1350" >G<title>1826</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="929" y="1335" >C<title>1827</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="919" y="1321" >A<title>1828</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="912" y="1306" >A<title>1829</title> </text>
                <text x="912" y="1306" >A<title>1829</title> </text>
                <line x1="908.333333333" y1="1295.33333333" x2="904.666666667" y2="1284.66666667" ><title>1829,1841</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="894" y="1312" >G<title>1830</title> </text>
                <text x="894" y="1312" >G<title>1830</title> </text>
                <line x1="890.333333333" y1="1301.33333333" x2="886.666666667" y2="1290.66666667" ><title>1830,1840</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="874" y="1315" >G<title>1831</title> </text>
                <text x="874" y="1315" >G<title>1831</title> </text>
                <line x1="871.0" y1="1305.66666667" x2="868.0" y2="1296.33333333" ><title>1831,1839</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="863" y="1333" >A<title>1832</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="848" y="1338" >C<title>1833</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="831" y="1332" >T<title>1834</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="820" y="1321" >A<title>1835</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="821" y="1302" >A<title>1836</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="832" y="1288" >C<title>1837</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="847" y="1282" >C<title>1838</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="865" y="1287" >C<title>1839</title> </text>
                <text x="865" y="1287" >C<title>1839</title> </text>
                <line x1="868.0" y1="1296.33333333" x2="871.0" y2="1305.66666667" ><title>1839,1831</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="883" y="1280" >C<title>1840</title> </text>
                <text x="883" y="1280" >C<title>1840</title> </text>
                <line x1="886.666666667" y1="1290.66666667" x2="890.333333333" y2="1301.33333333" ><title>1840,1830</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="901" y="1274" >T<title>1841</title> </text>
                <text x="901" y="1274" >T<title>1841</title> </text>
                <line x1="904.666666667" y1="1284.66666667" x2="908.333333333" y2="1295.33333333" ><title>1841,1829</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="896" y="1254" >A<title>1842</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="894" y="1236" >T<title>1843</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="893" y="1219" >A<title>1844</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="895" y="1200" >C<title>1845</title> </text>
                <text x="895" y="1200" >C<title>1845</title> </text>
                <line x1="897.0" y1="1189.33333333" x2="899.0" y2="1178.66666667" ><title>1845,1858</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="882" y="1212" >C<title>1846</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="865" y="1218" >T<title>1847</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="847" y="1217" >T<title>1848</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="832" y="1209" >C<title>1849</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="821" y="1195" >T<title>1850</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="817" y="1177" >G<title>1851</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="821" y="1161" >C<title>1852</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="830" y="1146" >A<title>1853</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="846" y="1136" >T<title>1854</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="863" y="1135" >A<title>1855</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="880" y="1140" >A<title>1856</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="894" y="1151" >T<title>1857</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="901" y="1168" >G<title>1858</title> </text>
                <text x="901" y="1168" >G<title>1858</title> </text>
                <line x1="899.0" y1="1178.66666667" x2="897.0" y2="1189.33333333" ><title>1858,1845</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="906" y="1151" >A<title>1859</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="913" y="1135" >A<title>1860</title> </text>
                <text x="913" y="1135" >A<title>1860</title> </text>
                <line x1="918.333333333" y1="1125.33333333" x2="923.666666667" y2="1115.66666667" ><title>1860,2305</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="896" y="1125" >T<title>1861</title> </text>
                <text x="896" y="1125" >T<title>1861</title> </text>
                <circle cx="904.0" cy="1110.0" r="2"><title>1861,2304</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="877" y="1115" >T<title>1862</title> </text>
                <text x="877" y="1115" >T<title>1862</title> </text>
                <line x1="882.666666667" y1="1105.66666667" x2="888.333333333" y2="1096.33333333" ><title>1862,2303</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="860" y="1106" >A<title>1863</title> </text>
                <text x="860" y="1106" >A<title>1863</title> </text>
                <line x1="865.666666667" y1="1095.66666667" x2="871.333333333" y2="1085.33333333" ><title>1863,2302</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="843" y="1095" >A<title>1864</title> </text>
                <text x="843" y="1095" >A<title>1864</title> </text>
                <line x1="848.333333333" y1="1085.0" x2="853.666666667" y2="1075.0" ><title>1864,2301</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="826" y="1084" >C<title>1865</title> </text>
                <text x="826" y="1084" >C<title>1865</title> </text>
                <line x1="831.333333333" y1="1074.66666667" x2="836.666666667" y2="1065.33333333" ><title>1865,2300</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="817" y="1093" >T<title>1866</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="807" y="1103" >A<title>1867</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="798" y="1110" >G<title>1868</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="787" y="1116" >A<title>1869</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="775" y="1121" >A<title>1870</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="763" y="1125" >A<title>1871</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="751" y="1126" >T<title>1872</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="739" y="1128" >A<title>1873</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="727" y="1127" >A<title>1874</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="714" y="1125" >C<title>1875</title> </text>
                <text x="714" y="1125" >C<title>1875</title> </text>
                <line x1="704.0" y1="1121.0" x2="694.0" y2="1117.0" ><title>1875,1899</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="715" y="1142" >T<title>1876</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="703" y="1155" >T<title>1877</title> </text>
                <text x="703" y="1155" >T<title>1877</title> </text>
                <line x1="692.666666667" y1="1151.66666667" x2="682.333333333" y2="1148.33333333" ><title>1877,1897</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="703" y="1172" >T<title>1878</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="691" y="1186" >G<title>1879</title> </text>
                <text x="691" y="1186" >G<title>1879</title> </text>
                <line x1="681.0" y1="1182.0" x2="671.0" y2="1178.0" ><title>1879,1895</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="684" y="1205" >C<title>1880</title> </text>
                <text x="684" y="1205" >C<title>1880</title> </text>
                <line x1="673.666666667" y1="1201.0" x2="663.333333333" y2="1197.0" ><title>1880,1894</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="691" y="1218" >A<title>1881</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="695" y="1231" >A<title>1882</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="689" y="1250" >G<title>1883</title> </text>
                <text x="689" y="1250" >G<title>1883</title> </text>
                <line x1="680.0" y1="1256.0" x2="671.0" y2="1262.0" ><title>1883,1890</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="700" y="1266" >G<title>1884</title> </text>
                <text x="700" y="1266" >G<title>1884</title> </text>
                <line x1="691.0" y1="1272.33333333" x2="682.0" y2="1278.66666667" ><title>1884,1889</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="713" y="1279" >A<title>1885</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="712" y="1296" >G<title>1886</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="697" y="1307" >A<title>1887</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="680" y="1302" >G<title>1888</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="673" y="1285" >C<title>1889</title> </text>
                <text x="673" y="1285" >C<title>1889</title> </text>
                <line x1="682.0" y1="1278.66666667" x2="691.0" y2="1272.33333333" ><title>1889,1884</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="662" y="1268" >C<title>1890</title> </text>
                <text x="662" y="1268" >C<title>1890</title> </text>
                <line x1="671.0" y1="1262.0" x2="680.0" y2="1256.0" ><title>1890,1883</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="637" y="1257" >A<title>1891</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="623" y="1232" >A<title>1892</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="632" y="1207" >A<title>1893</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="653" y="1193" >G<title>1894</title> </text>
                <text x="653" y="1193" >G<title>1894</title> </text>
                <line x1="663.333333333" y1="1197.0" x2="673.666666667" y2="1201.0" ><title>1894,1880</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="661" y="1174" >C<title>1895</title> </text>
                <text x="661" y="1174" >C<title>1895</title> </text>
                <line x1="671.0" y1="1178.0" x2="681.0" y2="1182.0" ><title>1895,1879</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="660" y="1155" >T<title>1896</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="672" y="1145" >A<title>1897</title> </text>
                <text x="672" y="1145" >A<title>1897</title> </text>
                <line x1="682.333333333" y1="1148.33333333" x2="692.666666667" y2="1151.66666667" ><title>1897,1877</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="672" y="1127" >A<title>1898</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="684" y="1113" >G<title>1899</title> </text>
                <text x="684" y="1113" >G<title>1899</title> </text>
                <line x1="694.0" y1="1117.0" x2="704.0" y2="1121.0" ><title>1899,1875</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="670" y="1106" >A<title>1900</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="657" y="1098" >C<title>1901</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="648" y="1088" >C<title>1902</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="639" y="1075" >C<title>1903</title> </text>
                <text x="639" y="1075" >C<title>1903</title> </text>
                <line x1="632.666666667" y1="1066.33333333" x2="626.333333333" y2="1057.66666667" ><title>1903,2019</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="622" y="1087" >C<title>1904</title> </text>
                <text x="622" y="1087" >C<title>1904</title> </text>
                <line x1="616.0" y1="1078.0" x2="610.0" y2="1069.0" ><title>1904,2018</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="612" y="1102" >C<title>1905</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="594" y="1105" >G<title>1906</title> </text>
                <text x="594" y="1105" >G<title>1906</title> </text>
                <line x1="588.333333333" y1="1096.0" x2="582.666666667" y2="1087.0" ><title>1906,2016</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="591" y="1127" >A<title>1907</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="578" y="1142" >A<title>1908</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="558" y="1150" >A<title>1909</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="537" y="1144" >C<title>1910</title> </text>
                <text x="537" y="1144" >C<title>1910</title> </text>
                <circle cx="527.0" cy="1131.0" r="2"><title>1910,2010</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="521" y="1157" >C<title>1911</title> </text>
                <text x="521" y="1157" >C<title>1911</title> </text>
                <line x1="514.333333333" y1="1149.0" x2="507.666666667" y2="1141.0" ><title>1911,2009</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="506" y="1170" >A<title>1912</title> </text>
                <text x="506" y="1170" >A<title>1912</title> </text>
                <circle cx="495.0" cy="1157.0" r="2"><title>1912,2008</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="490" y="1183" >G<title>1913</title> </text>
                <text x="490" y="1183" >G<title>1913</title> </text>
                <circle cx="476.0" cy="1170.0" r="2"><title>1913,2007</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="483" y="1200" >A<title>1914</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="463" y="1213" >C<title>1915</title> </text>
                <text x="463" y="1213" >C<title>1915</title> </text>
                <line x1="455.333333333" y1="1205.66666667" x2="447.666666667" y2="1198.33333333" ><title>1915,2004</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="466" y="1224" >G<title>1916</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="466" y="1236" >A<title>1917</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="464" y="1246" >G<title>1918</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="459" y="1256" >C<title>1919</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="451" y="1263" >T<title>1920</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1275" >A<title>1921</title> </text>
                <text x="438" y="1275" >A<title>1921</title> </text>
                <line x1="425.0" y1="1275" x2="417.0" y2="1275" ><title>1921,1983</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1297" >C<title>1922</title> </text>
                <text x="438" y="1297" >C<title>1922</title> </text>
                <line x1="426.666666667" y1="1296.66666667" x2="415.333333333" y2="1296.33333333" ><title>1922,1982</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1315" >C<title>1923</title> </text>
                <text x="438" y="1315" >C<title>1923</title> </text>
                <line x1="425.0" y1="1315" x2="417.0" y2="1315" ><title>1923,1981</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1335" >T<title>1924</title> </text>
                <text x="438" y="1335" >T<title>1924</title> </text>
                <line x1="426.666666667" y1="1335.33333333" x2="415.333333333" y2="1335.66666667" ><title>1924,1980</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1356" >A<title>1925</title> </text>
                <text x="438" y="1356" >A<title>1925</title> </text>
                <line x1="426.666666667" y1="1355.66666667" x2="415.333333333" y2="1355.33333333" ><title>1925,1979</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="451" y="1369" >A<title>1926</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="451" y="1389" >G<title>1927</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1402" >A<title>1928</title> </text>
                <text x="438" y="1402" >A<title>1928</title> </text>
                <line x1="425.0" y1="1402" x2="417.0" y2="1402" ><title>1928,1976</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1422" >A<title>1929</title> </text>
                <text x="438" y="1422" >A<title>1929</title> </text>
                <line x1="425.0" y1="1422" x2="417.0" y2="1422" ><title>1929,1975</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="1447" >C<title>1930</title> </text>
                <text x="438" y="1447" >C<title>1930</title> </text>
                <line x1="427.333333333" y1="1447.33333333" x2="416.666666667" y2="1447.66666667" ><title>1930,1973</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="455" y="1460" >A<title>1931</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="464" y="1479" >G<title>1932</title> </text>
                <text x="464" y="1479" >G<title>1932</title> </text>
                <line x1="461.333333333" y1="1489.66666667" x2="458.666666667" y2="1500.33333333" ><title>1932,1942</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="483" y="1483" >C<title>1933</title> </text>
                <text x="483" y="1483" >C<title>1933</title> </text>
                <line x1="480.333333333" y1="1494.0" x2="477.666666667" y2="1505.0" ><title>1933,1941</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="503" y="1488" >T<title>1934</title> </text>
                <text x="503" y="1488" >T<title>1934</title> </text>
                <line x1="500.333333333" y1="1499.0" x2="497.666666667" y2="1510.0" ><title>1934,1940</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="520" y="1486" >A<title>1935</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="534" y="1497" >A<title>1936</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="537" y="1514" >A<title>1937</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="526" y="1529" >A<title>1938</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="509" y="1531" >G<title>1939</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="495" y="1521" >A<title>1940</title> </text>
                <text x="495" y="1521" >A<title>1940</title> </text>
                <line x1="497.666666667" y1="1510.0" x2="500.333333333" y2="1499.0" ><title>1940,1934</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="475" y="1516" >G<title>1941</title> </text>
                <text x="475" y="1516" >G<title>1941</title> </text>
                <line x1="477.666666667" y1="1505.0" x2="480.333333333" y2="1494.0" ><title>1941,1933</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="456" y="1511" >C<title>1942</title> </text>
                <text x="456" y="1511" >C<title>1942</title> </text>
                <line x1="458.666666667" y1="1500.33333333" x2="461.333333333" y2="1489.66666667" ><title>1942,1932</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="443" y="1521" >A<title>1943</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="429" y="1527" >C<title>1944</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="413" y="1526" >A<title>1945</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="398" y="1519" >C<title>1946</title> </text>
                <text x="398" y="1519" >C<title>1946</title> </text>
                <line x1="392.666666667" y1="1510.0" x2="387.333333333" y2="1501.0" ><title>1946,1970</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="381" y="1530" >C<title>1947</title> </text>
                <text x="381" y="1530" >C<title>1947</title> </text>
                <line x1="375.333333333" y1="1520.66666667" x2="369.666666667" y2="1511.33333333" ><title>1947,1969</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="364" y="1540" >C<title>1948</title> </text>
                <text x="364" y="1540" >C<title>1948</title> </text>
                <line x1="358.333333333" y1="1530.66666667" x2="352.666666667" y2="1521.33333333" ><title>1948,1968</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="357" y="1554" >G<title>1949</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="344" y="1561" >T<title>1950</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="329" y="1560" >C<title>1951</title> </text>
                <text x="329" y="1560" >C<title>1951</title> </text>
                <line x1="323.666666667" y1="1550.66666667" x2="318.333333333" y2="1541.33333333" ><title>1951,1966</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="311" y="1569" >T<title>1952</title> </text>
                <text x="311" y="1569" >T<title>1952</title> </text>
                <line x1="305.666666667" y1="1560.0" x2="300.333333333" y2="1551.0" ><title>1952,1965</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="294" y="1580" >A<title>1953</title> </text>
                <text x="294" y="1580" >A<title>1953</title> </text>
                <line x1="288.666666667" y1="1570.33333333" x2="283.333333333" y2="1560.66666667" ><title>1953,1964</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="276" y="1590" >T<title>1954</title> </text>
                <text x="276" y="1590" >T<title>1954</title> </text>
                <line x1="270.666666667" y1="1580.66666667" x2="265.333333333" y2="1571.33333333" ><title>1954,1963</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="271" y="1607" >G<title>1955</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="256" y="1618" >T<title>1956</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="238" y="1621" >A<title>1957</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="223" y="1611" >G<title>1958</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="215" y="1596" >C<title>1959</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="215" y="1579" >A<title>1960</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="226" y="1565" >A<title>1961</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="243" y="1558" >A<title>1962</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="260" y="1562" >A<title>1963</title> </text>
                <text x="260" y="1562" >A<title>1963</title> </text>
                <line x1="265.333333333" y1="1571.33333333" x2="270.666666667" y2="1580.66666667" ><title>1963,1954</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="278" y="1551" >T<title>1964</title> </text>
                <text x="278" y="1551" >T<title>1964</title> </text>
                <line x1="283.333333333" y1="1560.66666667" x2="288.666666667" y2="1570.33333333" ><title>1964,1953</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="295" y="1542" >A<title>1965</title> </text>
                <text x="295" y="1542" >A<title>1965</title> </text>
                <line x1="300.333333333" y1="1551.0" x2="305.666666667" y2="1560.0" ><title>1965,1952</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="313" y="1532" >G<title>1966</title> </text>
                <text x="313" y="1532" >G<title>1966</title> </text>
                <line x1="318.333333333" y1="1541.33333333" x2="323.666666667" y2="1550.66666667" ><title>1966,1951</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="325" y="1514" >T<title>1967</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="347" y="1512" >G<title>1968</title> </text>
                <text x="347" y="1512" >G<title>1968</title> </text>
                <line x1="352.666666667" y1="1521.33333333" x2="358.333333333" y2="1530.66666667" ><title>1968,1948</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="364" y="1502" >G<title>1969</title> </text>
                <text x="364" y="1502" >G<title>1969</title> </text>
                <line x1="369.666666667" y1="1511.33333333" x2="375.333333333" y2="1520.66666667" ><title>1969,1947</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="382" y="1492" >G<title>1970</title> </text>
                <text x="382" y="1492" >G<title>1970</title> </text>
                <line x1="387.333333333" y1="1501.0" x2="392.666666667" y2="1510.0" ><title>1970,1946</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="383" y="1474" >A<title>1971</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="391" y="1459" >A<title>1972</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="406" y="1448" >G<title>1973</title> </text>
                <text x="406" y="1448" >G<title>1973</title> </text>
                <line x1="416.666666667" y1="1447.66666667" x2="427.333333333" y2="1447.33333333" ><title>1973,1930</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="398" y="1435" >A<title>1974</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="405" y="1422" >T<title>1975</title> </text>
                <text x="405" y="1422" >T<title>1975</title> </text>
                <line x1="425.0" y1="1422" x2="417.0" y2="1422" ><title>1975,1929</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1402" >T<title>1976</title> </text>
                <text x="404" y="1402" >T<title>1976</title> </text>
                <line x1="425.0" y1="1402" x2="417.0" y2="1402" ><title>1976,1928</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="391" y="1388" >T<title>1977</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="391" y="1369" >A<title>1978</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1355" >T<title>1979</title> </text>
                <text x="404" y="1355" >T<title>1979</title> </text>
                <line x1="415.333333333" y1="1355.33333333" x2="426.666666667" y2="1355.66666667" ><title>1979,1925</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1336" >A<title>1980</title> </text>
                <text x="404" y="1336" >A<title>1980</title> </text>
                <line x1="415.333333333" y1="1335.66666667" x2="426.666666667" y2="1335.33333333" ><title>1980,1924</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1315" >G<title>1981</title> </text>
                <text x="404" y="1315" >G<title>1981</title> </text>
                <line x1="425.0" y1="1315" x2="417.0" y2="1315" ><title>1981,1923</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1296" >G<title>1982</title> </text>
                <text x="404" y="1296" >G<title>1982</title> </text>
                <line x1="415.333333333" y1="1296.33333333" x2="426.666666667" y2="1296.66666667" ><title>1982,1922</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="404" y="1275" >T<title>1983</title> </text>
                <text x="404" y="1275" >T<title>1983</title> </text>
                <line x1="425.0" y1="1275" x2="417.0" y2="1275" ><title>1983,1921</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="382" y="1262" >A<title>1984</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="372" y="1238" >G<title>1985</title> </text>
                <text x="372" y="1238" >G<title>1985</title> </text>
                <line x1="374.333333333" y1="1227.33333333" x2="376.666666667" y2="1216.66666667" ><title>1985,2001</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="347" y="1246" >A<title>1986</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="328" y="1230" >G<title>1987</title> </text>
                <text x="328" y="1230" >G<title>1987</title> </text>
                <line x1="329.666666667" y1="1219.0" x2="331.333333333" y2="1208.0" ><title>1987,1997</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="307" y="1227" >G<title>1988</title> </text>
                <text x="307" y="1227" >G<title>1988</title> </text>
                <line x1="309.0" y1="1216.0" x2="311.0" y2="1205.0" ><title>1988,1996</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="292" y="1235" >C<title>1989</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="275" y="1232" >G<title>1990</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="262" y="1220" >A<title>1991</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="259" y="1202" >C<title>1992</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="267" y="1187" >A<title>1993</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="283" y="1179" >A<title>1994</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="300" y="1182" >A<title>1995</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="313" y="1194" >C<title>1996</title> </text>
                <text x="313" y="1194" >C<title>1996</title> </text>
                <line x1="311.0" y1="1205.0" x2="309.0" y2="1216.0" ><title>1996,1988</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="333" y="1197" >C<title>1997</title> </text>
                <text x="333" y="1197" >C<title>1997</title> </text>
                <line x1="331.333333333" y1="1208.0" x2="329.666666667" y2="1219.0" ><title>1997,1987</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="344" y="1191" >T<title>1998</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="358" y="1190" >A<title>1999</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="370" y="1195" >C<title>2000</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="379" y="1206" >C<title>2001</title> </text>
                <text x="379" y="1206" >C<title>2001</title> </text>
                <line x1="376.666666667" y1="1216.66666667" x2="374.333333333" y2="1227.33333333" ><title>2001,1985</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="396" y="1189" >G<title>2002</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="418" y="1184" >A<title>2003</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="440" y="1191" >G<title>2004</title> </text>
                <text x="440" y="1191" >G<title>2004</title> </text>
                <line x1="447.666666667" y1="1198.33333333" x2="455.333333333" y2="1205.66666667" ><title>2004,1915</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="440" y="1173" >C<title>2005</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="452" y="1159" >C<title>2006</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="462" y="1157" >T<title>2007</title> </text>
                <text x="462" y="1157" >T<title>2007</title> </text>
                <circle cx="476.0" cy="1170.0" r="2"><title>2007,1913</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="485" y="1144" >G<title>2008</title> </text>
                <text x="485" y="1144" >G<title>2008</title> </text>
                <circle cx="495.0" cy="1157.0" r="2"><title>2008,1912</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="501" y="1133" >G<title>2009</title> </text>
                <text x="501" y="1133" >G<title>2009</title> </text>
                <line x1="507.666666667" y1="1141.0" x2="514.333333333" y2="1149.0" ><title>2009,1911</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="517" y="1119" >T<title>2010</title> </text>
                <text x="517" y="1119" >T<title>2010</title> </text>
                <circle cx="527.0" cy="1131.0" r="2"><title>2010,1910</title> </circle>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="517" y="1105" >G<title>2011</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="521" y="1090" >A<title>2012</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="533" y="1078" >T<title>2013</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="547" y="1072" >A<title>2014</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="562" y="1072" >G<title>2015</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="577" y="1078" >C<title>2016</title> </text>
                <text x="577" y="1078" >C<title>2016</title> </text>
                <line x1="582.666666667" y1="1087.0" x2="588.333333333" y2="1096.0" ><title>2016,1906</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="586" y="1063" >T<title>2017</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="604" y="1060" >G<title>2018</title> </text>
                <text x="604" y="1060" >G<title>2018</title> </text>
                <line x1="610.0" y1="1069.0" x2="616.0" y2="1078.0" ><title>2018,1904</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="620" y="1049" >G<title>2019</title> </text>
                <text x="620" y="1049">G<title>2019</title> </text>
                <line x1="626.333333333" y1="1057.66666667" x2="632.666666667" y2="1066.33333333"><title>2019,1903</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="621" y="1011">T<title>2020</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="630" y="974">T<title>2021</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="650" y="940">G<title>2022</title> </text>
                <text x="650" y="940">G<title>2022</title> </text>
                <line x1="658.333333333" y1="932.666666667" x2="666.666666667" y2="925.333333333"><title>2022,2271</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="636" y="925">T<title>2023</title> </text>
                <text x="636" y="925">T<title>2023</title> </text>
                <line x1="644.333333333" y1="918.0" x2="652.666666667" y2="911.0"><title>2023,2270</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="623" y="910">C<title>2024</title> </text>
                <text x="623" y="910">C<title>2024</title> </text>
                <line x1="631.333333333" y1="902.666666667" x2="639.666666667" y2="895.333333333"><title>2024,2269</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="610" y="895">C<title>2025</title> </text>
                <text x="610" y="895">C<title>2025</title> </text>
                <line x1="618.0" y1="887.666666667" x2="626.0" y2="880.333333333"><title>2025,2268</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="596" y="880">A<title>2026</title> </text>
                <text x="596" y="880">A<title>2026</title> </text>
                <line x1="604.0" y1="872.333333333" x2="612.0" y2="864.666666667"><title>2026,2267</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="582" y="866">A<title>2027</title> </text>
                <text x="582" y="866">A<title>2027</title> </text>
                <line x1="590.333333333" y1="858.0" x2="598.666666667" y2="850.0"><title>2027,2266</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="571" y="871">G<title>2028</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="561" y="875">A<title>2029</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="549" y="879">T<title>2030</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="537" y="881">A<title>2031</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="522" y="883">G<title>2032</title> </text>
                <text x="522" y="883">G<title>2032</title> </text>
                <line x1="511.333333333" y1="880.666666667" x2="500.666666667" y2="878.333333333"><title>2032,2043</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="516" y="910">A<title>2033</title> </text>
                <text x="516" y="910">A<title>2033</title> </text>
                <line x1="505.333333333" y1="906.666666667" x2="494.666666667" y2="903.333333333"><title>2033,2041</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="518" y="923">A<title>2034</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="509" y="934">T<title>2035</title> </text>
                <text x="509" y="934">T<title>2035</title> </text><circle cx="493.0" cy="929.0" r="2"><title>2035,2040</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="507" y="952">C<title>2036</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="492" y="962">T<title>2037</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="476" y="956">T<title>2038</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="468" y="941">A<title>2039</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="477" y="925">G<title>2040</title> </text>
                <text x="477" y="925">G<title>2040</title> </text><circle cx="493.0" cy="929.0" r="2"><title>2040,2035</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="484" y="900">T<title>2041</title> </text>
                <text x="484" y="900">T<title>2041</title> </text>
                <line x1="494.666666667" y1="903.333333333" x2="505.333333333" y2="906.666666667"><title>2041,2033</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="480" y="887">T<title>2042</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="490" y="876">C<title>2043</title> </text>
                <text x="490" y="876">C<title>2043</title> </text>
                <line x1="500.666666667" y1="878.333333333" x2="511.333333333" y2="880.666666667"><title>2043,2032</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="470" y="867">A<title>2044</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="450" y="858">A<title>2045</title> </text>
                <text x="450" y="858">A<title>2045</title> </text>
                <line x1="441.333333333" y1="850.333333333" x2="432.666666667" y2="842.666666667"><title>2045,2095</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="438" y="874">C<title>2046</title> </text>
                <text x="438" y="874">C<title>2046</title> </text>
                <line x1="429.333333333" y1="867.0" x2="420.666666667" y2="860.0"><title>2046,2094</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="433" y="893">T<title>2047</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="413" y="904">T<title>2048</title> </text>
                <text x="413" y="904">T<title>2048</title> </text>
                <line x1="404.333333333" y1="897.333333333" x2="395.666666667" y2="890.666666667"><title>2048,2091</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="400" y="920">T<title>2049</title> </text>
                <text x="400" y="920">T<title>2049</title> </text>
                <line x1="391.333333333" y1="913.333333333" x2="382.666666667" y2="906.666666667"><title>2049,2090</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="387" y="937">A<title>2050</title> </text>
                <text x="387" y="937">A<title>2050</title> </text>
                <line x1="378.666666667" y1="929.666666667" x2="370.333333333" y2="922.333333333"><title>2050,2089</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="374" y="952">A<title>2051</title> </text>
                <text x="374" y="952">A<title>2051</title> </text>
                <line x1="365.666666667" y1="944.666666667" x2="357.333333333" y2="937.333333333"><title>2051,2088</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="361" y="968">A<title>2052</title> </text>
                <text x="361" y="968">A<title>2052</title> </text>
                <line x1="352.666666667" y1="960.666666667" x2="344.333333333" y2="953.333333333"><title>2052,2087</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="349" y="982">T<title>2053</title> </text>
                <text x="349" y="982">T<title>2053</title> </text>
                <line x1="340.333333333" y1="975.666666667" x2="331.666666667" y2="969.333333333"><title>2053,2086</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="336" y="998">T<title>2054</title> </text>
                <text x="336" y="998">T<title>2054</title> </text>
                <line x1="327.333333333" y1="991.333333333" x2="318.666666667" y2="984.666666667"><title>2054,2085</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="323" y="1014">T<title>2055</title> </text>
                <text x="323" y="1014">T<title>2055</title> </text>
                <line x1="314.666666667" y1="1007.33333333" x2="306.333333333" y2="1000.66666667"><title>2055,2084</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="310" y="1030">G<title>2056</title> </text>
                <text x="310" y="1030">G<title>2056</title> </text><circle cx="297.0" cy="1019.0" r="2"><title>2056,2083</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="298" y="1046">C<title>2057</title> </text>
                <text x="298" y="1046">C<title>2057</title> </text>
                <line x1="289.666666667" y1="1039.0" x2="281.333333333" y2="1032.0"><title>2057,2082</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="302" y="1061">C<title>2058</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="301" y="1077">C<title>2059</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="293" y="1092">A<title>2060</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="282" y="1102">C<title>2061</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="266" y="1107">A<title>2062</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="251" y="1106">G<title>2063</title> </text>
                <text x="251" y="1106">G<title>2063</title> </text>
                <line x1="242.333333333" y1="1099.33333333" x2="233.666666667" y2="1092.66666667"><title>2063,2077</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="238" y="1123">A<title>2064</title> </text>
                <text x="238" y="1123">A<title>2064</title> </text><circle cx="225.0" cy="1112.0" r="2"><title>2064,2076</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="243" y="1139">A<title>2065</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="240" y="1156">C<title>2066</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="230" y="1170">C<title>2067</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="214" y="1179">C<title>2068</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="196" y="1179">T<title>2069</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="180" y="1172">C<title>2070</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="169" y="1159">T<title>2071</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="164" y="1142">A<title>2072</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="168" y="1124">A<title>2073</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="179" y="1110">A<title>2074</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="194" y="1102">T<title>2075</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="213" y="1102">C<title>2076</title> </text>
                <text x="213" y="1102">C<title>2076</title> </text><circle cx="225.0" cy="1112.0" r="2"><title>2076,2064</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="225" y="1086">C<title>2077</title> </text>
                <text x="225" y="1086">C<title>2077</title> </text>
                <line x1="233.666666667" y1="1092.66666667" x2="242.333333333" y2="1099.33333333"><title>2077,2063</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="219" y="1067">C<title>2078</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="222" y="1048">C<title>2079</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="235" y="1032">T<title>2080</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="253" y="1024">T<title>2081</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="273" y="1025">G<title>2082</title> </text>
                <text x="273" y="1025">G<title>2082</title> </text>
                <line x1="281.333333333" y1="1032.0" x2="289.666666667" y2="1039.0"><title>2082,2057</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="285" y="1008">T<title>2083</title> </text>
                <text x="285" y="1008">T<title>2083</title> </text><circle cx="297.0" cy="1019.0" r="2"><title>2083,2056</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="298" y="994">A<title>2084</title> </text>
                <text x="298" y="994">A<title>2084</title> </text>
                <line x1="306.333333333" y1="1000.66666667" x2="314.666666667" y2="1007.33333333"><title>2084,2055</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="310" y="978">A<title>2085</title> </text>
                <text x="310" y="978">A<title>2085</title> </text>
                <line x1="318.666666667" y1="984.666666667" x2="327.333333333" y2="991.333333333"><title>2085,2054</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="323" y="963">A<title>2086</title> </text>
                <text x="323" y="963">A<title>2086</title> </text>
                <line x1="331.666666667" y1="969.333333333" x2="340.333333333" y2="975.666666667"><title>2086,2053</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="336" y="946">T<title>2087</title> </text>
                <text x="336" y="946">T<title>2087</title> </text>
                <line x1="344.333333333" y1="953.333333333" x2="352.666666667" y2="960.666666667"><title>2087,2052</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="349" y="930">T<title>2088</title> </text>
                <text x="349" y="930">T<title>2088</title> </text>
                <line x1="357.333333333" y1="937.333333333" x2="365.666666667" y2="944.666666667"><title>2088,2051</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="362" y="915">T<title>2089</title> </text>
                <text x="362" y="915">T<title>2089</title> </text>
                <line x1="370.333333333" y1="922.333333333" x2="378.666666667" y2="929.666666667"><title>2089,2050</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="374" y="900">A<title>2090</title> </text>
                <text x="374" y="900">A<title>2090</title> </text>
                <line x1="382.666666667" y1="906.666666667" x2="391.333333333" y2="913.333333333"><title>2090,2049</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="387" y="884">A<title>2091</title> </text>
                <text x="387" y="884">A<title>2091</title> </text>
                <line x1="395.666666667" y1="890.666666667" x2="404.333333333" y2="897.333333333"><title>2091,2048</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="389" y="869">C<title>2092</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="398" y="857">T<title>2093</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="412" y="853">G<title>2094</title> </text>
                <text x="412" y="853">G<title>2094</title> </text>
                <line x1="420.666666667" y1="860.0" x2="429.333333333" y2="867.0"><title>2094,2046</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="424" y="835">T<title>2095</title> </text>
                <text x="424" y="835">T<title>2095</title> </text>
                <line x1="432.666666667" y1="842.666666667" x2="441.333333333" y2="850.333333333"><title>2095,2045</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="419" y="811">T<title>2096</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="414" y="790">A<title>2097</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="413" y="767">G<title>2098</title> </text>
                <text x="413" y="767">G<title>2098</title> </text>
                <line x1="415.0" y1="756.333333333" x2="417.0" y2="745.666666667"><title>2098,2123</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="393" y="761">T<title>2099</title> </text>
                <text x="393" y="761">T<title>2099</title> </text>
                <line x1="395.0" y1="750.666666667" x2="397.0" y2="740.333333333"><title>2099,2122</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="373" y="759">C<title>2100</title> </text>
                <text x="373" y="759">C<title>2100</title> </text>
                <line x1="375.0" y1="748.0" x2="377.0" y2="737.0"><title>2100,2121</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="353" y="754">C<title>2101</title> </text>
                <text x="353" y="754">C<title>2101</title> </text>
                <line x1="355.333333333" y1="743.333333333" x2="357.666666667" y2="732.666666667"><title>2101,2120</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="333" y="750">A<title>2102</title> </text>
                <text x="333" y="750">A<title>2102</title> </text>
                <line x1="335.333333333" y1="739.0" x2="337.666666667" y2="728.0"><title>2102,2119</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="313" y="746">A<title>2103</title> </text>
                <text x="313" y="746">A<title>2103</title> </text>
                <line x1="315.333333333" y1="735.0" x2="317.666666667" y2="724.0"><title>2103,2118</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="293" y="743">A<title>2104</title> </text>
                <text x="293" y="743">A<title>2104</title> </text>
                <line x1="295.333333333" y1="731.666666667" x2="297.666666667" y2="720.333333333"><title>2104,2117</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="274" y="738">G<title>2105</title> </text>
                <text x="274" y="738">G<title>2105</title> </text>
                <line x1="276.0" y1="727.333333333" x2="278.0" y2="716.666666667"><title>2105,2116</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="254" y="734">A<title>2106</title> </text>
                <text x="254" y="734">A<title>2106</title> </text>
                <line x1="256.0" y1="723.0" x2="258.0" y2="712.0"><title>2106,2115</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="235" y="729">G<title>2107</title> </text>
                <text x="235" y="729">G<title>2107</title> </text>
                <line x1="237.0" y1="718.333333333" x2="239.0" y2="707.666666667"><title>2107,2114</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="218" y="735">G<title>2108</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="201" y="729">A<title>2109</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="193" y="714">A<title>2110</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="196" y="695">C<title>2111</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="210" y="686">A<title>2112</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="228" y="685">G<title>2113</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="241" y="697">C<title>2114</title> </text>
                <text x="241" y="697">C<title>2114</title> </text>
                <line x1="239.0" y1="707.666666667" x2="237.0" y2="718.333333333"><title>2114,2107</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="260" y="701">T<title>2115</title> </text>
                <text x="260" y="701">T<title>2115</title> </text>
                <line x1="258.0" y1="712.0" x2="256.0" y2="723.0"><title>2115,2106</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="280" y="706">C<title>2116</title> </text>
                <text x="280" y="706">C<title>2116</title> </text>
                <line x1="278.0" y1="716.666666667" x2="276.0" y2="727.333333333"><title>2116,2105</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="300" y="709">T<title>2117</title> </text>
                <text x="300" y="709">T<title>2117</title> </text>
                <line x1="297.666666667" y1="720.333333333" x2="295.333333333" y2="731.666666667"><title>2117,2104</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="320" y="713">T<title>2118</title> </text>
                <text x="320" y="713">T<title>2118</title> </text>
                <line x1="317.666666667" y1="724.0" x2="315.333333333" y2="735.0"><title>2118,2103</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="340" y="717">T<title>2119</title> </text>
                <text x="340" y="717">T<title>2119</title> </text>
                <line x1="337.666666667" y1="728.0" x2="335.333333333" y2="739.0"><title>2119,2102</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="360" y="722">G<title>2120</title> </text>
                <text x="360" y="722">G<title>2120</title> </text>
                <line x1="357.666666667" y1="732.666666667" x2="355.333333333" y2="743.333333333"><title>2120,2101</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="379" y="726">G<title>2121</title> </text>
                <text x="379" y="726">G<title>2121</title> </text>
                <line x1="377.0" y1="737.0" x2="375.0" y2="748.0"><title>2121,2100</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="399" y="730">A<title>2122</title> </text>
                <text x="399" y="730">A<title>2122</title> </text>
                <line x1="397.0" y1="740.333333333" x2="395.0" y2="750.666666667"><title>2122,2099</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="419" y="735">C<title>2123</title> </text>
                <text x="419" y="735">C<title>2123</title> </text>
                <line x1="417.0" y1="745.666666667" x2="415.0" y2="756.333333333"><title>2123,2098</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="426" y="718">A<title>2124</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="436" y="703">C<title>2125</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="449" y="690">T<title>2126</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="462" y="680">A<title>2127</title> </text>
                <text x="462" y="680">A<title>2127</title> </text>
                <line x1="472.0" y1="675.333333333" x2="482.0" y2="670.666666667"><title>2127,2138</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="454" y="661">G<title>2128</title> </text>
                <text x="454" y="661">G<title>2128</title> </text>
                <line x1="464.0" y1="656.666666667" x2="474.0" y2="652.333333333"><title>2128,2137</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="446" y="643">G<title>2129</title> </text>
                <text x="446" y="643">G<title>2129</title> </text>
                <line x1="456.0" y1="638.666666667" x2="466.0" y2="634.333333333"><title>2129,2136</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="431" y="633">A<title>2130</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="427" y="616">A<title>2131</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="434" y="600">A<title>2132</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="451" y="593">A<title>2133</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="467" y="598">A<title>2134</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="477" y="612">A<title>2135</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="476" y="630">C<title>2136</title> </text>
                <text x="476" y="630">C<title>2136</title> </text>
                <line x1="466.0" y1="634.333333333" x2="456.0" y2="638.666666667"><title>2136,2129</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="484" y="648">C<title>2137</title> </text>
                <text x="484" y="648">C<title>2137</title> </text>
                <line x1="474.0" y1="652.333333333" x2="464.0" y2="656.666666667"><title>2137,2128</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="492" y="666">T<title>2138</title> </text>
                <text x="492" y="666">T<title>2138</title> </text>
                <line x1="482.0" y1="670.666666667" x2="472.0" y2="675.333333333"><title>2138,2127</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="509" y="662">T<title>2139</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="527" y="662">G<title>2140</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="545" y="663">T<title>2141</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="562" y="669">A<title>2142</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="578" y="667">G<title>2143</title> </text>
                <text x="578" y="667">G<title>2143</title> </text>
                <line x1="586.666666667" y1="677.0" x2="595.333333333" y2="687.0"><title>2143,2257</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="590" y="660">A<title>2144</title> </text>
                <text x="590" y="660">A<title>2144</title> </text>
                <line x1="598.666666667" y1="667.0" x2="607.333333333" y2="674.0"><title>2144,2256</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="604" y="645">G<title>2145</title> </text>
                <text x="604" y="645">G<title>2145</title> </text>
                <line x1="612.333333333" y1="651.666666667" x2="620.666666667" y2="658.333333333"><title>2145,2255</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="604" y="630">A<title>2146</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="619" y="625">G<title>2147</title> </text>
                <text x="619" y="625">G<title>2147</title> </text>
                <line x1="627.666666667" y1="632.0" x2="636.333333333" y2="639.0"><title>2147,2254</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="632" y="610">A<title>2148</title> </text>
                <text x="632" y="610">A<title>2148</title> </text>
                <line x1="640.333333333" y1="616.666666667" x2="648.666666667" y2="623.333333333"><title>2148,2253</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="645" y="594">G<title>2149</title> </text>
                <text x="645" y="594">G<title>2149</title> </text>
                <line x1="653.333333333" y1="601.0" x2="661.666666667" y2="608.0"><title>2149,2252</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="643" y="576">T<title>2150</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="650" y="560">A<title>2151</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="664" y="550">A<title>2152</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="682" y="549">A<title>2153</title> </text>
                <text x="682" y="549">A<title>2153</title> </text>
                <line x1="690.666666667" y1="555.666666667" x2="699.333333333" y2="562.333333333"><title>2153,2248</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="670" y="536">A<title>2154</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="655" y="517">A<title>2155</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="641" y="490">A<title>2156</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="631" y="465">T<title>2157</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="624" y="439">T<title>2158</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="621" y="412">T<title>2159</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="620" y="388">A<title>2160</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="620" y="363">A<title>2161</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="622" y="338">C<title>2162</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="622" y="315">A<title>2163</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="624" y="295">C<title>2164</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="628" y="273">C<title>2165</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="635" y="251">C<title>2166</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="633" y="234">A<title>2167</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="625" y="218">T<title>2168</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="613" y="222">A<title>2169</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="601" y="217">G<title>2170</title> </text>
                <text x="601" y="217">G<title>2170</title> </text>
                <line x1="601.333333333" y1="205.666666667" x2="601.666666667" y2="194.333333333"><title>2170,2190</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="587" y="222">T<title>2171</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="572" y="222">A<title>2172</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="556" y="217">G<title>2173</title> </text>
                <text x="556" y="217">G<title>2173</title> </text>
                <line x1="556" y1="204.0" x2="556" y2="196.0"><title>2173,2187</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="536" y="217">G<title>2174</title> </text>
                <text x="536" y="217">G<title>2174</title> </text>
                <line x1="536" y1="204.0" x2="536" y2="196.0"><title>2174,2186</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="516" y="217">C<title>2175</title> </text>
                <text x="516" y="217">C<title>2175</title> </text>
                <line x1="516" y1="204.0" x2="516" y2="196.0"><title>2175,2185</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="503" y="229">C<title>2176</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="486" y="233">T<title>2177</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="468" y="229">A<title>2178</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="456" y="217">A<title>2179</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="451" y="200">A<title>2180</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="456" y="183">A<title>2181</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="469" y="170">G<title>2182</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="486" y="166">C<title>2183</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="503" y="171">A<title>2184</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="516" y="183">G<title>2185</title> </text>
                <text x="516" y="183">G<title>2185</title> </text>
                <line x1="516" y1="204.0" x2="516" y2="196.0"><title>2185,2175</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="536" y="183">C<title>2186</title> </text>
                <text x="536" y="183">C<title>2186</title> </text>
                <line x1="536" y1="204.0" x2="536" y2="196.0"><title>2186,2174</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="556" y="183">C<title>2187</title> </text>
                <text x="556" y="183">C<title>2187</title> </text>
                <line x1="556" y1="204.0" x2="556" y2="196.0"><title>2187,2173</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="572" y="180">A<title>2188</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="587" y="180">C<title>2189</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="602" y="183">C<title>2190</title> </text>
                <text x="602" y="183">C<title>2190</title> </text>
                <line x1="601.666666667" y1="194.333333333" x2="601.333333333" y2="205.666666667"><title>2190,2170</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="614" y="180">A<title>2191</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="628" y="183">A<title>2192</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="639" y="175">T<title>2193</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="651" y="168">T<title>2194</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="665" y="168">A<title>2195</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="676" y="175">A<title>2196</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="690" y="185">G<title>2197</title> </text>
                <text x="690" y="185">G<title>2197</title> </text>
                <line x1="689.666666667" y1="195.666666667" x2="689.333333333" y2="206.333333333"><title>2197,2212</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="700" y="174">A<title>2198</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="713" y="174">A<title>2199</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="724" y="185">A<title>2200</title> </text>
                <text x="724" y="185">A<title>2200</title> </text>
                <line x1="724" y1="205.0" x2="724" y2="197.0"><title>2200,2211</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="745" y="185">G<title>2201</title> </text>
                <text x="745" y="185">G<title>2201</title> </text>
                <line x1="745" y1="205.0" x2="745" y2="197.0"><title>2201,2210</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="758" y="173">C<title>2202</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="776" y="170">G<title>2203</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="792" y="177">T<title>2204</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="801" y="191">T<title>2205</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="802" y="210">C<title>2206</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="791" y="225">A<title>2207</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="775" y="232">A<title>2208</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="758" y="229">G<title>2209</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="745" y="217">C<title>2210</title> </text>
                <text x="745" y="217">C<title>2210</title> </text>
                <line x1="745" y1="205.0" x2="745" y2="197.0"><title>2210,2201</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="724" y="217">T<title>2211</title> </text>
                <text x="724" y="217">T<title>2211</title> </text>
                <line x1="724" y1="205.0" x2="724" y2="197.0"><title>2211,2200</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="689" y="217">C<title>2212</title> </text>
                <text x="689" y="217">C<title>2212</title> </text>
                <line x1="689.333333333" y1="206.333333333" x2="689.666666667" y2="195.666666667"><title>2212,2197</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="684" y="228">A<title>2213</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="674" y="239">A<title>2214</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="686" y="250">C<title>2215</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="697" y="260">A<title>2216</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="707" y="274">C<title>2217</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="715" y="290">C<title>2218</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="723" y="306">C<title>2219</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="728" y="323">A<title>2220</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="733" y="337">C<title>2221</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="746" y="336">T<title>2222</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="760" y="337">A<title>2223</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="775" y="340">C<title>2224</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="788" y="346">C<title>2225</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="800" y="351">T<title>2226</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="811" y="358">A<title>2227</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="823" y="369">A<title>2228</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="836" y="381">A<title>2229</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="844" y="393">A<title>2230</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="850" y="407">A<title>2231</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="855" y="421">A<title>2232</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="857" y="438">T<title>2233</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="858" y="455">C<title>2234</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="857" y="470">C<title>2235</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="854" y="486">C<title>2236</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="849" y="501">A<title>2237</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="842" y="515">A<title>2238</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="834" y="529">A<title>2239</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="823" y="541">C<title>2240</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="812" y="551">A<title>2241</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="798" y="561">T<title>2242</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="785" y="567">A<title>2243</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="771" y="572">T<title>2244</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="756" y="575">A<title>2245</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="740" y="575">A<title>2246</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="721" y="576">C<title>2247</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="708" y="569">T<title>2248</title> </text>
                <text x="708" y="569">T<title>2248</title> </text>
                <line x1="699.333333333" y1="562.333333333" x2="690.666666667" y2="555.666666667"><title>2248,2153</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="710" y="587">G<title>2249</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="702" y="604">A<title>2250</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="688" y="614">A<title>2251</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="670" y="615">C<title>2252</title> </text>
                <text x="670" y="615">C<title>2252</title> </text>
                <line x1="661.666666667" y1="608.0" x2="653.333333333" y2="601.0"><title>2252,2149</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="657" y="630">T<title>2253</title> </text>
                <text x="657" y="630">T<title>2253</title> </text>
                <line x1="648.666666667" y1="623.333333333" x2="640.333333333" y2="616.666666667"><title>2253,2148</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="645" y="646">C<title>2254</title> </text>
                <text x="645" y="646">C<title>2254</title> </text>
                <line x1="636.333333333" y1="639.0" x2="627.666666667" y2="632.0"><title>2254,2147</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="629" y="665">C<title>2255</title> </text>
                <text x="629" y="665">C<title>2255</title> </text>
                <line x1="620.666666667" y1="658.333333333" x2="612.333333333" y2="651.666666667"><title>2255,2145</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="616" y="681">T<title>2256</title> </text>
                <text x="616" y="681">T<title>2256</title> </text>
                <line x1="607.333333333" y1="674.0" x2="598.666666667" y2="667.0"><title>2256,2144</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="604" y="697">C<title>2257</title> </text>
                <text x="604" y="697">C<title>2257</title> </text>
                <line x1="595.333333333" y1="687.0" x2="586.666666667" y2="677.0"><title>2257,2143</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="614" y="712">A<title>2258</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="623" y="727">C<title>2259</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="628" y="744">A<title>2260</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="632" y="760">C<title>2261</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="633" y="778">C<title>2262</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="630" y="795">C<title>2263</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="625" y="813">A<title>2264</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="617" y="829">A<title>2265</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="607" y="842">T<title>2266</title> </text>
                <text x="607" y="842">T<title>2266</title> </text>
                <line x1="598.666666667" y1="850.0" x2="590.333333333" y2="858.0"><title>2266,2027</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="620" y="857">T<title>2267</title> </text>
                <text x="620" y="857">T<title>2267</title> </text>
                <line x1="612.0" y1="864.666666667" x2="604.0" y2="872.333333333"><title>2267,2026</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="634" y="873">G<title>2268</title> </text>
                <text x="634" y="873">G<title>2268</title> </text>
                <line x1="626.0" y1="880.333333333" x2="618.0" y2="887.666666667"><title>2268,2025</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="648" y="888">G<title>2269</title> </text>
                <text x="648" y="888">G<title>2269</title> </text>
                <line x1="639.666666667" y1="895.333333333" x2="631.333333333" y2="902.666666667"><title>2269,2024</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="661" y="904">A<title>2270</title> </text>
                <text x="661" y="904">A<title>2270</title> </text>
                <line x1="652.666666667" y1="911.0" x2="644.333333333" y2="918.0"><title>2270,2023</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="675" y="918">C<title>2271</title> </text>
                <text x="675" y="918">C<title>2271</title> </text>
                <line x1="666.666666667" y1="925.333333333" x2="658.333333333" y2="932.666666667"><title>2271,2022</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="692" y="909">C<title>2272</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="709" y="903">A<title>2273</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="728" y="900">A<title>2274</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="748" y="900">T<title>2275</title> </text>
                <text x="748" y="900">T<title>2275</title> </text>
                <line x1="758.666666667" y1="903.0" x2="769.333333333" y2="906.0"><title>2275,2290</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="754" y="881">C<title>2276</title> </text>
                <text x="754" y="881">C<title>2276</title> </text>
                <line x1="764.333333333" y1="883.666666667" x2="774.666666667" y2="886.333333333"><title>2276,2289</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="758" y="861">T<title>2277</title> </text>
                <text x="758" y="861">T<title>2277</title> </text>
                <line x1="768.666666667" y1="864.0" x2="779.333333333" y2="867.0"><title>2277,2288</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="763" y="842">A<title>2278</title> </text>
                <text x="763" y="842">A<title>2278</title> </text>
                <line x1="773.666666667" y1="844.333333333" x2="784.333333333" y2="846.666666667"><title>2278,2287</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="768" y="822">T<title>2279</title> </text>
                <text x="768" y="822">T<title>2279</title> </text>
                <line x1="778.666666667" y1="824.666666667" x2="789.333333333" y2="827.333333333"><title>2279,2286</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="763" y="805">C<title>2280</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="770" y="790">A<title>2281</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="787" y="781">C<title>2282</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="803" y="785">C<title>2283</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="814" y="800">C<title>2284</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="812" y="817">T<title>2285</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="800" y="830">A<title>2286</title> </text>
                <text x="800" y="830">A<title>2286</title> </text>
                <line x1="789.333333333" y1="827.333333333" x2="778.666666667" y2="824.666666667"><title>2286,2279</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="795" y="849">T<title>2287</title> </text>
                <text x="795" y="849">T<title>2287</title> </text>
                <line x1="784.333333333" y1="846.666666667" x2="773.666666667" y2="844.333333333"><title>2287,2278</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="790" y="870">A<title>2288</title> </text>
                <text x="790" y="870">A<title>2288</title> </text>
                <line x1="779.333333333" y1="867.0" x2="768.666666667" y2="864.0"><title>2288,2277</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="785" y="889">G<title>2289</title> </text>
                <text x="785" y="889">G<title>2289</title> </text>
                <line x1="774.666666667" y1="886.333333333" x2="764.333333333" y2="883.666666667"><title>2289,2276</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="780" y="909">A<title>2290</title> </text>
                <text x="780" y="909">A<title>2290</title> </text>
                <line x1="769.333333333" y1="906.0" x2="758.666666667" y2="903.0"><title>2290,2275</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="795" y="917">A<title>2291</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="811" y="926">G<title>2292</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="822" y="940">A<title>2293</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="833" y="955">A<title>2294</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="841" y="969">C<title>2295</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="846" y="985">T<title>2296</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="849" y="1004">A<title>2297</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="850" y="1022">A<title>2298</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="847" y="1038">T<title>2299</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="842" y="1056">G<title>2300</title> </text>
                <text x="842" y="1056">G<title>2300</title> </text>
                <line x1="836.666666667" y1="1065.33333333" x2="831.333333333" y2="1074.66666667"><title>2300,1865</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="859" y="1065">T<title>2301</title> </text>
                <text x="859" y="1065">T<title>2301</title> </text>
                <line x1="853.666666667" y1="1075.0" x2="848.333333333" y2="1085.0"><title>2301,1864</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="877" y="1075">T<title>2302</title> </text>
                <text x="877" y="1075">T<title>2302</title> </text>
                <line x1="871.333333333" y1="1085.33333333" x2="865.666666667" y2="1095.66666667"><title>2302,1863</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="894" y="1087">A<title>2303</title> </text>
                <text x="894" y="1087">A<title>2303</title> </text>
                <line x1="888.333333333" y1="1096.33333333" x2="882.666666667" y2="1105.66666667"><title>2303,1862</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="912" y="1096">G<title>2304</title> </text>
                <text x="912" y="1096">G<title>2304</title> </text><circle cx="904.0" cy="1110.0" r="2"><title>2304,1861</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="929" y="1106">T<title>2305</title> </text>
                <text x="929" y="1106">T<title>2305</title> </text>
                <line x1="923.666666667" y1="1115.66666667" x2="918.333333333" y2="1125.33333333"><title>2305,1860</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="938" y="1095">A<title>2306</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="945" y="1087">T<title>2307</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="954" y="1076">A<title>2308</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="963" y="1069">A<title>2309</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="971" y="1063">G<title>2310</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="982" y="1055">T<title>2311</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="992" y="1048">A<title>2312</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1001" y="1042">A<title>2313</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1010" y="1037">C<title>2314</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1020" y="1033">A<title>2315</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1029" y="1030">T<title>2316</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1041" y="1027">G<title>2317</title> </text>
                <text x="1041" y="1027">G<title>2317</title> </text>
                <line x1="1052.0" y1="1024.33333333" x2="1063.0" y2="1021.66666667"><title>2317,2326</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1036" y="1008">A<title>2318</title> </text>
                <text x="1036" y="1008">A<title>2318</title> </text>
                <line x1="1046.66666667" y1="1005.0" x2="1057.33333333" y2="1002.0"><title>2318,2325</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1031" y="989">A<title>2319</title> </text>
                <text x="1031" y="989">A<title>2319</title> </text>
                <line x1="1041.66666667" y1="985.666666667" x2="1052.33333333" y2="982.333333333"><title>2319,2324</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1023" y="972">A<title>2320</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1031" y="957">A<title>2321</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1049" y="952">C<title>2322</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1062" y="963">A<title>2323</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1063" y="979">T<title>2324</title> </text>
                <text x="1063" y="979">T<title>2324</title> </text>
                <line x1="1052.33333333" y1="982.333333333" x2="1041.66666667" y2="985.666666667"><title>2324,2319</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1068" y="999">T<title>2325</title> </text>
                <text x="1068" y="999">T<title>2325</title> </text>
                <line x1="1057.33333333" y1="1002.0" x2="1046.66666667" y2="1005.0"><title>2325,2318</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1074" y="1019">C<title>2326</title> </text>
                <text x="1074" y="1019">C<title>2326</title> </text>
                <line x1="1063.0" y1="1021.66666667" x2="1052.0" y2="1024.33333333"><title>2326,2317</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1093" y="1017">T<title>2327</title> </text>
                <text x="1093" y="1017">T<title>2327</title> </text>
                <line x1="1104.0" y1="1017.33333333" x2="1115.0" y2="1017.66666667"><title>2327,2450</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1093" y="998">C<title>2328</title> </text>
                <text x="1093" y="998">C<title>2328</title> </text>
                <line x1="1113.0" y1="998" x2="1105.0" y2="998"><title>2328,2449</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1093" y="978">C<title>2329</title> </text>
                <text x="1093" y="978">C<title>2329</title> </text>
                <line x1="1104.0" y1="977.666666667" x2="1115.0" y2="977.333333333"><title>2329,2448</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1078" y="957">T<title>2330</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1067" y="933">C<title>2331</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1078" y="909">C<title>2332</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1093" y="890">G<title>2333</title> </text>
                <text x="1093" y="890">G<title>2333</title> </text>
                <line x1="1104.0" y1="890.333333333" x2="1115.0" y2="890.666666667"><title>2333,2441</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1094" y="870">C<title>2334</title> </text>
                <text x="1094" y="870">C<title>2334</title> </text>
                <line x1="1104.66666667" y1="870.333333333" x2="1115.33333333" y2="870.666666667"><title>2334,2440</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1094" y="850">A<title>2335</title> </text>
                <text x="1094" y="850">A<title>2335</title> </text>
                <line x1="1104.66666667" y1="850.333333333" x2="1115.33333333" y2="850.666666667"><title>2335,2439</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1094" y="830">T<title>2336</title> </text>
                <text x="1094" y="830">T<title>2336</title> </text>
                <line x1="1104.66666667" y1="830.333333333" x2="1115.33333333" y2="830.666666667"><title>2336,2438</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1077" y="821">A<title>2337</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1065" y="807">A<title>2338</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1059" y="789">G<title>2339</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1060" y="770">C<title>2340</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1067" y="752">C<title>2341</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1078" y="738">T<title>2342</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1095" y="730">G<title>2343</title> </text>
                <text x="1095" y="730">G<title>2343</title> </text>
                <line x1="1115.0" y1="730" x2="1107.0" y2="730"><title>2343,2423</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1078" y="719">C<title>2344</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1068" y="702">G<title>2345</title> </text>
                <text x="1068" y="702">G<title>2345</title> </text>
                <line x1="1067.66666667" y1="691.0" x2="1067.33333333" y2="680.0"><title>2345,2368</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1047" y="702">T<title>2346</title> </text>
                <text x="1047" y="702">T<title>2346</title> </text>
                <line x1="1047" y1="689.0" x2="1047" y2="681.0"><title>2346,2367</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1027" y="702">C<title>2347</title> </text>
                <text x="1027" y="702">C<title>2347</title> </text>
                <line x1="1027" y1="689.0" x2="1027" y2="681.0"><title>2347,2366</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1007" y="702">A<title>2348</title> </text>
                <text x="1007" y="702">A<title>2348</title> </text>
                <line x1="1007" y1="689.0" x2="1007" y2="681.0"><title>2348,2365</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="987" y="702">G<title>2349</title> </text>
                <text x="987" y="702">G<title>2349</title> </text>
                <line x1="987" y1="689.0" x2="987" y2="681.0"><title>2349,2364</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="977" y="718">A<title>2350</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="963" y="728">T<title>2351</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="947" y="734">T<title>2352</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="929" y="733">A<title>2353</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="913" y="726">A<title>2354</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="901" y="713">A<title>2355</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="894" y="696">A<title>2356</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="895" y="678">C<title>2357</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="900" y="662">A<title>2358</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="913" y="648">C<title>2359</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="929" y="640">T<title>2360</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="947" y="638">G<title>2361</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="963" y="644">A<title>2362</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="977" y="656">A<title>2363</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="987" y="669">C<title>2364</title> </text>
                <text x="987" y="669">C<title>2364</title> </text>
                <line x1="987" y1="689.0" x2="987" y2="681.0"><title>2364,2349</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1007" y="669">T<title>2365</title> </text>
                <text x="1007" y="669">T<title>2365</title> </text>
                <line x1="1007" y1="689.0" x2="1007" y2="681.0"><title>2365,2348</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1027" y="669">G<title>2366</title> </text>
                <text x="1027" y="669">G<title>2366</title> </text>
                <line x1="1027" y1="689.0" x2="1027" y2="681.0"><title>2366,2347</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1047" y="669">A<title>2367</title> </text>
                <text x="1047" y="669">A<title>2367</title> </text>
                <line x1="1047" y1="689.0" x2="1047" y2="681.0"><title>2367,2346</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1067" y="669">C<title>2368</title> </text>
                <text x="1067" y="669">C<title>2368</title> </text>
                <line x1="1067.33333333" y1="680.0" x2="1067.66666667" y2="691.0"><title>2368,2345</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1075" y="656">A<title>2369</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1087" y="645">A<title>2370</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1103" y="638">T<title>2371</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1120" y="638">T<title>2372</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1135" y="645">A<title>2373</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1147" y="656">A<title>2374</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1156" y="670">C<title>2375</title> </text>
                <text x="1156" y="670">C<title>2375</title> </text>
                <line x1="1156" y1="689.0" x2="1156" y2="681.0"><title>2375,2421</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1176" y="670">A<title>2376</title> </text>
                <text x="1176" y="670">A<title>2376</title> </text>
                <line x1="1176" y1="689.0" x2="1176" y2="681.0"><title>2376,2420</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1196" y="670">G<title>2377</title> </text>
                <text x="1196" y="670">G<title>2377</title> </text>
                <line x1="1196" y1="689.0" x2="1196" y2="681.0"><title>2377,2419</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1206" y="654">C<title>2378</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1220" y="644">C<title>2379</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1238" y="641">C<title>2380</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1255" y="644">A<title>2381</title> </text>
                <text x="1255" y="644">A<title>2381</title> </text>
                <line x1="1262.66666667" y1="651.333333333" x2="1270.33333333" y2="658.666666667"><title>2381,2411</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1269" y="631">A<title>2382</title> </text>
                <text x="1269" y="631">A<title>2382</title> </text>
                <line x1="1276.66666667" y1="638.0" x2="1284.33333333" y2="645.0"><title>2382,2410</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1283" y="615">T<title>2383</title> </text>
                <text x="1283" y="615">T<title>2383</title> </text>
                <line x1="1290.66666667" y1="623.0" x2="1298.33333333" y2="631.0"><title>2383,2409</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1297" y="602">A<title>2384</title> </text>
                <text x="1297" y="602">A<title>2384</title> </text>
                <line x1="1304.66666667" y1="609.0" x2="1312.33333333" y2="616.0"><title>2384,2408</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1290" y="584">T<title>2385</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1287" y="568">C<title>2386</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1288" y="550">T<title>2387</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1293" y="534">A<title>2388</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1304" y="518">C<title>2389</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1317" y="508">A<title>2390</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1332" y="499">A<title>2391</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1349" y="494">T<title>2392</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1368" y="495">C<title>2393</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1384" y="501">A<title>2394</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1399" y="510">A<title>2395</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1412" y="521">C<title>2396</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1421" y="537">C<title>2397</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1426" y="554">A<title>2398</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1426" y="572">A<title>2399</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1422" y="589">C<title>2400</title> </text>
                <text x="1422" y="589">C<title>2400</title> </text>
                <line x1="1416.0" y1="598.0" x2="1410.0" y2="607.0"><title>2400,2403</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1431" y="604">A<title>2401</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1420" y="620">A<title>2402</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1404" y="616">G<title>2403</title> </text>
                <text x="1404" y="616">G<title>2403</title> </text>
                <line x1="1410.0" y1="607.0" x2="1416.0" y2="598.0"><title>2403,2400</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1389" y="626">T<title>2404</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1372" y="632">C<title>2405</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1354" y="635">A<title>2406</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1337" y="630">T<title>2407</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1320" y="623">T<title>2408</title> </text>
                <text x="1320" y="623">T<title>2408</title> </text>
                <line x1="1312.33333333" y1="616.0" x2="1304.66666667" y2="609.0"><title>2408,2384</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1306" y="639">A<title>2409</title> </text>
                <text x="1306" y="639">A<title>2409</title> </text>
                <line x1="1298.33333333" y1="631.0" x2="1290.66666667" y2="623.0"><title>2409,2383</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1292" y="652">T<title>2410</title> </text>
                <text x="1292" y="652">T<title>2410</title> </text>
                <line x1="1284.33333333" y1="645.0" x2="1276.66666667" y2="638.0"><title>2410,2382</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1278" y="666">T<title>2411</title> </text>
                <text x="1278" y="666">T<title>2411</title> </text>
                <line x1="1270.33333333" y1="658.666666667" x2="1262.66666667" y2="651.333333333"><title>2411,2381</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1282" y="685">A<title>2412</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1279" y="702">C<title>2413</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1270" y="717">C<title>2414</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1255" y="727">C<title>2415</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1237" y="730">T<title>2416</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1220" y="727">C<title>2417</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1205" y="717">A<title>2418</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1196" y="701">C<title>2419</title> </text>
                <text x="1196" y="701">C<title>2419</title> </text>
                <line x1="1196" y1="689.0" x2="1196" y2="681.0"><title>2419,2377</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1176" y="701">T<title>2420</title> </text>
                <text x="1176" y="701">T<title>2420</title> </text>
                <line x1="1176" y1="689.0" x2="1176" y2="681.0"><title>2420,2376</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1156" y="701">G<title>2421</title> </text>
                <text x="1156" y="701">G<title>2421</title> </text>
                <line x1="1156" y1="689.0" x2="1156" y2="681.0"><title>2421,2375</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1145" y="718">T<title>2422</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1128" y="730">C<title>2423</title> </text>
                <text x="1128" y="730">C<title>2423</title> </text>
                <line x1="1115.0" y1="730" x2="1107.0" y2="730"><title>2423,2343</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1142" y="738">A<title>2424</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1153" y="749">A<title>2425</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1161" y="762">C<title>2426</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1164" y="778">C<title>2427</title> </text>
                <text x="1164" y="778">C<title>2427</title> </text>
                <line x1="1161.0" y1="788.666666667" x2="1158.0" y2="799.333333333"><title>2427,2436</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1184" y="783">C<title>2428</title> </text>
                <text x="1184" y="783">C<title>2428</title> </text>
                <line x1="1180.66666667" y1="793.666666667" x2="1177.33333333" y2="804.333333333"><title>2428,2435</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1200" y="780">A<title>2429</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1216" y="788">A<title>2430</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1224" y="803">C<title>2431</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1219" y="820">A<title>2432</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1204" y="830">C<title>2433</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1186" y="828">A<title>2434</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1174" y="815">G<title>2435</title> </text>
                <text x="1174" y="815">G<title>2435</title> </text>
                <line x1="1177.33333333" y1="804.333333333" x2="1180.66666667" y2="793.666666667"><title>2435,2428</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1155" y="810">G<title>2436</title> </text>
                <text x="1155" y="810">G<title>2436</title> </text>
                <line x1="1158.0" y1="799.333333333" x2="1161.0" y2="788.666666667"><title>2436,2427</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1143" y="822">C<title>2437</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="831">A<title>2438</title> </text>
                <text x="1126" y="831">A<title>2438</title> </text>
                <line x1="1115.33333333" y1="830.666666667" x2="1104.66666667" y2="830.333333333"><title>2438,2336</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="851">T<title>2439</title> </text>
                <text x="1126" y="851">T<title>2439</title> </text>
                <line x1="1115.33333333" y1="850.666666667" x2="1104.66666667" y2="850.333333333"><title>2439,2335</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="871">G<title>2440</title> </text>
                <text x="1126" y="871">G<title>2440</title> </text>
                <line x1="1115.33333333" y1="870.666666667" x2="1104.66666667" y2="870.333333333"><title>2440,2334</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="891">C<title>2441</title> </text>
                <text x="1126" y="891">C<title>2441</title> </text>
                <line x1="1115.0" y1="890.666666667" x2="1104.0" y2="890.333333333"><title>2441,2333</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1139" y="900">T<title>2442</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1148" y="913">C<title>2443</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1153" y="927">A<title>2444</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1154" y="940">T<title>2445</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1147" y="955">A<title>2446</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1136" y="966">A<title>2447</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="977">G<title>2448</title> </text>
                <text x="1126" y="977">G<title>2448</title> </text>
                <line x1="1115.0" y1="977.333333333" x2="1104.0" y2="977.666666667"><title>2448,2329</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="998">G<title>2449</title> </text>
                <text x="1126" y="998">G<title>2449</title> </text>
                <line x1="1113.0" y1="998" x2="1105.0" y2="998"><title>2449,2328</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1126" y="1018">A<title>2450</title> </text>
                <text x="1126" y="1018">A<title>2450</title> </text>
                <line x1="1115.0" y1="1017.66666667" x2="1104.0" y2="1017.33333333"><title>2450,2327</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1140" y="1018">A<title>2451</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1154" y="1018">A<title>2452</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="1018">G<title>2453</title> </text>
                <text x="1776" y="1018">G<title>2453</title> </text>
                <line x1="1786.66666667" y1="1018.66666667" x2="1797.33333333" y2="1019.33333333"><title>2453,2671</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="1000">G<title>2454</title> </text>
                <text x="1776" y="1000">G<title>2454</title> </text>
                <line x1="1796.0" y1="1000" x2="1788.0" y2="1000"><title>2454,2670</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="980">T<title>2455</title> </text>
                <text x="1776" y="980">T<title>2455</title> </text>
                <line x1="1796.0" y1="980" x2="1788.0" y2="980"><title>2455,2669</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="960">T<title>2456</title> </text>
                <text x="1776" y="960">T<title>2456</title> </text>
                <line x1="1796.0" y1="960" x2="1788.0" y2="960"><title>2456,2668</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1767" y="952">A<title>2457</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1762" y="941">A<title>2458</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1762" y="928">A<title>2459</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1767" y="917">A<title>2460</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="908">A<title>2461</title> </text>
                <text x="1776" y="908">A<title>2461</title> </text>
                <line x1="1786.66666667" y1="907.333333333" x2="1797.33333333" y2="906.666666667"><title>2461,2666</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="888">A<title>2462</title> </text>
                <text x="1776" y="888">A<title>2462</title> </text>
                <line x1="1786.66666667" y1="887.333333333" x2="1797.33333333" y2="886.666666667"><title>2462,2665</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="868">A<title>2463</title> </text>
                <text x="1776" y="868">A<title>2463</title> </text>
                <line x1="1786.66666667" y1="867.333333333" x2="1797.33333333" y2="866.666666667"><title>2463,2664</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="848">G<title>2464</title> </text>
                <text x="1776" y="848">G<title>2464</title> </text>
                <line x1="1786.66666667" y1="847.333333333" x2="1797.33333333" y2="846.666666667"><title>2464,2663</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="828">T<title>2465</title> </text>
                <text x="1776" y="828">T<title>2465</title> </text>
                <line x1="1786.66666667" y1="827.333333333" x2="1797.33333333" y2="826.666666667"><title>2465,2662</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="808">A<title>2466</title> </text>
                <text x="1776" y="808">A<title>2466</title> </text>
                <line x1="1786.66666667" y1="807.0" x2="1797.33333333" y2="806.0"><title>2466,2661</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="788">A<title>2467</title> </text>
                <text x="1776" y="788">A<title>2467</title> </text>
                <line x1="1786.66666667" y1="786.666666667" x2="1797.33333333" y2="785.333333333"><title>2467,2660</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1768" y="770">A<title>2468</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="754">A<title>2469</title> </text>
                <text x="1776" y="754">A<title>2469</title> </text>
                <line x1="1786.66666667" y1="753.333333333" x2="1797.33333333" y2="752.666666667"><title>2469,2658</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="734">G<title>2470</title> </text>
                <text x="1776" y="734">G<title>2470</title> </text>
                <line x1="1786.66666667" y1="733.333333333" x2="1797.33333333" y2="732.666666667"><title>2470,2657</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1770" y="723">G<title>2471</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1770" y="711">A<title>2472</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="701">A<title>2473</title> </text>
                <text x="1776" y="701">A<title>2473</title> </text>
                <line x1="1787.0" y1="700.333333333" x2="1798.0" y2="699.666666667"><title>2473,2656</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1764" y="687">C<title>2474</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1759" y="669">T<title>2475</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1765" y="653">C<title>2476</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1778" y="641">G<title>2477</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1796" y="637">G<title>2478</title> </text>
                <text x="1796" y="637">G<title>2478</title> </text>
                <line x1="1805.0" y1="642.666666667" x2="1814.0" y2="648.333333333"><title>2478,2653</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1790" y="628">C<title>2479</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1786" y="619">A<title>2480</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1784" y="608">A<title>2481</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1785" y="597">A<title>2482</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1788" y="586">T<title>2483</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1793" y="577">C<title>2484</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1799" y="569">T<title>2485</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="562">T<title>2486</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="558">A<title>2487</title> </text>
                <text x="1818" y="558">A<title>2487</title> </text>
                <line x1="1828.66666667" y1="557.333333333" x2="1839.33333333" y2="556.666666667"><title>2487,2648</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="538">C<title>2488</title> </text>
                <text x="1818" y="538">C<title>2488</title> </text>
                <line x1="1828.66666667" y1="537.666666667" x2="1839.33333333" y2="537.333333333"><title>2488,2647</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="517">C<title>2489</title> </text>
                <text x="1818" y="517">C<title>2489</title> </text>
                <line x1="1838.0" y1="517" x2="1830.0" y2="517"><title>2489,2646</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="497">C<title>2490</title> </text>
                <text x="1818" y="497">C<title>2490</title> </text>
                <line x1="1838.0" y1="497" x2="1830.0" y2="497"><title>2490,2645</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="472">C<title>2491</title> </text>
                <text x="1818" y="472">C<title>2491</title> </text>
                <line x1="1828.66666667" y1="471.666666667" x2="1839.33333333" y2="471.333333333"><title>2491,2643</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="451">G<title>2492</title> </text>
                <text x="1818" y="451">G<title>2492</title> </text>
                <line x1="1838.0" y1="451" x2="1830.0" y2="451"><title>2492,2642</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1799" y="444">C<title>2493</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1783" y="431">C<title>2494</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1770" y="414">T<title>2495</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1763" y="396">G<title>2496</title> </text>
                <text x="1763" y="396">G<title>2496</title> </text>
                <line x1="1763" y1="383.0" x2="1763" y2="375.0"><title>2496,2508</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1743" y="396">T<title>2497</title> </text>
                <text x="1743" y="396">T<title>2497</title> </text>
                <line x1="1742.66666667" y1="385.0" x2="1742.33333333" y2="374.0"><title>2497,2507</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1731" y="408">T<title>2498</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1714" y="414">T<title>2499</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1696" y="411">A<title>2500</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1684" y="398">C<title>2501</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1679" y="381">C<title>2502</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1683" y="364">A<title>2503</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1695" y="352">A<title>2504</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1713" y="347">A<title>2505</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1729" y="352">A<title>2506</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1742" y="363">A<title>2507</title> </text>
                <text x="1742" y="363">A<title>2507</title> </text>
                <line x1="1742.33333333" y1="374.0" x2="1742.66666667" y2="385.0"><title>2507,2497</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1763" y="363">C<title>2508</title> </text>
                <text x="1763" y="363">C<title>2508</title> </text>
                <line x1="1763" y1="383.0" x2="1763" y2="375.0"><title>2508,2496</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1768" y="347">A<title>2509</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1776" y="332">T<title>2510</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1789" y="320">C<title>2511</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1803" y="311">A<title>2512</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="305">C<title>2513</title> </text>
                <text x="1819" y="305">C<title>2513</title> </text>
                <line x1="1839.0" y1="305" x2="1831.0" y2="305"><title>2513,2537</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="285">C<title>2514</title> </text>
                <text x="1819" y="285">C<title>2514</title> </text>
                <line x1="1839.0" y1="285" x2="1831.0" y2="285"><title>2514,2536</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="264">T<title>2515</title> </text>
                <text x="1819" y="264">T<title>2515</title> </text>
                <line x1="1830.0" y1="264.333333333" x2="1841.0" y2="264.666666667"><title>2515,2535</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="244">C<title>2516</title> </text>
                <text x="1819" y="244">C<title>2516</title> </text>
                <line x1="1839.0" y1="244" x2="1831.0" y2="244"><title>2516,2534</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="223">T<title>2517</title> </text>
                <text x="1819" y="223">T<title>2517</title> </text>
                <line x1="1830.0" y1="223.333333333" x2="1841.0" y2="223.666666667"><title>2517,2533</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1819" y="205">A<title>2518</title> </text>
                <text x="1819" y="205">A<title>2518</title> </text>
                <line x1="1830.0" y1="204.333333333" x2="1841.0" y2="203.666666667"><title>2518,2532</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1805" y="195">G<title>2519</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1795" y="185">C<title>2520</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1790" y="163">A<title>2521</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1793" y="144">T<title>2522</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1804" y="130">C<title>2523</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1818" y="121">A<title>2524</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1836" y="117">C<title>2525</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1853" y="120">C<title>2526</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1867" y="131">A<title>2527</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1877" y="145">G<title>2528</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1880" y="161">T<title>2529</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1876" y="180">A<title>2530</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1867" y="193">T<title>2531</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="203">T<title>2532</title> </text>
                <text x="1852" y="203">T<title>2532</title> </text>
                <line x1="1841.0" y1="203.666666667" x2="1830.0" y2="204.333333333"><title>2532,2518</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="224">A<title>2533</title> </text>
                <text x="1852" y="224">A<title>2533</title> </text>
                <line x1="1841.0" y1="223.666666667" x2="1830.0" y2="223.333333333"><title>2533,2517</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="244">G<title>2534</title> </text>
                <text x="1852" y="244">G<title>2534</title> </text>
                <line x1="1839.0" y1="244" x2="1831.0" y2="244"><title>2534,2516</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="265">A<title>2535</title> </text>
                <text x="1852" y="265">A<title>2535</title> </text>
                <line x1="1841.0" y1="264.666666667" x2="1830.0" y2="264.333333333"><title>2535,2515</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="285">G<title>2536</title> </text>
                <text x="1852" y="285">G<title>2536</title> </text>
                <line x1="1839.0" y1="285" x2="1831.0" y2="285"><title>2536,2514</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1852" y="305">G<title>2537</title> </text>
                <text x="1852" y="305">G<title>2537</title> </text>
                <line x1="1839.0" y1="305" x2="1831.0" y2="305"><title>2537,2513</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1867" y="310">C<title>2538</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1881" y="319">A<title>2539</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1893" y="330">C<title>2540</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1902" y="343">C<title>2541</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1908" y="359">G<title>2542</title> </text>
                <text x="1908" y="359">G<title>2542</title> </text>
                <line x1="1908" y1="378.0" x2="1908" y2="370.0"><title>2542,2637</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1928" y="359">C<title>2543</title> </text>
                <text x="1928" y="359">C<title>2543</title> </text>
                <line x1="1928" y1="378.0" x2="1928" y2="370.0"><title>2543,2636</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1948" y="359">C<title>2544</title> </text>
                <text x="1948" y="359">C<title>2544</title> </text>
                <line x1="1948" y1="378.0" x2="1948" y2="370.0"><title>2544,2635</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1965" y="322">T<title>2545</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1999" y="303">G<title>2546</title> </text>
                <text x="1999" y="303">G<title>2546</title> </text>
                <line x1="2019.0" y1="303" x2="2011.0" y2="303"><title>2546,2569</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1999" y="283">C<title>2547</title> </text>
                <text x="1999" y="283">C<title>2547</title> </text>
                <line x1="2019.0" y1="283" x2="2011.0" y2="283"><title>2547,2568</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1998" y="263">C<title>2548</title> </text>
                <text x="1998" y="263">C<title>2548</title> </text>
                <line x1="2009.33333333" y1="262.666666667" x2="2020.66666667" y2="262.333333333"><title>2548,2567</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1988" y="253">C<title>2549</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1989" y="241">A<title>2550</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1998" y="230">G<title>2551</title> </text>
                <text x="1998" y="230">G<title>2551</title> </text>
                <line x1="2019.0" y1="230" x2="2011.0" y2="230"><title>2551,2566</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1997" y="209">T<title>2552</title> </text>
                <text x="1997" y="209">T<title>2552</title> </text>
                <line x1="2008.66666667" y1="209.333333333" x2="2020.33333333" y2="209.666666667"><title>2552,2565</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1997" y="177">G<title>2553</title> </text>
                <text x="1997" y="177">G<title>2553</title> </text><circle cx="2013.0" cy="176.0" r="2"><title>2553,2562</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1997" y="157">A<title>2554</title> </text>
                <text x="1997" y="157">A<title>2554</title> </text>
                <line x1="2008.0" y1="156.666666667" x2="2019.0" y2="156.333333333"><title>2554,2561</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1997" y="136">C<title>2555</title> </text>
                <text x="1997" y="136">C<title>2555</title> </text>
                <line x1="2017.0" y1="136" x2="2009.0" y2="136"><title>2555,2560</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1993" y="120">A<title>2556</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2004" y="106">C<title>2557</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2022" y="106">A<title>2558</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2033" y="118">T<title>2559</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2030" y="136">G<title>2560</title> </text>
                <text x="2030" y="136">G<title>2560</title> </text>
                <line x1="2017.0" y1="136" x2="2009.0" y2="136"><title>2560,2555</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2030" y="156">T<title>2561</title> </text>
                <text x="2030" y="156">T<title>2561</title> </text>
                <line x1="2019.0" y1="156.333333333" x2="2008.0" y2="156.666666667"><title>2561,2554</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2030" y="176">T<title>2562</title> </text>
                <text x="2030" y="176">T<title>2562</title> </text><circle cx="2013.0" cy="176.0" r="2"><title>2562,2553</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2041" y="186">T<title>2563</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2041" y="200">A<title>2564</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2032" y="210">A<title>2565</title> </text>
                <text x="2032" y="210">A<title>2565</title> </text>
                <line x1="2020.33333333" y1="209.666666667" x2="2008.66666667" y2="209.333333333"><title>2565,2552</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2032" y="230">C<title>2566</title> </text>
                <text x="2032" y="230">C<title>2566</title> </text>
                <line x1="2019.0" y1="230" x2="2011.0" y2="230"><title>2566,2551</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2032" y="262">G<title>2567</title> </text>
                <text x="2032" y="262">G<title>2567</title> </text>
                <line x1="2020.66666667" y1="262.333333333" x2="2009.33333333" y2="262.666666667"><title>2567,2548</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2032" y="283">G<title>2568</title> </text>
                <text x="2032" y="283">G<title>2568</title> </text>
                <line x1="2019.0" y1="283" x2="2011.0" y2="283"><title>2568,2547</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2032" y="303">C<title>2569</title> </text>
                <text x="2032" y="303">C<title>2569</title> </text>
                <line x1="2019.0" y1="303" x2="2011.0" y2="303"><title>2569,2546</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2053" y="312">C<title>2570</title> </text>
                <text x="2053" y="312">C<title>2570</title> </text>
                <line x1="2060.66666667" y1="320.0" x2="2068.33333333" y2="328.0"><title>2570,2587</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2068" y="298">G<title>2571</title> </text>
                <text x="2068" y="298">G<title>2571</title> </text><circle cx="2079.0" cy="309.0" r="2"><title>2571,2586</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2083" y="284">C<title>2572</title> </text>
                <text x="2083" y="284">C<title>2572</title> </text>
                <line x1="2090.33333333" y1="292.0" x2="2097.66666667" y2="300.0"><title>2572,2585</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2097" y="270">G<title>2573</title> </text>
                <text x="2097" y="270">G<title>2573</title> </text>
                <line x1="2104.66666667" y1="278.0" x2="2112.33333333" y2="286.0"><title>2573,2584</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2112" y="256">G<title>2574</title> </text>
                <text x="2112" y="256">G<title>2574</title> </text>
                <line x1="2119.66666667" y1="264.0" x2="2127.33333333" y2="272.0"><title>2574,2583</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2113" y="238">T<title>2575</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2124" y="226">A<title>2576</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2141" y="219">C<title>2577</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2158" y="223">C<title>2578</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2171" y="236">C<title>2579</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2173" y="253">T<title>2580</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2166" y="270">A<title>2581</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2152" y="280">A<title>2582</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2135" y="280">C<title>2583</title> </text>
                <text x="2135" y="280">C<title>2583</title> </text>
                <line x1="2127.33333333" y1="272.0" x2="2119.66666667" y2="264.0"><title>2583,2574</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2120" y="294">C<title>2584</title> </text>
                <text x="2120" y="294">C<title>2584</title> </text>
                <line x1="2112.33333333" y1="286.0" x2="2104.66666667" y2="278.0"><title>2584,2573</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2105" y="308">G<title>2585</title> </text>
                <text x="2105" y="308">G<title>2585</title> </text>
                <line x1="2097.66666667" y1="300.0" x2="2090.33333333" y2="292.0"><title>2585,2572</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2090" y="321">T<title>2586</title> </text>
                <text x="2090" y="321">T<title>2586</title> </text><circle cx="2079.0" cy="309.0" r="2"><title>2586,2571</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2076" y="336">G<title>2587</title> </text>
                <text x="2076" y="336">G<title>2587</title> </text>
                <line x1="2068.33333333" y1="328.0" x2="2060.66666667" y2="320.0"><title>2587,2570</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2081" y="347">C<title>2588</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2084" y="360">A<title>2589</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2085" y="372">A<title>2590</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2083" y="385">A<title>2591</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2080" y="396">G<title>2592</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2074" y="407">G<title>2593</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2067" y="416">T<title>2594</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2057" y="426">A<title>2595</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2047" y="432">G<title>2596</title> </text>
                <text x="2047" y="432">G<title>2596</title> </text><circle cx="2031.0" cy="435.0" r="2"><title>2596,2630</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2058" y="448">C<title>2597</title> </text>
                <text x="2058" y="448">C<title>2597</title> </text>
                <line x1="2051.66666667" y1="457.0" x2="2045.33333333" y2="466.0"><title>2597,2627</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2075" y="441">A<title>2598</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2094" y="440">T<title>2599</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2112" y="447">A<title>2600</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2126" y="460">A<title>2601</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2135" y="476">T<title>2602</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2137" y="496">C<title>2603</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2130" y="514">A<title>2604</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2119" y="529">C<title>2605</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2102" y="537">T<title>2606</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2083" y="540">T<title>2607</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2065" y="535">G<title>2608</title> </text>
                <text x="2065" y="535">G<title>2608</title> </text>
                <line x1="2057.33333333" y1="527.666666667" x2="2049.66666667" y2="520.333333333"><title>2608,2624</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2051" y="550">T<title>2609</title> </text>
                <text x="2051" y="550">T<title>2609</title> </text>
                <line x1="2043.0" y1="542.666666667" x2="2035.0" y2="535.333333333"><title>2609,2623</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2037" y="567">T<title>2610</title> </text>
                <text x="2037" y="567">T<title>2610</title> </text><circle cx="2025.0" cy="554.0" r="2"><title>2610,2622</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2023" y="579">C<title>2611</title> </text>
                <text x="2023" y="579">C<title>2611</title> </text>
                <line x1="2015.0" y1="571.333333333" x2="2007.0" y2="563.666666667"><title>2611,2621</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2009" y="594">C<title>2612</title> </text>
                <text x="2009" y="594">C<title>2612</title> </text>
                <line x1="2001.0" y1="586.333333333" x2="1993.0" y2="578.666666667"><title>2612,2620</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2006" y="611">T<title>2613</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1994" y="624">T<title>2614</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1976" y="628">A<title>2615</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1960" y="620">A<title>2616</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1952" y="604">A<title>2617</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1955" y="586">T<title>2618</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1967" y="574">A<title>2619</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1985" y="571">G<title>2620</title> </text>
                <text x="1985" y="571">G<title>2620</title> </text>
                <line x1="1993.0" y1="578.666666667" x2="2001.0" y2="586.333333333"><title>2620,2612</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1999" y="556">G<title>2621</title> </text>
                <text x="1999" y="556">G<title>2621</title> </text>
                <line x1="2007.0" y1="563.666666667" x2="2015.0" y2="571.333333333"><title>2621,2611</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2013" y="542">G<title>2622</title> </text>
                <text x="2013" y="542">G<title>2622</title> </text><circle cx="2025.0" cy="554.0" r="2"><title>2622,2610</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2027" y="528">A<title>2623</title> </text>
                <text x="2027" y="528">A<title>2623</title> </text>
                <line x1="2035.0" y1="535.333333333" x2="2043.0" y2="542.666666667"><title>2623,2609</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2042" y="513">C<title>2624</title> </text>
                <text x="2042" y="513">C<title>2624</title> </text>
                <line x1="2049.66666667" y1="520.333333333" x2="2057.33333333" y2="527.666666667"><title>2624,2608</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2037" y="500">C<title>2625</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2036" y="487">T<title>2626</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2039" y="475">G<title>2627</title> </text>
                <text x="2039" y="475">G<title>2627</title> </text>
                <line x1="2045.33333333" y1="466.0" x2="2051.66666667" y2="457.0"><title>2627,2597</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2021" y="470">T<title>2628</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2012" y="457">A<title>2629</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2015" y="439">T<title>2630</title> </text>
                <text x="2015" y="439">T<title>2630</title> </text><circle cx="2031.0" cy="435.0" r="2"><title>2630,2596</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1998" y="437">G<title>2631</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1981" y="431">A<title>2632</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1967" y="421">A<title>2633</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1956" y="405">T<title>2634</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1948" y="390">G<title>2635</title> </text>
                <text x="1948" y="390">G<title>2635</title> </text>
                <line x1="1948" y1="378.0" x2="1948" y2="370.0"><title>2635,2544</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1928" y="390">G<title>2636</title> </text>
                <text x="1928" y="390">G<title>2636</title> </text>
                <line x1="1928" y1="378.0" x2="1928" y2="370.0"><title>2636,2543</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1908" y="390">C<title>2637</title> </text>
                <text x="1908" y="390">C<title>2637</title> </text>
                <line x1="1908" y1="378.0" x2="1908" y2="370.0"><title>2637,2542</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1903" y="407">T<title>2638</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1895" y="424">C<title>2639</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1882" y="436">C<title>2640</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1867" y="446">A<title>2641</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="451">C<title>2642</title> </text>
                <text x="1850" y="451">C<title>2642</title> </text>
                <line x1="1838.0" y1="451" x2="1830.0" y2="451"><title>2642,2492</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="471">G<title>2643</title> </text>
                <text x="1850" y="471">G<title>2643</title> </text>
                <line x1="1839.33333333" y1="471.333333333" x2="1828.66666667" y2="471.666666667"><title>2643,2491</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1854" y="484">A<title>2644</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="497">G<title>2645</title> </text>
                <text x="1850" y="497">G<title>2645</title> </text>
                <line x1="1838.0" y1="497" x2="1830.0" y2="497"><title>2645,2490</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="517">G<title>2646</title> </text>
                <text x="1850" y="517">G<title>2646</title> </text>
                <line x1="1838.0" y1="517" x2="1830.0" y2="517"><title>2646,2489</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="537">G<title>2647</title> </text>
                <text x="1850" y="537">G<title>2647</title> </text>
                <line x1="1839.33333333" y1="537.333333333" x2="1828.66666667" y2="537.666666667"><title>2647,2488</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1850" y="556">T<title>2648</title> </text>
                <text x="1850" y="556">T<title>2648</title> </text>
                <line x1="1839.33333333" y1="556.666666667" x2="1828.66666667" y2="557.333333333"><title>2648,2487</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1874" y="574">T<title>2649</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1885" y="604">C<title>2650</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1876" y="633">A<title>2651</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1853" y="652">G<title>2652</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1823" y="654">C<title>2653</title> </text>
                <text x="1823" y="654">C<title>2653</title> </text>
                <line x1="1814.0" y1="648.333333333" x2="1805.0" y2="642.666666667"><title>2653,2478</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1826" y="671">T<title>2654</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1822" y="688">G<title>2655</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1809" y="699">T<title>2656</title> </text>
                <text x="1809" y="699">T<title>2656</title> </text>
                <line x1="1798.0" y1="699.666666667" x2="1787.0" y2="700.333333333"><title>2656,2473</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="732">C<title>2657</title> </text>
                <text x="1808" y="732">C<title>2657</title> </text>
                <line x1="1797.33333333" y1="732.666666667" x2="1786.66666667" y2="733.333333333"><title>2657,2470</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="752">T<title>2658</title> </text>
                <text x="1808" y="752">T<title>2658</title> </text>
                <line x1="1797.33333333" y1="752.666666667" x2="1786.66666667" y2="753.333333333"><title>2658,2469</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1815" y="769">C<title>2659</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="784">T<title>2660</title> </text>
                <text x="1808" y="784">T<title>2660</title> </text>
                <line x1="1797.33333333" y1="785.333333333" x2="1786.66666667" y2="786.666666667"><title>2660,2467</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="805">T<title>2661</title> </text>
                <text x="1808" y="805">T<title>2661</title> </text>
                <line x1="1797.33333333" y1="806.0" x2="1786.66666667" y2="807.0"><title>2661,2466</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="826">A<title>2662</title> </text>
                <text x="1808" y="826">A<title>2662</title> </text>
                <line x1="1797.33333333" y1="826.666666667" x2="1786.66666667" y2="827.333333333"><title>2662,2465</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="846">C<title>2663</title> </text>
                <text x="1808" y="846">C<title>2663</title> </text>
                <line x1="1797.33333333" y1="846.666666667" x2="1786.66666667" y2="847.333333333"><title>2663,2464</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="866">T<title>2664</title> </text>
                <text x="1808" y="866">T<title>2664</title> </text>
                <line x1="1797.33333333" y1="866.666666667" x2="1786.66666667" y2="867.333333333"><title>2664,2463</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="886">T<title>2665</title> </text>
                <text x="1808" y="886">T<title>2665</title> </text>
                <line x1="1797.33333333" y1="886.666666667" x2="1786.66666667" y2="887.333333333"><title>2665,2462</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="906">T<title>2666</title> </text>
                <text x="1808" y="906">T<title>2666</title> </text>
                <line x1="1797.33333333" y1="906.666666667" x2="1786.66666667" y2="907.333333333"><title>2666,2461</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1823" y="932">T<title>2667</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="960">A<title>2668</title> </text>
                <text x="1808" y="960">A<title>2668</title> </text>
                <line x1="1796.0" y1="960" x2="1788.0" y2="960"><title>2668,2456</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="980">A<title>2669</title> </text>
                <text x="1808" y="980">A<title>2669</title> </text>
                <line x1="1796.0" y1="980" x2="1788.0" y2="980"><title>2669,2455</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="1000">C<title>2670</title> </text>
                <text x="1808" y="1000">C<title>2670</title> </text>
                <line x1="1796.0" y1="1000" x2="1788.0" y2="1000"><title>2670,2454</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1808" y="1020">C<title>2671</title> </text>
                <text x="1808" y="1020">C<title>2671</title> </text>
                <line x1="1797.33333333" y1="1019.33333333" x2="1786.66666667" y2="1018.66666667"><title>2671,2453</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1826" y="1022">A<title>2672</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1844" y="1024">G<title>2673</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1861" y="1027">T<title>2674</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1878" y="1033">G<title>2675</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1895" y="1039">A<title>2676</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1911" y="1046">A<title>2677</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1926" y="1054">A<title>2678</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1942" y="1062">T<title>2679</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1957" y="1072">T<title>2680</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1971" y="1084">G<title>2681</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1984" y="1096">A<title>2682</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1997" y="1108">C<title>2683</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2009" y="1121">C<title>2684</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2019" y="1135">T<title>2685</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2029" y="1151">G<title>2686</title> </text>
                <text x="2029" y="1151">G<title>2686</title> </text>
                <line x1="2034.33333333" y1="1160.33333333" x2="2039.66666667" y2="1169.66666667"><title>2686,2703</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2047" y="1140">C<title>2687</title> </text>
                <text x="2047" y="1140">C<title>2687</title> </text>
                <line x1="2052.33333333" y1="1149.66666667" x2="2057.66666667" y2="1159.33333333"><title>2687,2702</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2065" y="1131">C<title>2688</title> </text>
                <text x="2065" y="1131">C<title>2688</title> </text>
                <line x1="2070.0" y1="1140.33333333" x2="2075.0" y2="1149.66666667"><title>2688,2701</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2082" y="1121">C<title>2689</title> </text>
                <text x="2082" y="1121">C<title>2689</title> </text>
                <line x1="2087.33333333" y1="1130.33333333" x2="2092.66666667" y2="1139.66666667"><title>2689,2700</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2100" y="1111">G<title>2690</title> </text>
                <text x="2100" y="1111">G<title>2690</title> </text>
                <line x1="2105.33333333" y1="1120.66666667" x2="2110.66666667" y2="1130.33333333"><title>2690,2699</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2106" y="1094">T<title>2691</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2120" y="1083">G<title>2692</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2137" y="1082">A<title>2693</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2153" y="1091">A<title>2694</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2162" y="1106">G<title>2695</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2160" y="1124">A<title>2696</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2150" y="1138">G<title>2697</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2133" y="1144">G<title>2698</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2116" y="1140">C<title>2699</title> </text>
                <text x="2116" y="1140">C<title>2699</title> </text>
                <line x1="2110.66666667" y1="1130.33333333" x2="2105.33333333" y2="1120.66666667"><title>2699,2690</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2098" y="1149">G<title>2700</title> </text>
                <text x="2098" y="1149">G<title>2700</title> </text>
                <line x1="2092.66666667" y1="1139.66666667" x2="2087.33333333" y2="1130.33333333"><title>2700,2689</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2080" y="1159">G<title>2701</title> </text>
                <text x="2080" y="1159">G<title>2701</title> </text>
                <line x1="2075.0" y1="1149.66666667" x2="2070.0" y2="1140.33333333"><title>2701,2688</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2063" y="1169">G<title>2702</title> </text>
                <text x="2063" y="1169">G<title>2702</title> </text>
                <line x1="2057.66666667" y1="1159.33333333" x2="2052.33333333" y2="1149.66666667"><title>2702,2687</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2045" y="1179">C<title>2703</title> </text>
                <text x="2045" y="1179">C<title>2703</title> </text>
                <line x1="2039.66666667" y1="1169.66666667" x2="2034.33333333" y2="1160.33333333"><title>2703,2686</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2052" y="1195">A<title>2704</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2058" y="1211">T<title>2705</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2062" y="1229">A<title>2706</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2066" y="1247">A<title>2707</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2070" y="1264">C<title>2708</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2071" y="1282">A<title>2709</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2072" y="1299">C<title>2710</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2089" y="1316">G<title>2712</title> </text>
                <text x="2089" y="1316">G<title>2712</title> </text>
                <line x1="2088.66666667" y1="1326.66666667" x2="2088.33333333" y2="1337.33333333"><title>2712,3106</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2102" y="1306">C<title>2713</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2113" y="1306">A<title>2714</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2121" y="1316">A<title>2715</title> </text>
                <text x="2121" y="1316">A<title>2715</title> </text>
                <line x1="2121" y1="1336.0" x2="2121" y2="1328.0"><title>2715,3104</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2145" y="1316">G<title>2716</title> </text>
                <text x="2145" y="1316">G<title>2716</title> </text>
                <line x1="2145" y1="1336.0" x2="2145" y2="1328.0"><title>2716,3103</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2166" y="1316">A<title>2717</title> </text>
                <text x="2166" y="1316">A<title>2717</title> </text>
                <line x1="2166" y1="1336.0" x2="2166" y2="1328.0"><title>2717,3102</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2186" y="1306">C<title>2718</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2206" y="1316">G<title>2719</title> </text>
                <text x="2206" y="1316">G<title>2719</title> </text>
                <line x1="2205.66666667" y1="1326.66666667" x2="2205.33333333" y2="1337.33333333"><title>2719,3099</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2228" y="1316">A<title>2720</title> </text>
                <text x="2228" y="1316">A<title>2720</title> </text>
                <line x1="2226.66666667" y1="1326.66666667" x2="2225.33333333" y2="1337.33333333"><title>2720,3098</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2236" y="1291">G<title>2721</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2247" y="1271">A<title>2722</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2262" y="1253">A<title>2723</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2281" y="1236">G<title>2724</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2300" y="1225">A<title>2725</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2323" y="1215">C<title>2726</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1210">C<title>2727</title> </text>
                <text x="2346" y="1210">C<title>2727</title> </text>
                <line x1="2366.0" y1="1210" x2="2358.0" y2="1210"><title>2727,2933</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1190">C<title>2728</title> </text>
                <text x="2346" y="1190">C<title>2728</title> </text>
                <line x1="2366.0" y1="1190" x2="2358.0" y2="1190"><title>2728,2932</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1169">T<title>2729</title> </text>
                <text x="2346" y="1169">T<title>2729</title> </text>
                <line x1="2356.66666667" y1="1169.33333333" x2="2367.33333333" y2="1169.66666667"><title>2729,2931</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1150">A<title>2730</title> </text>
                <text x="2346" y="1150">A<title>2730</title> </text>
                <line x1="2356.66666667" y1="1149.66666667" x2="2367.33333333" y2="1149.33333333"><title>2730,2930</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2341" y="1136">T<title>2731</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1124">G<title>2732</title> </text>
                <text x="2346" y="1124">G<title>2732</title> </text>
                <line x1="2366.0" y1="1124" x2="2358.0" y2="1124"><title>2732,2929</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1104">G<title>2733</title> </text>
                <text x="2346" y="1104">G<title>2733</title> </text>
                <line x1="2366.0" y1="1104" x2="2358.0" y2="1104"><title>2733,2928</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1084">A<title>2734</title> </text>
                <text x="2346" y="1084">A<title>2734</title> </text><circle cx="2362.0" cy="1084.0" r="2"><title>2734,2927</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1063">G<title>2735</title> </text>
                <text x="2346" y="1063">G<title>2735</title> </text><circle cx="2362.0" cy="1063.0" r="2"><title>2735,2926</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1043">C<title>2736</title> </text>
                <text x="2346" y="1043">C<title>2736</title> </text><circle cx="2362.0" cy="1043.0" r="2"><title>2736,2925</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="1022">T<title>2737</title> </text>
                <text x="2346" y="1022">T<title>2737</title> </text><circle cx="2362.0" cy="1022.0" r="2"><title>2737,2924</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2335" y="1001">T<title>2738</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2327" y="977">T<title>2739</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2332" y="955">A<title>2740</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="935">A<title>2741</title> </text>
                <text x="2346" y="935">A<title>2741</title> </text>
                <line x1="2357.33333333" y1="934.666666667" x2="2368.66666667" y2="934.333333333"><title>2741,2807</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="914">T<title>2742</title> </text>
                <text x="2346" y="914">T<title>2742</title> </text><circle cx="2363.0" cy="914.0" r="2"><title>2742,2806</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2346" y="894">T<title>2743</title> </text>
                <text x="2346" y="894">T<title>2743</title> </text>
                <line x1="2357.33333333" y1="894.333333333" x2="2368.66666667" y2="894.666666667"><title>2743,2805</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2336" y="879">T<title>2744</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2336" y="862">A<title>2745</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="847">T<title>2746</title> </text>
                <text x="2347" y="847">T<title>2746</title> </text>
                <line x1="2358.0" y1="847.333333333" x2="2369.0" y2="847.666666667"><title>2746,2802</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="827">T<title>2747</title> </text>
                <text x="2347" y="827">T<title>2747</title> </text>
                <line x1="2358.0" y1="827.333333333" x2="2369.0" y2="827.666666667"><title>2747,2801</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="808">A<title>2748</title> </text>
                <text x="2347" y="808">A<title>2748</title> </text>
                <line x1="2358.0" y1="807.666666667" x2="2369.0" y2="807.333333333"><title>2748,2800</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="788">A<title>2749</title> </text>
                <text x="2347" y="788">A<title>2749</title> </text>
                <line x1="2358.0" y1="787.666666667" x2="2369.0" y2="787.333333333"><title>2749,2799</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="767">T<title>2750</title> </text>
                <text x="2347" y="767">T<title>2750</title> </text>
                <line x1="2358.0" y1="767.333333333" x2="2369.0" y2="767.666666667"><title>2750,2798</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="747">G<title>2751</title> </text>
                <text x="2347" y="747">G<title>2751</title> </text>
                <line x1="2367.0" y1="747" x2="2359.0" y2="747"><title>2751,2797</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="726">C<title>2752</title> </text>
                <text x="2347" y="726">C<title>2752</title> </text>
                <line x1="2358.0" y1="726.333333333" x2="2369.0" y2="726.666666667"><title>2752,2796</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="707">A<title>2753</title> </text>
                <text x="2347" y="707">A<title>2753</title> </text>
                <line x1="2358.0" y1="706.666666667" x2="2369.0" y2="706.333333333"><title>2753,2795</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2330" y="703">A<title>2754</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2313" y="697">A<title>2755</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2298" y="688">C<title>2756</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2283" y="678">A<title>2757</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2271" y="665">G<title>2758</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2260" y="650">T<title>2759</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2251" y="636">A<title>2760</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2246" y="619">C<title>2761</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2242" y="601">C<title>2762</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2240" y="583">T<title>2763</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2242" y="566">A<title>2764</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2245" y="549">A<title>2765</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2252" y="532">C<title>2766</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2260" y="517">A<title>2767</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2270" y="503">A<title>2768</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2283" y="491">A<title>2769</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2298" y="479">C<title>2770</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2313" y="471">C<title>2771</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2330" y="465">C<title>2772</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="461">A<title>2773</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2365" y="460">C<title>2774</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2382" y="461">A<title>2775</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2400" y="465">G<title>2776</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2417" y="471">G<title>2777</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2432" y="479">T<title>2778</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2446" y="491">C<title>2779</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2459" y="503">C<title>2780</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2469" y="517">T<title>2781</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2477" y="533">A<title>2782</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2483" y="550">A<title>2783</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2487" y="568">A<title>2784</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2488" y="585">C<title>2785</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2486" y="602">T<title>2786</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2482" y="620">A<title>2787</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2477" y="636">C<title>2788</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2468" y="652">C<title>2789</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2456" y="666">A<title>2790</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2444" y="679">A<title>2791</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2429" y="689">A<title>2792</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2415" y="697">C<title>2793</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2398" y="703">C<title>2794</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="706">T<title>2795</title> </text>
                <text x="2380" y="706">T<title>2795</title> </text>
                <line x1="2369.0" y1="706.333333333" x2="2358.0" y2="706.666666667"><title>2795,2753</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="727">G<title>2796</title> </text>
                <text x="2380" y="727">G<title>2796</title> </text>
                <line x1="2369.0" y1="726.666666667" x2="2358.0" y2="726.333333333"><title>2796,2752</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="747">C<title>2797</title> </text>
                <text x="2380" y="747">C<title>2797</title> </text>
                <line x1="2367.0" y1="747" x2="2359.0" y2="747"><title>2797,2751</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="768">A<title>2798</title> </text>
                <text x="2380" y="768">A<title>2798</title> </text>
                <line x1="2369.0" y1="767.666666667" x2="2358.0" y2="767.333333333"><title>2798,2750</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="787">T<title>2799</title> </text>
                <text x="2380" y="787">T<title>2799</title> </text>
                <line x1="2369.0" y1="787.333333333" x2="2358.0" y2="787.666666667"><title>2799,2749</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="807">T<title>2800</title> </text>
                <text x="2380" y="807">T<title>2800</title> </text>
                <line x1="2369.0" y1="807.333333333" x2="2358.0" y2="807.666666667"><title>2800,2748</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="828">A<title>2801</title> </text>
                <text x="2380" y="828">A<title>2801</title> </text>
                <line x1="2369.0" y1="827.666666667" x2="2358.0" y2="827.333333333"><title>2801,2747</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="848">A<title>2802</title> </text>
                <text x="2380" y="848">A<title>2802</title> </text>
                <line x1="2369.0" y1="847.666666667" x2="2358.0" y2="847.333333333"><title>2802,2746</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2390" y="863">A<title>2803</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2390" y="881">A<title>2804</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="895">A<title>2805</title> </text>
                <text x="2380" y="895">A<title>2805</title> </text>
                <line x1="2368.66666667" y1="894.666666667" x2="2357.33333333" y2="894.333333333"><title>2805,2743</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="914">T<title>2806</title> </text>
                <text x="2380" y="914">T<title>2806</title> </text><circle cx="2363.0" cy="914.0" r="2"><title>2806,2742</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="934">T<title>2807</title> </text>
                <text x="2380" y="934">T<title>2807</title> </text>
                <line x1="2368.66666667" y1="934.333333333" x2="2357.33333333" y2="934.666666667"><title>2807,2741</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2402" y="931">T<title>2808</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2421" y="929">C<title>2809</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2443" y="927">G<title>2810</title> </text>
                <text x="2443" y="927">G<title>2810</title> </text>
                <line x1="2454.0" y1="926.333333333" x2="2465.0" y2="925.666666667"><title>2810,2822</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2442" y="907">G<title>2811</title> </text>
                <text x="2442" y="907">G<title>2811</title> </text>
                <line x1="2453.0" y1="906.333333333" x2="2464.0" y2="905.666666667"><title>2811,2821</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2441" y="886">T<title>2812</title> </text>
                <text x="2441" y="886">T<title>2812</title> </text>
                <line x1="2461.0" y1="886" x2="2453.0" y2="886"><title>2812,2820</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2430" y="872">T<title>2813</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2430" y="855">G<title>2814</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2439" y="840">G<title>2815</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2456" y="834">G<title>2816</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2473" y="839">G<title>2817</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2484" y="853">C<title>2818</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2484" y="870">G<title>2819</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2474" y="886">A<title>2820</title> </text>
                <text x="2474" y="886">A<title>2820</title> </text>
                <line x1="2461.0" y1="886" x2="2453.0" y2="886"><title>2820,2812</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2475" y="905">C<title>2821</title> </text>
                <text x="2475" y="905">C<title>2821</title> </text>
                <line x1="2464.0" y1="905.666666667" x2="2453.0" y2="906.333333333"><title>2821,2811</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2476" y="925">C<title>2822</title> </text>
                <text x="2476" y="925">C<title>2822</title> </text>
                <line x1="2465.0" y1="925.666666667" x2="2454.0" y2="926.333333333"><title>2822,2810</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2509" y="924">T<title>2823</title> </text>
                <text x="2509" y="924">T<title>2823</title> </text>
                <line x1="2520.0" y1="924.333333333" x2="2531.0" y2="924.666666667"><title>2823,2845</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2509" y="904">C<title>2824</title> </text>
                <text x="2509" y="904">C<title>2824</title> </text>
                <line x1="2520.33333333" y1="904.333333333" x2="2531.66666667" y2="904.666666667"><title>2824,2844</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2510" y="884">G<title>2825</title> </text>
                <text x="2510" y="884">G<title>2825</title> </text>
                <line x1="2530.0" y1="884" x2="2522.0" y2="884"><title>2825,2843</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2510" y="864">G<title>2826</title> </text>
                <text x="2510" y="864">G<title>2826</title> </text>
                <line x1="2530.0" y1="864" x2="2522.0" y2="864"><title>2826,2842</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2510" y="844">A<title>2827</title> </text>
                <text x="2510" y="844">A<title>2827</title> </text>
                <line x1="2521.33333333" y1="843.666666667" x2="2532.66666667" y2="843.333333333"><title>2827,2841</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2511" y="823">G<title>2828</title> </text>
                <text x="2511" y="823">G<title>2828</title> </text>
                <line x1="2522.0" y1="823.333333333" x2="2533.0" y2="823.666666667"><title>2828,2840</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2497" y="812">C<title>2829</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2489" y="797">A<title>2830</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2490" y="779">G<title>2831</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2497" y="764">A<title>2832</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2511" y="753">A<title>2833</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2529" y="748">C<title>2834</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2546" y="752">C<title>2835</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2560" y="764">C<title>2836</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2566" y="781">A<title>2837</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2566" y="798">A<title>2838</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2558" y="813">C<title>2839</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2544" y="824">C<title>2840</title> </text>
                <text x="2544" y="824" >C<title>2840</title> </text>
                <line x1="2533.0" y1="823.666666667" x2="2522.0" y2="823.333333333" ><title>2840,2828</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2544" y="843" >T<title>2841</title> </text>
                <text x="2544" y="843" >T<title>2841</title> </text>
                <line x1="2532.66666667" y1="843.333333333" x2="2521.33333333" y2="843.666666667" ><title>2841,2827</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2543" y="864" >C<title>2842</title> </text>
                <text x="2543" y="864" >C<title>2842</title> </text>
                <line x1="2530.0" y1="864" x2="2522.0" y2="864" ><title>2842,2826</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2543" y="884" >C<title>2843</title> </text>
                <text x="2543" y="884" >C<title>2843</title> </text>
                <line x1="2530.0" y1="884" x2="2522.0" y2="884" ><title>2843,2825</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2543" y="905" >G<title>2844</title> </text>
                <text x="2543" y="905" >G<title>2844</title> </text>
                <line x1="2531.66666667" y1="904.666666667" x2="2520.33333333" y2="904.333333333" ><title>2844,2824</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2542" y="925" >A<title>2845</title> </text>
                <text x="2542" y="925" >A<title>2845</title> </text>
                <line x1="2531.0" y1="924.666666667" x2="2520.0" y2="924.333333333" ><title>2845,2823</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2558" y="925" >G<title>2846</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2574" y="925" >C<title>2847</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2588" y="925" >A<title>2848</title> </text>
                <text x="2588" y="925" >A<title>2848</title> </text>
                <line x1="2588" y1="945.0" x2="2588" y2="937.0" ><title>2848,2890</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2609" y="925" >G<title>2849</title> </text>
                <text x="2609" y="925" >G<title>2849</title> </text>
                <line x1="2609" y1="945.0" x2="2609" y2="937.0" ><title>2849,2889</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2623" y="902" >T<title>2850</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2643" y="887" >A<title>2851</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2669" y="880" >C<title>2852</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2693" y="886" >A<title>2853</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2715" y="899" >T<title>2854</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2727" y="926" >G<title>2855</title> </text>
                <text x="2727" y="926" >G<title>2855</title> </text>
                <line x1="2727.66666667" y1="936.666666667" x2="2728.33333333" y2="947.333333333" ><title>2855,2877</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2748" y="925" >C<title>2856</title> </text>
                <text x="2748" y="925" >C<title>2856</title> </text>
                <line x1="2748.33333333" y1="935.666666667" x2="2748.66666667" y2="946.333333333" ><title>2856,2876</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2760" y="910" >T<title>2857</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2777" y="906" >A<title>2858</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2795" y="911" >A<title>2859</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2807" y="924" >G<title>2860</title> </text>
                <text x="2807" y="924" >G<title>2860</title> </text>
                <line x1="2807" y1="944.0" x2="2807" y2="936.0" ><title>2860,2872</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2827" y="925" >A<title>2861</title> </text>
                <text x="2827" y="925" >A<title>2861</title> </text>
                <line x1="2827" y1="945.0" x2="2827" y2="937.0" ><title>2861,2871</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2848" y="925" >C<title>2862</title> </text>
                <text x="2848" y="925" >C<title>2862</title> </text>
                <line x1="2848.33333333" y1="936.0" x2="2848.66666667" y2="947.0" ><title>2862,2870</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2862" y="914" >T<title>2863</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2880" y="914" >T<title>2864</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2895" y="926" >C<title>2865</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2899" y="943" >A<title>2866</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2894" y="960" >C<title>2867</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2879" y="970" >C<title>2868</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2860" y="970" >A<title>2869</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2849" y="958" >G<title>2870</title> </text>
                <text x="2849" y="958" >G<title>2870</title> </text>
                <line x1="2848.66666667" y1="947.0" x2="2848.33333333" y2="936.0" ><title>2870,2862</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2827" y="957" >T<title>2871</title> </text>
                <text x="2827" y="957" >T<title>2871</title> </text>
                <line x1="2827" y1="945.0" x2="2827" y2="937.0" ><title>2871,2861</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2807" y="957" >C<title>2872</title> </text>
                <text x="2807" y="957" >C<title>2872</title> </text>
                <line x1="2807" y1="944.0" x2="2807" y2="936.0" ><title>2872,2860</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2794" y="969" >A<title>2873</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2777" y="973" >A<title>2874</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2761" y="969" >A<title>2875</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2749" y="957" >G<title>2876</title> </text>
                <text x="2749" y="957" >G<title>2876</title> </text>
                <line x1="2748.66666667" y1="946.333333333" x2="2748.33333333" y2="935.666666667" ><title>2876,2856</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2729" y="958" >C<title>2877</title> </text>
                <text x="2729" y="958" >C<title>2877</title> </text>
                <line x1="2728.33333333" y1="947.333333333" x2="2727.66666667" y2="936.666666667" ><title>2877,2855</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2724" y="968" >G<title>2878</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2716" y="979" >A<title>2879</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2706" y="989" >A<title>2880</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2696" y="996" >C<title>2881</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2683" y="1000" >T<title>2882</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2669" y="1003" >A<title>2883</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2656" y="1001" >C<title>2884</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2643" y="997" >T<title>2885</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2631" y="991" >A<title>2886</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2621" y="981" >T<title>2887</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2613" y="971" >A<title>2888</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2609" y="958" >C<title>2889</title> </text>
                <text x="2609" y="958" >C<title>2889</title> </text>
                <line x1="2609" y1="945.0" x2="2609" y2="937.0" ><title>2889,2849</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2588" y="957" >T<title>2890</title> </text>
                <text x="2588" y="957" >T<title>2890</title> </text>
                <line x1="2588" y1="945.0" x2="2588" y2="937.0" ><title>2890,2848</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2576" y="963" >C<title>2891</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2572" y="976" >A<title>2892</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2581" y="985" >A<title>2893</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2593" y="996" >T<title>2894</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2599" y="1014" >T<title>2895</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2587" y="1025" >G<title>2896</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2571" y="1026" >A<title>2897</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2558" y="1015" >T<title>2898</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2547" y="1004" >C<title>2899</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2534" y="997" >C<title>2900</title> </text>
                <text x="2534" y="997" >C<title>2900</title> </text>
                <line x1="2521.0" y1="997" x2="2513.0" y2="997" ><title>2900,2909</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2533" y="1017" >A<title>2901</title> </text>
                <text x="2533" y="1017" >A<title>2901</title> </text>
                <line x1="2522.0" y1="1016.66666667" x2="2511.0" y2="1016.33333333" ><title>2901,2908</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2533" y="1038" >A<title>2902</title> </text>
                <text x="2533" y="1038" >A<title>2902</title> </text>
                <line x1="2522.0" y1="1037.66666667" x2="2511.0" y2="1037.33333333" ><title>2902,2907</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2537" y="1054" >T<title>2903</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2526" y="1069" >A<title>2904</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2508" y="1069" >A<title>2905</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2498" y="1055" >C<title>2906</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2500" y="1037" >T<title>2907</title> </text>
                <text x="2500" y="1037" >T<title>2907</title> </text>
                <line x1="2511.0" y1="1037.33333333" x2="2522.0" y2="1037.66666667" ><title>2907,2902</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2500" y="1016" >T<title>2908</title> </text>
                <text x="2500" y="1016" >T<title>2908</title> </text>
                <line x1="2511.0" y1="1016.33333333" x2="2522.0" y2="1016.66666667" ><title>2908,2901</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2500" y="997" >G<title>2909</title> </text>
                <text x="2500" y="997" >G<title>2909</title> </text>
                <line x1="2521.0" y1="997" x2="2513.0" y2="997" ><title>2909,2900</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2487" y="997" >A<title>2910</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2475" y="1006" >C<title>2911</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2472" y="1021" >C<title>2912</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2473" y="1036" >A<title>2913</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2473" y="1049" >A<title>2914</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2472" y="1063" >C<title>2915</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2461" y="1073" >G<title>2916</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2447" y="1067" >G<title>2917</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2436" y="1057" >A<title>2918</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2427" y="1046" >A<title>2919</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2421" y="1033" >C<title>2920</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2410" y="1021" >A<title>2921</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2399" y="1012" >A<title>2922</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2386" y="1008" >G<title>2923</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1022" >T<title>2924</title> </text>
                <text x="2379" y="1022" >T<title>2924</title> </text><circle cx="2362.0" cy="1022.0" r="2"><title>2924,2737</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1043" >T<title>2925</title> </text>
                <text x="2379" y="1043" >T<title>2925</title> </text><circle cx="2362.0" cy="1043.0" r="2"><title>2925,2736</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2378" y="1064" >A<title>2926</title> </text>
                <text x="2378" y="1064" >A<title>2926</title> </text><circle cx="2362.0" cy="1063.0" r="2"><title>2926,2735</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1084" >C<title>2927</title> </text>
                <text x="2379" y="1084" >C<title>2927</title> </text><circle cx="2362.0" cy="1084.0" r="2"><title>2927,2734</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1104" >C<title>2928</title> </text>
                <text x="2379" y="1104" >C<title>2928</title> </text>
                <line x1="2366.0" y1="1104" x2="2358.0" y2="1104" ><title>2928,2733</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2378" y="1124" >C<title>2929</title> </text>
                <text x="2378" y="1124" >C<title>2929</title> </text>
                <line x1="2366.0" y1="1124" x2="2358.0" y2="1124" ><title>2929,2732</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2378" y="1149" >T<title>2930</title> </text>
                <text x="2378" y="1149" >T<title>2930</title> </text>
                <line x1="2367.33333333" y1="1149.33333333" x2="2356.66666667" y2="1149.66666667" ><title>2930,2730</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2378" y="1170" >A<title>2931</title> </text>
                <text x="2378" y="1170" >A<title>2931</title> </text>
                <line x1="2367.33333333" y1="1169.66666667" x2="2356.66666667" y2="1169.33333333" ><title>2931,2729</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1190" >G<title>2932</title> </text>
                <text x="2379" y="1190" >G<title>2932</title> </text>
                <line x1="2366.0" y1="1190" x2="2358.0" y2="1190" ><title>2932,2728</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2379" y="1210" >G<title>2933</title> </text>
                <text x="2379" y="1210" >G<title>2933</title> </text>
                <line x1="2366.0" y1="1210" x2="2358.0" y2="1210" ><title>2933,2727</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2395" y="1213" >G<title>2934</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2409" y="1218" >A<title>2935</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2424" y="1224" >T<title>2936</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2437" y="1231" >A<title>2937</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2450" y="1241" >A<title>2938</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2464" y="1253" >C<title>2939</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2475" y="1266" >A<title>2940</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2485" y="1280" >G<title>2941</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2493" y="1297" >C<title>2942</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2500" y="1316" >G<title>2943</title> </text>
                <text x="2500" y="1316" >G<title>2943</title> </text>
                <line x1="2500.33333333" y1="1327.0" x2="2500.66666667" y2="1338.0" ><title>2943,2982</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2512" y="1308" >C<title>2944</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2527" y="1308" >A<title>2945</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2539" y="1316" >A<title>2946</title> </text>
                <text x="2539" y="1316" >A<title>2946</title> </text>
                <line x1="2539" y1="1336.0" x2="2539" y2="1328.0" ><title>2946,2980</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2562" y="1303" >T<title>2947</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2586" y="1316" >C<title>2948</title> </text>
                <text x="2586" y="1316" >C<title>2948</title> </text>
                <line x1="2586" y1="1336.0" x2="2586" y2="1328.0" ><title>2948,2976</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2606" y="1316" >C<title>2949</title> </text>
                <text x="2606" y="1316" >C<title>2949</title> </text>
                <line x1="2605.66666667" y1="1327.0" x2="2605.33333333" y2="1338.0" ><title>2949,2975</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2626" y="1316" >T<title>2950</title> </text>
                <text x="2626" y="1316" >T<title>2950</title> </text>
                <line x1="2626" y1="1336.0" x2="2626" y2="1328.0" ><title>2950,2974</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2646" y="1316" >A<title>2951</title> </text>
                <text x="2646" y="1316" >A<title>2951</title> </text>
                <line x1="2646" y1="1336.0" x2="2646" y2="1328.0" ><title>2951,2973</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2666" y="1316" >T<title>2952</title> </text>
                <text x="2666" y="1316" >T<title>2952</title> </text>
                <line x1="2666" y1="1337.0" x2="2666" y2="1329.0" ><title>2952,2972</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2687" y="1316" >T<title>2953</title> </text>
                <text x="2687" y="1316" >T<title>2953</title> </text>
                <line x1="2686.66666667" y1="1327.33333333" x2="2686.33333333" y2="1338.66666667" ><title>2953,2971</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2707" y="1307" >C<title>2954</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2726" y="1316" >T<title>2955</title> </text>
                <text x="2726" y="1316" >T<title>2955</title> </text>
                <line x1="2726" y1="1337.0" x2="2726" y2="1329.0" ><title>2955,2968</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2738" y="1313" >A<title>2956</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2752" y="1316" >G<title>2957</title> </text>
                <text x="2752" y="1316" >G<title>2957</title> </text>
                <line x1="2752.33333333" y1="1326.66666667" x2="2752.66666667" y2="1337.33333333" ><title>2957,2967</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2771" y="1316" >A<title>2958</title> </text>
                <text x="2771" y="1316" >A<title>2958</title> </text>
                <line x1="2771.66666667" y1="1326.33333333" x2="2772.33333333" y2="1336.66666667" ><title>2958,2966</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2786" y="1304" >G<title>2959</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2803" y="1302" >T<title>2960</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2818" y="1313" >C<title>2961</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2824" y="1329" >C<title>2962</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2819" y="1348" >A<title>2963</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2805" y="1357" >T<title>2964</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2787" y="1359" >A<title>2965</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2773" y="1347" >T<title>2966</title> </text>
                <text x="2773" y="1347" >T<title>2966</title> </text>
                <line x1="2772.33333333" y1="1336.66666667" x2="2771.66666667" y2="1326.33333333" ><title>2966,2958</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2753" y="1348" >C<title>2967</title> </text>
                <text x="2753" y="1348" >C<title>2967</title> </text>
                <line x1="2752.66666667" y1="1337.33333333" x2="2752.33333333" y2="1326.66666667" ><title>2967,2957</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2726" y="1350" >A<title>2968</title> </text>
                <text x="2726" y="1350" >A<title>2968</title> </text>
                <line x1="2726" y1="1337.0" x2="2726" y2="1329.0" ><title>2968,2955</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2714" y="1358" >A<title>2969</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2700" y="1358" >C<title>2970</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2686" y="1350" >A<title>2971</title> </text>
                <text x="2686" y="1350" >A<title>2971</title> </text>
                <line x1="2686.33333333" y1="1338.66666667" x2="2686.66666667" y2="1327.33333333" ><title>2971,2953</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2666" y="1350" >A<title>2972</title> </text>
                <text x="2666" y="1350" >A<title>2972</title> </text>
                <line x1="2666" y1="1337.0" x2="2666" y2="1329.0" ><title>2972,2952</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2646" y="1349" >T<title>2973</title> </text>
                <text x="2646" y="1349" >T<title>2973</title> </text>
                <line x1="2646" y1="1336.0" x2="2646" y2="1328.0" ><title>2973,2951</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2626" y="1349" >A<title>2974</title> </text>
                <text x="2626" y="1349" >A<title>2974</title> </text>
                <line x1="2626" y1="1336.0" x2="2626" y2="1328.0" ><title>2974,2950</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2605" y="1349" >G<title>2975</title> </text>
                <text x="2605" y="1349" >G<title>2975</title> </text>
                <line x1="2605.33333333" y1="1338.0" x2="2605.66666667" y2="1327.0" ><title>2975,2949</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2586" y="1349" >G<title>2976</title> </text>
                <text x="2586" y="1349" >G<title>2976</title> </text>
                <line x1="2586" y1="1336.0" x2="2586" y2="1328.0" ><title>2976,2948</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2576" y="1357" >G<title>2977</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2563" y="1360" >T<title>2978</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2549" y="1357" >T<title>2979</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2539" y="1348" >T<title>2980</title> </text>
                <text x="2539" y="1348" >T<title>2980</title> </text>
                <line x1="2539" y1="1336.0" x2="2539" y2="1328.0" ><title>2980,2946</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2520" y="1359" >A<title>2981</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2501" y="1349" >C<title>2982</title> </text>
                <text x="2501" y="1349" >C<title>2982</title> </text>
                <line x1="2500.66666667" y1="1338.0" x2="2500.33333333" y2="1327.0" ><title>2982,2943</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2500" y="1366" >G<title>2983</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2495" y="1382" >A<title>2984</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2493" y="1398" >C<title>2985</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2485" y="1413" >C<title>2986</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2477" y="1427" >T<title>2987</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2467" y="1440" >C<title>2988</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2455" y="1452" >G<title>2989</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2441" y="1463" >A<title>2990</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2426" y="1471" >T<title>2991</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2412" y="1477" >G<title>2992</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2396" y="1482" >T<title>2993</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2380" y="1486" >T<title>2994</title> </text>
                <text x="2380" y="1486" >T<title>2994</title> </text><circle cx="2363.0" cy="1486.0" r="2"><title>2994,3068</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1518" >G<title>2995</title> </text>
                <text x="2381" y="1518" >G<title>2995</title> </text><circle cx="2364.0" cy="1517.0" r="2"><title>2995,3067</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1538" >G<title>2996</title> </text>
                <text x="2381" y="1538" >G<title>2996</title> </text>
                <line x1="2368.0" y1="1538" x2="2360.0" y2="1538" ><title>2996,3066</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1558" >A<title>2997</title> </text>
                <text x="2381" y="1558" >A<title>2997</title> </text>
                <line x1="2370.0" y1="1557.66666667" x2="2359.0" y2="1557.33333333" ><title>2997,3065</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2392" y="1581" >T<title>2998</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1604" >C<title>2999</title> </text>
                <text x="2381" y="1604" >C<title>2999</title> </text>
                <line x1="2368.0" y1="1604" x2="2360.0" y2="1604" ><title>2999,3061</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1638" >A<title>3000</title> </text>
                <text x="2381" y="1638" >A<title>3000</title> </text>
                <line x1="2368.0" y1="1638" x2="2360.0" y2="1638" ><title>3000,3058</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1657" >G<title>3001</title> </text>
                <text x="2381" y="1657" >G<title>3001</title> </text>
                <line x1="2368.0" y1="1657" x2="2360.0" y2="1657" ><title>3001,3057</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1677" >G<title>3002</title> </text>
                <text x="2381" y="1677" >G<title>3002</title> </text>
                <line x1="2370.0" y1="1677.33333333" x2="2359.0" y2="1677.66666667" ><title>3002,3056</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1699" >A<title>3003</title> </text>
                <text x="2381" y="1699" >A<title>3003</title> </text>
                <line x1="2370.0" y1="1698.66666667" x2="2359.0" y2="1698.33333333" ><title>3003,3055</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1718" >C<title>3004</title> </text>
                <text x="2381" y="1718" >C<title>3004</title> </text>
                <line x1="2368.0" y1="1718" x2="2360.0" y2="1718" ><title>3004,3054</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2392" y="1725" >A<title>3005</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2402" y="1734" >T<title>3006</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2409" y="1746" >C<title>3007</title> </text>
                <text x="2409" y="1746" >C<title>3007</title> </text>
                <line x1="2409" y1="1766.0" x2="2409" y2="1758.0" ><title>3007,3032</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2429" y="1746" >C<title>3008</title> </text>
                <text x="2429" y="1746" >C<title>3008</title> </text>
                <line x1="2429" y1="1766.0" x2="2429" y2="1758.0" ><title>3008,3031</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2452" y="1734" >C<title>3009</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2475" y="1746" >G<title>3010</title> </text>
                <text x="2475" y="1746" >G<title>3010</title> </text><circle cx="2475.0" cy="1762.0" r="2"><title>3010,3027</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2494" y="1746" >A<title>3011</title> </text>
                <text x="2494" y="1746" >A<title>3011</title> </text>
                <line x1="2494.33333333" y1="1756.66666667" x2="2494.66666667" y2="1767.33333333" ><title>3011,3026</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2515" y="1745" >T<title>3012</title> </text>
                <text x="2515" y="1745" >T<title>3012</title> </text>
                <line x1="2515" y1="1765.0" x2="2515" y2="1757.0" ><title>3012,3025</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2536" y="1745" >G<title>3013</title> </text>
                <text x="2536" y="1745" >G<title>3013</title> </text><circle cx="2536.0" cy="1761.0" r="2"><title>3013,3024</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2556" y="1745" >G<title>3014</title> </text>
                <text x="2556" y="1745" >G<title>3014</title> </text>
                <line x1="2556" y1="1765.0" x2="2556" y2="1757.0" ><title>3014,3023</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2576" y="1744" >T<title>3015</title> </text>
                <text x="2576" y="1744" >T<title>3015</title> </text><circle cx="2576.0" cy="1761.0" r="2"><title>3015,3022</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2592" y="1736" >G<title>3016</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2609" y="1739" >C<title>3017</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2620" y="1753" >A<title>3018</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2621" y="1770" >G<title>3019</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2609" y="1783" >C<title>3020</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2592" y="1787" >C<title>3021</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2576" y="1778" >G<title>3022</title> </text>
                <text x="2576" y="1778" >G<title>3022</title> </text><circle cx="2576.0" cy="1761.0" r="2"><title>3022,3015</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2556" y="1778" >C<title>3023</title> </text>
                <text x="2556" y="1778" >C<title>3023</title> </text>
                <line x1="2556" y1="1765.0" x2="2556" y2="1757.0" ><title>3023,3014</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2536" y="1778" >T<title>3024</title> </text>
                <text x="2536" y="1778" >T<title>3024</title> </text><circle cx="2536.0" cy="1761.0" r="2"><title>3024,3013</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2515" y="1778" >A<title>3025</title> </text>
                <text x="2515" y="1778" >A<title>3025</title> </text>
                <line x1="2515" y1="1765.0" x2="2515" y2="1757.0" ><title>3025,3012</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2495" y="1778" >T<title>3026</title> </text>
                <text x="2495" y="1778" >T<title>3026</title> </text>
                <line x1="2494.66666667" y1="1767.33333333" x2="2494.33333333" y2="1756.66666667" ><title>3026,3011</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2475" y="1778" >T<title>3027</title> </text>
                <text x="2475" y="1778" >T<title>3027</title> </text><circle cx="2475.0" cy="1762.0" r="2"><title>3027,3010</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2465" y="1788" >A<title>3028</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2452" y="1792" >A<title>3029</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2438" y="1789" >A<title>3030</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2429" y="1779" >G<title>3031</title> </text>
                <text x="2429" y="1779" >G<title>3031</title> </text>
                <line x1="2429" y1="1766.0" x2="2429" y2="1758.0" ><title>3031,3008</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2409" y="1779" >G<title>3032</title> </text>
                <text x="2409" y="1779" >G<title>3032</title> </text>
                <line x1="2409" y1="1766.0" x2="2409" y2="1758.0" ><title>3032,3007</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2397" y="1795" >T<title>3033</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1808" >T<title>3034</title> </text>
                <text x="2381" y="1808" >T<title>3034</title> </text>
                <line x1="2368.0" y1="1808" x2="2360.0" y2="1808" ><title>3034,3048</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1827" >C<title>3035</title> </text>
                <text x="2381" y="1827" >C<title>3035</title> </text>
                <line x1="2368.0" y1="1827" x2="2360.0" y2="1827" ><title>3035,3047</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1847" >G<title>3036</title> </text>
                <text x="2381" y="1847" >G<title>3036</title> </text>
                <line x1="2368.0" y1="1847" x2="2360.0" y2="1847" ><title>3036,3046</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1868" >T<title>3037</title> </text>
                <text x="2381" y="1868" >T<title>3037</title> </text>
                <line x1="2368.0" y1="1868" x2="2360.0" y2="1868" ><title>3037,3045</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1888" >T<title>3038</title> </text>
                <text x="2381" y="1888" >T<title>3038</title> </text>
                <line x1="2368.0" y1="1888" x2="2360.0" y2="1888" ><title>3038,3044</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2387" y="1903" >T<title>3039</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2381" y="1921" >G<title>3040</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2364" y="1927" >T<title>3041</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1920" >T<title>3042</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2341" y="1904" >C<title>3043</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1888" >A<title>3044</title> </text>
                <text x="2347" y="1888" >A<title>3044</title> </text>
                <line x1="2368.0" y1="1888" x2="2360.0" y2="1888" ><title>3044,3038</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1868" >A<title>3045</title> </text>
                <text x="2347" y="1868" >A<title>3045</title> </text>
                <line x1="2368.0" y1="1868" x2="2360.0" y2="1868" ><title>3045,3037</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1847" >C<title>3046</title> </text>
                <text x="2347" y="1847" >C<title>3046</title> </text>
                <line x1="2368.0" y1="1847" x2="2360.0" y2="1847" ><title>3046,3036</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1827" >G<title>3047</title> </text>
                <text x="2347" y="1827" >G<title>3047</title> </text>
                <line x1="2368.0" y1="1827" x2="2360.0" y2="1827" ><title>3047,3035</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1808" >A<title>3048</title> </text>
                <text x="2347" y="1808" >A<title>3048</title> </text>
                <line x1="2368.0" y1="1808" x2="2360.0" y2="1808" ><title>3048,3034</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2331" y="1796" >T<title>3049</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2321" y="1780" >T<title>3050</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2316" y="1763" >A<title>3051</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2320" y="1744" >A<title>3052</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2331" y="1729" >A<title>3053</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1718" >G<title>3054</title> </text>
                <text x="2348" y="1718" >G<title>3054</title> </text>
                <line x1="2368.0" y1="1718" x2="2360.0" y2="1718" ><title>3054,3004</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1698" >T<title>3055</title> </text>
                <text x="2348" y="1698" >T<title>3055</title> </text>
                <line x1="2359.0" y1="1698.33333333" x2="2370.0" y2="1698.66666667" ><title>3055,3003</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1678" >C<title>3056</title> </text>
                <text x="2348" y="1678" >C<title>3056</title> </text>
                <line x1="2359.0" y1="1677.66666667" x2="2370.0" y2="1677.33333333" ><title>3056,3002</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1657" >C<title>3057</title> </text>
                <text x="2348" y="1657" >C<title>3057</title> </text>
                <line x1="2368.0" y1="1657" x2="2360.0" y2="1657" ><title>3057,3001</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1638" >T<title>3058</title> </text>
                <text x="2348" y="1638" >T<title>3058</title> </text>
                <line x1="2368.0" y1="1638" x2="2360.0" y2="1638" ><title>3058,3000</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2341" y="1627" >A<title>3059</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2342" y="1615" >C<title>3060</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1604" >G<title>3061</title> </text>
                <text x="2348" y="1604" >G<title>3061</title> </text>
                <line x1="2368.0" y1="1604" x2="2360.0" y2="1604" ><title>3061,2999</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2339" y="1594" >T<title>3062</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2336" y="1581" >G<title>3063</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2338" y="1569" >A<title>3064</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1557" >T<title>3065</title> </text>
                <text x="2348" y="1557" >T<title>3065</title> </text>
                <line x1="2359.0" y1="1557.33333333" x2="2370.0" y2="1557.66666667" ><title>3065,2997</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1538" >C<title>3066</title> </text>
                <text x="2348" y="1538" >C<title>3066</title> </text>
                <line x1="2368.0" y1="1538" x2="2360.0" y2="1538" ><title>3066,2996</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2348" y="1517" >T<title>3067</title> </text>
                <text x="2348" y="1517" >T<title>3067</title> </text><circle cx="2364.0" cy="1517.0" r="2"><title>3067,2995</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2347" y="1487" >G<title>3068</title> </text>
                <text x="2347" y="1487" >G<title>3068</title> </text><circle cx="2363.0" cy="1486.0" r="2"><title>3068,2994</title> </circle><line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2336" y="1485" >A<title>3069</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2324" y="1481" >G<title>3070</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2313" y="1477" >T<title>3071</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2303" y="1473" >T<title>3072</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2293" y="1468" >C<title>3073</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2283" y="1461" >A<title>3074</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2273" y="1454" >G<title>3075</title> </text>
                <text x="2273" y="1454" >G<title>3075</title> </text>
                <line x1="2265.66666667" y1="1446.0" x2="2258.33333333" y2="1438.0" ><title>3075,3093</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2258" y="1469" >A<title>3076</title> </text>
                <text x="2258" y="1469" >A<title>3076</title> </text>
                <line x1="2250.33333333" y1="1460.33333333" x2="2242.66666667" y2="1451.66666667" ><title>3076,3092</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2243" y="1481" >C<title>3077</title> </text>
                <text x="2243" y="1481" >C<title>3077</title> </text>
                <line x1="2235.66666667" y1="1473.0" x2="2228.33333333" y2="1465.0" ><title>3077,3091</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2228" y="1495" >C<title>3078</title> </text>
                <text x="2228" y="1495" >C<title>3078</title> </text>
                <line x1="2220.66666667" y1="1487.0" x2="2213.33333333" y2="1479.0" ><title>3078,3090</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2210" y="1512" >G<title>3079</title> </text>
                <text x="2210" y="1512" >G<title>3079</title> </text>
                <line x1="2202.33333333" y1="1504.33333333" x2="2194.66666667" y2="1496.66666667" ><title>3079,3088</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2195" y="1526" >G<title>3080</title> </text>
                <text x="2195" y="1526" >G<title>3080</title> </text>
                <line x1="2187.33333333" y1="1518.33333333" x2="2179.66666667" y2="1510.66666667" ><title>3080,3087</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2180" y="1541" >A<title>3081</title> </text>
                <text x="2180" y="1541" >A<title>3081</title> </text>
                <line x1="2172.33333333" y1="1532.66666667" x2="2164.66666667" y2="1524.33333333" ><title>3081,3086</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2171" y="1555" >G<title>3082</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2153" y="1556" >T<title>3083</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2140" y="1545" >A<title>3084</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2142" y="1527" >A<title>3085</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2157" y="1516" >T<title>3086</title> </text>
                <text x="2157" y="1516" >T<title>3086</title> </text>
                <line x1="2164.66666667" y1="1524.33333333" x2="2172.33333333" y2="1532.66666667" ><title>3086,3081</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2172" y="1503" >C<title>3087</title> </text>
                <text x="2172" y="1503" >C<title>3087</title> </text>
                <line x1="2179.66666667" y1="1510.66666667" x2="2187.33333333" y2="1518.33333333" ><title>3087,3080</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2187" y="1489" >C<title>3088</title> </text>
                <text x="2187" y="1489" >C<title>3088</title> </text>
                <line x1="2194.66666667" y1="1496.66666667" x2="2202.33333333" y2="1504.33333333" ><title>3088,3079</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2192" y="1477" >A<title>3089</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2206" y="1471" >G<title>3090</title> </text>
                <text x="2206" y="1471" >G<title>3090</title> </text>
                <line x1="2213.33333333" y1="1479.0" x2="2220.66666667" y2="1487.0" ><title>3090,3078</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2221" y="1457" >G<title>3091</title> </text>
                <text x="2221" y="1457" >G<title>3091</title> </text>
                <line x1="2228.33333333" y1="1465.0" x2="2235.66666667" y2="1473.0" ><title>3091,3077</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2235" y="1443" >T<title>3092</title> </text>
                <text x="2235" y="1443" >T<title>3092</title> </text>
                <line x1="2242.66666667" y1="1451.66666667" x2="2250.33333333" y2="1460.33333333" ><title>3092,3076</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2251" y="1430" >C<title>3093</title> </text>
                <text x="2251" y="1430" >C<title>3093</title> </text>
                <line x1="2258.33333333" y1="1438.0" x2="2265.66666667" y2="1446.0" ><title>3093,3075</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2242" y="1416" >G<title>3094</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2235" y="1400" >G<title>3095</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2229" y="1384" >T<title>3096</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2225" y="1367" >T<title>3097</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2224" y="1348" >T<title>3098</title> </text>
                <text x="2224" y="1348" >T<title>3098</title> </text>
                <line x1="2225.33333333" y1="1337.33333333" x2="2226.66666667" y2="1326.66666667" ><title>3098,2720</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2205" y="1348" >C<title>3099</title> </text>
                <text x="2205" y="1348" >C<title>3099</title> </text>
                <line x1="2205.33333333" y1="1337.33333333" x2="2205.66666667" y2="1326.66666667" ><title>3099,2719</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2191" y="1359" >T<title>3100</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2177" y="1359" >A<title>3101</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2166" y="1348" >T<title>3102</title> </text>
                <text x="2166" y="1348" >T<title>3102</title> </text>
                <line x1="2166" y1="1336.0" x2="2166" y2="1328.0" ><title>3102,2717</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2145" y="1348" >C<title>3103</title> </text>
                <text x="2145" y="1348" >C<title>3103</title> </text>
                <line x1="2145" y1="1336.0" x2="2145" y2="1328.0" ><title>3103,2716</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2121" y="1348" >T<title>3104</title> </text>
                <text x="2121" y="1348" >T<title>3104</title> </text>
                <line x1="2121" y1="1336.0" x2="2121" y2="1328.0" ><title>3104,2715</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2103" y="1359" >A<title>3105</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2088" y="1348" >C<title>3106</title> </text>
                <text x="2088" y="1348" >C<title>3106</title> </text>
                <line x1="2088.33333333" y1="1337.33333333" x2="2088.66666667" y2="1326.66666667" ><title>3106,2712</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2068" y="1348" >T<title>3108</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2054" y="1426" >T<title>3109</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2045" y="1500" >C<title>3110</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2047" y="1580" >A<title>3111</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2074" y="1650" >A<title>3112</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2109" y="1694" >A<title>3113</title> </text>
                <text x="2109" y="1694" >A<title>3113</title> </text>
                <line x1="2117.0" y1="1701.33333333" x2="2125.0" y2="1708.66666667" ><title>3113,3143</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2124" y="1678" >T<title>3114</title> </text>
                <text x="2124" y="1678" >T<title>3114</title> </text>
                <line x1="2131.66666667" y1="1686.33333333" x2="2139.33333333" y2="1694.66666667" ><title>3114,3142</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2138" y="1663" >T<title>3115</title> </text>
                <text x="2138" y="1663" >T<title>3115</title> </text>
                <line x1="2145.66666667" y1="1671.33333333" x2="2153.33333333" y2="1679.66666667" ><title>3115,3141</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2144" y="1648" >C<title>3116</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2161" y="1641" >C<title>3117</title> </text>
                <text x="2161" y="1641" >C<title>3117</title> </text>
                <line x1="2169.0" y1="1648.66666667" x2="2177.0" y2="1656.33333333" ><title>3117,3139</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2175" y="1625" >T<title>3118</title> </text>
                <text x="2175" y="1625" >T<title>3118</title> </text>
                <line x1="2182.66666667" y1="1633.33333333" x2="2190.33333333" y2="1641.66666667" ><title>3118,3138</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2189" y="1612" >C<title>3119</title> </text>
                <text x="2189" y="1612" >C<title>3119</title> </text>
                <line x1="2197.0" y1="1619.66666667" x2="2205.0" y2="1627.33333333" ><title>3119,3137</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2185" y="1596" >C<title>3120</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2186" y="1580" >C<title>3121</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2192" y="1564" >T<title>3122</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2204" y="1553" >G<title>3123</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2218" y="1545" >T<title>3124</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2233" y="1545" >A<title>3125</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2250" y="1547" >C<title>3126</title> </text>
                <text x="2250" y="1547" >C<title>3126</title> </text>
                <line x1="2258.33333333" y1="1554.66666667" x2="2266.66666667" y2="1562.33333333" ><title>3126,3131</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2259" y="1532" >G<title>3127</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2276" y="1530" >A<title>3128</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2289" y="1542" >A<title>3129</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2288" y="1560" >A<title>3130</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2275" y="1570" >G<title>3131</title> </text>
                <text x="2275" y="1570" >G<title>3131</title> </text>
                <line x1="2266.66666667" y1="1562.33333333" x2="2258.33333333" y2="1554.66666667" ><title>3131,3126</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2280" y="1589" >G<title>3132</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2277" y="1609" >A<title>3133</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2267" y="1624" >C<title>3134</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2250" y="1636" >A<title>3135</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2231" y="1640" >A<title>3136</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2213" y="1635" >G<title>3137</title> </text>
                <text x="2213" y="1635" >G<title>3137</title> </text>
                <line x1="2205.0" y1="1627.33333333" x2="2197.0" y2="1619.66666667" ><title>3137,3119</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2198" y="1650" >A<title>3138</title> </text>
                <text x="2198" y="1650" >A<title>3138</title> </text>
                <line x1="2190.33333333" y1="1641.66666667" x2="2182.66666667" y2="1633.33333333" ><title>3138,3118</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2185" y="1664" >G<title>3139</title> </text>
                <text x="2185" y="1664" >G<title>3139</title> </text>
                <line x1="2177.0" y1="1656.33333333" x2="2169.0" y2="1648.66666667" ><title>3139,3117</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2177" y="1681" >A<title>3140</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2161" y="1688" >A<title>3141</title> </text>
                <text x="2161" y="1688" >A<title>3141</title> </text>
                <line x1="2153.33333333" y1="1679.66666667" x2="2145.66666667" y2="1671.33333333" ><title>3141,3115</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2147" y="1703" >A<title>3142</title> </text>
                <text x="2147" y="1703" >A<title>3142</title> </text>
                <line x1="2139.33333333" y1="1694.66666667" x2="2131.66666667" y2="1686.33333333" ><title>3142,3114</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2133" y="1716" >T<title>3143</title> </text>
                <text x="2133" y="1716" >T<title>3143</title> </text>
                <line x1="2125.0" y1="1708.66666667" x2="2117.0" y2="1701.33333333" ><title>3143,3113</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2142" y="1730" >A<title>3144</title> </text>
                <text x="2142" y="1730" >A<title>3144</title> </text>
                <line x1="2134.33333333" y1="1737.33333333" x2="2126.66666667" y2="1744.66666667" ><title>3144,3167</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2156" y="1744" >A<title>3145</title> </text>
                <text x="2156" y="1744" >A<title>3145</title> </text>
                <line x1="2148.33333333" y1="1751.33333333" x2="2140.66666667" y2="1758.66666667" ><title>3145,3166</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2171" y="1759" >G<title>3146</title> </text>
                <text x="2171" y="1759" >G<title>3146</title> </text>
                <line x1="2163.0" y1="1766.33333333" x2="2155.0" y2="1773.66666667" ><title>3146,3165</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2185" y="1773" >G<title>3147</title> </text>
                <text x="2185" y="1773" >G<title>3147</title> </text>
                <line x1="2177.0" y1="1780.66666667" x2="2169.0" y2="1788.33333333" ><title>3147,3164</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2199" y="1788" >C<title>3148</title> </text>
                <text x="2199" y="1788" >C<title>3148</title> </text>
                <line x1="2191.0" y1="1795.66666667" x2="2183.0" y2="1803.33333333" ><title>3148,3163</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2212" y="1789" >C<title>3149</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2225" y="1794" >T<title>3150</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2230" y="1808" >A<title>3151</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2234" y="1822" >C<title>3152</title> </text>
                <text x="2234" y="1822" >C<title>3152</title> </text>
                <line x1="2226.0" y1="1829.66666667" x2="2218.0" y2="1837.33333333" ><title>3152,3161</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2247" y="1836" >T<title>3153</title> </text>
                <text x="2247" y="1836" >T<title>3153</title> </text>
                <line x1="2239.0" y1="1844.0" x2="2231.0" y2="1852.0" ><title>3153,3160</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2261" y="1850" >T<title>3154</title> </text>
                <text x="2261" y="1850" >T<title>3154</title> </text>
                <line x1="2253.0" y1="1858.0" x2="2245.0" y2="1866.0" ><title>3154,3159</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2276" y="1861" >C<title>3155</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2277" y="1879" >A<title>3156</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2265" y="1891" >C<title>3157</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2247" y="1890" >A<title>3158</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2237" y="1874" >A<title>3159</title> </text>
                <text x="2237" y="1874" >A<title>3159</title> </text>
                <line x1="2245.0" y1="1866.0" x2="2253.0" y2="1858.0" ><title>3159,3154</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2223" y="1860" >A<title>3160</title> </text>
                <text x="2223" y="1860" >A<title>3160</title> </text>
                <line x1="2231.0" y1="1852.0" x2="2239.0" y2="1844.0" ><title>3160,3153</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2210" y="1845" >G<title>3161</title> </text>
                <text x="2210" y="1845" >G<title>3161</title> </text>
                <line x1="2218.0" y1="1837.33333333" x2="2226.0" y2="1829.66666667" ><title>3161,3152</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2182" y="1835" >C<title>3162</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2175" y="1811" >G<title>3163</title> </text>
                <text x="2175" y="1811" >G<title>3163</title> </text>
                <line x1="2183.0" y1="1803.33333333" x2="2191.0" y2="1795.66666667" ><title>3163,3148</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2161" y="1796" >C<title>3164</title> </text>
                <text x="2161" y="1796" >C<title>3164</title> </text>
                <line x1="2169.0" y1="1788.33333333" x2="2177.0" y2="1780.66666667" ><title>3164,3147</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2147" y="1781" >C<title>3165</title> </text>
                <text x="2147" y="1781" >C<title>3165</title> </text>
                <line x1="2155.0" y1="1773.66666667" x2="2163.0" y2="1766.33333333" ><title>3165,3146</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2133" y="1766" >T<title>3166</title> </text>
                <text x="2133" y="1766" >T<title>3166</title> </text>
                <line x1="2140.66666667" y1="1758.66666667" x2="2148.33333333" y2="1751.33333333" ><title>3166,3145</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2119" y="1752" >T<title>3167</title> </text>
                <text x="2119" y="1752" >T<title>3167</title> </text>
                <line x1="2126.66666667" y1="1744.66666667" x2="2134.33333333" y2="1737.33333333" ><title>3167,3144</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2115" y="1766" >C<title>3168</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2114" y="1779" >C<title>3169</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2106" y="1791" >C<title>3170</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2094" y="1799" >C<title>3171</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2078" y="1801" >C<title>3172</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2063" y="1805" >G<title>3173</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2048" y="1804" >T<title>3174</title> </text>
                <text x="2048" y="1804" >T<title>3174</title> </text>
                <line x1="2040.33333333" y1="1796.33333333" x2="2032.66666667" y2="1788.66666667" ><title>3174,3195</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2033" y="1819" >A<title>3175</title> </text>
                <text x="2033" y="1819" >A<title>3175</title> </text>
                <line x1="2025.33333333" y1="1810.66666667" x2="2017.66666667" y2="1802.33333333" ><title>3175,3194</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2019" y="1833" >A<title>3176</title> </text>
                <text x="2019" y="1833" >A<title>3176</title> </text>
                <line x1="2011.33333333" y1="1824.66666667" x2="2003.66666667" y2="1816.33333333" ><title>3176,3193</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2024" y="1850" >A<title>3177</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2024" y="1867" >T<title>3178</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2018" y="1884" >G<title>3179</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2006" y="1898" >A<title>3180</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1991" y="1906" >T<title>3181</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1973" y="1910" >A<title>3182</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1956" y="1907" >T<title>3183</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1940" y="1900" >C<title>3184</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1927" y="1888" >A<title>3185</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1920" y="1870" >T<title>3186</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1918" y="1853" >C<title>3187</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1922" y="1836" >T<title>3188</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1932" y="1821" >C<title>3189</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1945" y="1810" >A<title>3190</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1962" y="1804" >A<title>3191</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1980" y="1804" >C<title>3192</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1996" y="1808" >T<title>3193</title> </text>
                <text x="1996" y="1808" >T<title>3193</title> </text>
                <line x1="2003.66666667" y1="1816.33333333" x2="2011.33333333" y2="1824.66666667" ><title>3193,3176</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2010" y="1794" >T<title>3194</title> </text>
                <text x="2010" y="1794" >T<title>3194</title> </text>
                <line x1="2017.66666667" y1="1802.33333333" x2="2025.33333333" y2="1810.66666667" ><title>3194,3175</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2025" y="1781" >A<title>3195</title> </text>
                <text x="2025" y="1781" >A<title>3195</title> </text>
                <line x1="2032.66666667" y1="1788.66666667" x2="2040.33333333" y2="1796.33333333" ><title>3195,3174</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2022" y="1749" >G<title>3196</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="2003" y="1701" >T<title>3197</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1979" y="1657" >A<title>3198</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1951" y="1616" >T<title>3199</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1921" y="1579" >T<title>3200</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1897" y="1549" >A<title>3201</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1876" y="1537" >T<title>3202</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1859" y="1535" >A<title>3203</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1843" y="1535" >C<title>3204</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1826" y="1540" >C<title>3205</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1811" y="1548" >C<title>3206</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1792" y="1558" >A<title>3207</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1779" y="1570" >C<title>3208</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1764" y="1583" >A<title>3209</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1756" y="1599" >C<title>3210</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1754" y="1620" >C<title>3211</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1758" y="1644" >C<title>3212</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1769" y="1656" >A<title>3213</title> </text>
                <text x="1769" y="1656" >A<title>3213</title> </text>
                <line x1="1769" y1="1679.0" x2="1769" y2="1671.0" ><title>3213,3227</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1789" y="1656" >C<title>3214</title> </text>
                <text x="1789" y="1656" >C<title>3214</title> </text>
                <line x1="1789.33333333" y1="1668.66666667" x2="1789.66666667" y2="1681.33333333" ><title>3214,3226</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1810" y="1656" >C<title>3215</title> </text>
                <text x="1810" y="1656" >C<title>3215</title> </text>
                <line x1="1810" y1="1679.0" x2="1810" y2="1671.0" ><title>3215,3225</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1830" y="1656" >C<title>3216</title> </text>
                <text x="1830" y="1656" >C<title>3216</title> </text>
                <line x1="1830" y1="1679.0" x2="1830" y2="1671.0" ><title>3216,3224</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1846" y="1653" >A<title>3217</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1864" y="1650" >A<title>3218</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1881" y="1662" >G<title>3219</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1889" y="1678" >A<title>3220</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1880" y="1695" >A<title>3221</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1865" y="1703" >C<title>3222</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1846" y="1700" >A<title>3223</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1830" y="1694" >G<title>3224</title> </text>
                <text x="1830" y="1694" >G<title>3224</title> </text>
                <line x1="1830" y1="1679.0" x2="1830" y2="1671.0" ><title>3224,3216</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1810" y="1694" >G<title>3225</title> </text>
                <text x="1810" y="1694" >G<title>3225</title> </text>
                <line x1="1810" y1="1679.0" x2="1810" y2="1671.0" ><title>3225,3215</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1790" y="1694" >G<title>3226</title> </text>
                <text x="1790" y="1694" >G<title>3226</title> </text>
                <line x1="1789.66666667" y1="1681.33333333" x2="1789.33333333" y2="1668.66666667" ><title>3226,3214</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1769" y="1694" >T<title>3227</title> </text>
                <text x="1769" y="1694" >T<title>3227</title> </text>
                <line x1="1769" y1="1679.0" x2="1769" y2="1671.0" ><title>3227,3213</title> </line>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1755" y="1704" >T<title>3228</title> </text>
                <line x1="1170" y1="1018" x2="1762" y2="1018" strokeWidth='2' ><title>2452,2453</title> </line>
                <text x="1745" y="1715" >T<title>3229</title> </text>
            </svg>
        )
    }

}

export default Rrna2Zoom;