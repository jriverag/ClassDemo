function GetOrders()
{
    var objajax = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    objajax.onreadystatechange = function()
        {
            if (objajax.readyState == 4 && objajax.status == 200)
            {
                var output = JSON.parse(objajax.responseText);
                GenerateOutput(output);
                
            }
        }
        objajax.open("GET", url, true);
        objajax.send();
}

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    for (count =0; count < result.GetOrdersForCustomerResult.length; count++)
    {
        displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " + result.GetOrdersForCustomerResult[count].OrderID + "<br>";
        
    }
    document.getElementById("orderdisplay").innerHTML = displaytext;
}