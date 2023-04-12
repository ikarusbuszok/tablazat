export function rendezes(kulcs, adatLista, szuresiFeltetel){
    if (szuresiFeltetel ==""){
        return adatLista;
    
    } else {
    const szurtlista = adatLista.filter(function (elem){
        let szf = "";
        if (typeof elem[mit] === "number"){
            if (szuresiFeltetel[0] == "="){
                szf = "==" + szuresiFeltetel
            }else{
                szf = szuresiFeltetel;

            }
            return eval(elem[mit] + szf)
        }else{
            return elem[mit]
            .toUpperCase()
            .includes(SzuresiFeltetel.toUpperCase())

        }
    });
            }
            }

        

    

