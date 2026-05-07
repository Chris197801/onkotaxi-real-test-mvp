export const initialState = {
  rides: [{id:'OT-001',patient:'Jan Kowalski',caregiver:'Anna Kowalska',caregiverPhone:'+48 600 654 321',pickup:'ul. Leśna 10, Mielec',destination:'Centrum Onkologii, Rzeszów',date:'',time:'10:00',type:'PLANOWANY',status:'Zaplanowany',needsHelp:false,helpNote:'',driver:'Jan Nowak',vehicle:'Toyota RAV4 · RZ 1234A'}],
  drivers:[{name:'Jan Nowak',status:'Online',rating:'4.9',vehicle:'Toyota RAV4'},{name:'Piotr Wiśniewski',status:'Online',rating:'4.8',vehicle:'Toyota Corolla'}],
  ads:[{id:'AD1',name:'Toyota RAV4 Hybrid',placement:'Ekran główny',impressions:45378,clicks:1245,status:'Aktywna'},{id:'AD2',name:'Onkologia Razem',placement:'Rejestracja',impressions:22156,clicks:982,status:'Aktywna'}],
  sos:null
};
const KEY='onkotaxi_real_test_state';
export function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||initialState}catch{return initialState}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state));window.dispatchEvent(new Event('onkotaxi-state'))}
