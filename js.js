let sharm = 15;
let hurgada = 25;
let taba = 6;

let userTickets = +prompt('число необходимых мест?', '');

if(userTickets!==Number.parseInt(userTickets)||userTickets<=0){
    alert('ошибка ввода')
} else{
    if(taba>=userTickets){
        let isTaba = confirm('есть место в группе taba');
        if (isTaba) {
            taba=taba-userTickets;
            alert('Приятного путешествия в группе taba');
        }
        else if(sharm>=userTickets){
            let isSharm = confirm('есть место в группе sharm');
            if(isSharm){
                sharm=sharm-userTickets;
                alert('Приятного путешествия в группе sharm');
            } else if(hurgada>=userTickets){
                let isHurgada = confirm('есть место в группе hurgada');
                if(isHurgada){
                    hurgada=hurgada-userTickets;
                    alert('Приятного путешествия в группе hurgada');
                } else alert('извините, мест нет')
            }
        }
    }
    else if(sharm>=userTickets){
        let isSharm = confirm('есть место в группе sharm');
        if(isSharm){
            sharm=sharm-userTickets;
            alert('Приятного путешествия в группе sharm');
        } else if(hurgada>=userTickets){
            let isHurgada = confirm('есть место в группе hurgada');
            if(isHurgada){
                hurgada=hurgada-userTickets;
                alert('Приятного путешествия в группе hurgada');
            } else alert('извините, мест нет')
        }
    }

    else if(hurgada>=userTickets){
        let isHurgada = confirm('есть место в группе hurgada');
        if(isHurgada){
            hurgada=hurgada-userTickets;
            alert('Приятного путешествия в группе hurgada');
        } else alert('извините, мест нет')
    }
    else alert('извините, мест нет')
}