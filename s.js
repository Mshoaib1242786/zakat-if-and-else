function zakatCal(){
    let zakatAmount=document.getElementById('goldValue').value;
    if (zakatAmount>=7.5)
    {
        let totalZakat=zakatAmount*136000*0.025;
        document.getElementById('resultShowGold').innerText=totalZakat;
    }
    else
{
    document.getElementById('resultShowGold').innerText="NO ZAKAT";
    
}
}
function silverCal(){
    let silverAmount=document.getElementById('silverValue').value;
    if (silverAmount>=52.50)
    {
        let totalSilver=silverAmount*1630*0.025;
        document.getElementById('resultShowSilver').innerText=totalSilver;
    
    }
    else
    {
        document.getElementById('resultShowSilver').innerText="NO ZAKAT";
    }
}

function cashCal(){
    let cashAmount=document.getElementById('cashValue').value;
    if (cashAmount>=78900)
    {
        let totalCash=cashAmount*0.025;
        document.getElementById('resultShowCash').innerText=totalCash;
    }
    else
{
    document.getElementById('resultShowCash').innerText="NO ZAKAT";
    
}
}