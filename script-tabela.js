<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=5">
<meta name="theme-color" content="#0A3D91">
<title>Gerador de Orçamento</title>
<style>
:root{
 --az:#0A3D91;--az2:#1456C8;--ci:#1B87A8;--mg:#C4178C;--vm:#EC1C24;
 --bg:#F3F6FC;--cd:#fff;--tx:#14172B;--mu:#64708A;--bd:#DCE4F2;--ok:#17854B;--wn:#B45309;
 --sh:0 1px 2px rgba(16,30,70,.05),0 6px 20px rgba(16,30,70,.07);
 --r:14px;--ff:'Segoe UI',system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif;
 box-sizing:border-box}
*,*::before,*::after{box-sizing:inherit}
#ob{font-family:var(--ff);color:var(--tx);-webkit-font-smoothing:antialiased}
#ob button,#ob input,#ob select{font-family:inherit}
#ob button{-webkit-tap-highlight-color:transparent}

#obCta{background:linear-gradient(120deg,var(--az),#143A86 48%,var(--ci));color:#fff;padding:18px 20px}
.ctain{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.ctatx{flex:1;min-width:230px}
.ctatx b{display:block;font-size:17px;font-weight:800;letter-spacing:.2px}
.ctatx span{display:block;font-size:13px;opacity:.88;margin-top:3px}
.ctabt{display:inline-flex;align-items:center;gap:9px;background:#fff;color:var(--az);border:0;border-radius:11px;
 padding:14px 22px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.18);
 transition:transform .15s,box-shadow .15s}
.ctabt:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.26)}
.ctabt:active{transform:scale(.97)}
.ctabt svg{width:21px;height:21px}
@media(max-width:640px){.ctabt{width:100%;justify-content:center}}
/* Posição do balão. Para mudar, sobrescreva #obFab no CSS do seu site:
   canto esquerdo  → #obFab{left:20px;transform:none}
   canto direito   → #obFab{left:auto;right:20px;transform:none}
   mais alto       → #obFab{bottom:140px}
   O padrão é centro inferior, acima da faixa onde ficam os botões de chat. */
#obFab{position:fixed!important;left:50%;transform:translateX(-50%);bottom:96px;z-index:2147482000!important;
 display:inline-flex;align-items:center;justify-content:center;gap:10px;
 padding:15px 26px;border:0;cursor:pointer;border-radius:999px;color:#fff!important;font-size:15px;font-weight:700;
 background:#0A3D91;box-shadow:0 10px 30px rgba(10,61,145,.45);transition:transform .18s,box-shadow .18s;
 white-space:nowrap;max-width:calc(100vw - 28px)}
#obFab:hover{transform:translateX(-50%) translateY(-3px)}
#obFab:active{transform:translateX(-50%) scale(.97)}
#obFab svg{width:21px;height:21px;flex:none;stroke:#fff}
#obFab span.tx{color:#fff}
@media(max-width:640px){#obFab{bottom:86px;padding:13px 20px;font-size:14px}}

#obApp{position:fixed!important;inset:0;z-index:2147483000!important;background:var(--bg);display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}
#obApp.on{display:block!important;animation:up .28s ease}
@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.top{position:sticky;top:0;z-index:6;background:linear-gradient(120deg,var(--az),#143A86 48%,var(--ci));color:#fff;
 padding:13px 18px;padding-top:calc(13px + env(safe-area-inset-top,0px));display:flex;align-items:center;gap:10px}
.top .ti{font-weight:800;font-size:16px;letter-spacing:.3px;line-height:1.15}
.top .ti small{display:block;font-weight:500;font-size:11px;opacity:.85}
.top .sp{flex:1}
.topbt{display:flex;gap:7px;overflow-x:auto;max-width:100%;padding-bottom:2px}
.gh{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff;padding:9px 13px;
 border-radius:10px;cursor:pointer;font-size:13px;font-weight:600;white-space:nowrap}
.gh:hover{background:rgba(255,255,255,.26)}

.stps{display:flex;gap:6px;padding:14px 18px 2px;max-width:1200px;margin:0 auto;overflow-x:auto}
.stp{flex:1 0 128px;cursor:pointer;border:0;background:none;text-align:left;padding:0}
.stp .b{height:5px;border-radius:99px;background:#DFE6F3;margin-bottom:6px;overflow:hidden}
.stp .b i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--az),var(--ci));transition:width .4s}
.stp.dn .b i,.stp.nw .b i{width:100%}
.stp.nw .b i{background:linear-gradient(90deg,var(--mg),var(--vm))}
.stp b{font-size:10.5px;color:var(--mu);font-weight:800;letter-spacing:.3px;text-transform:uppercase}
.stp.nw b{color:var(--az)}
.stp span{display:block;font-size:12px;color:var(--mu)}
.stp.nw span{color:var(--tx);font-weight:600}

.wrap{max-width:1200px;margin:0 auto;padding:8px 18px 210px}
.pn{display:none;animation:fd .25s ease}.pn.on{display:block}
@keyframes fd{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
h2.tt{font-size:22px;margin:14px 0 4px}
p.sb{color:var(--mu);font-size:13.5px;margin:0 0 16px;line-height:1.55;max-width:880px}
.cd{background:var(--cd);border:1px solid var(--bd);border-radius:var(--r);padding:17px;box-shadow:var(--sh);margin-bottom:14px}
.gr{display:grid;gap:13px}
.g2{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}
label.f{display:block;font-size:11.5px;font-weight:800;color:var(--mu);margin-bottom:5px;text-transform:uppercase;letter-spacing:.4px}
input,select{width:100%;padding:12px;font-size:16px;border:1.5px solid var(--bd);border-radius:10px;
 color:var(--tx);background:#fff;transition:border-color .15s,box-shadow .15s}
input:focus,select:focus{outline:none;border-color:var(--az);box-shadow:0 0 0 3px rgba(10,61,145,.12)}
input[readonly]{background:#F3F6FC;color:var(--mu)}
input.bad{border-color:var(--vm);background:#FFF7F7}
input.good{border-color:var(--ok)}
.hint{font-size:11.5px;color:var(--mu);margin-top:5px;line-height:1.45}
.hint.er{color:var(--vm);font-weight:600}
.hint.ok{color:var(--ok);font-weight:600}
.ex{font-size:11px;color:var(--mu);background:#F3F6FC;border-radius:6px;padding:3px 7px;display:inline-block;margin-top:5px}

.hp{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:50%;background:var(--ci);color:#fff;
 font-size:11px;font-weight:800;cursor:pointer;margin-left:5px;position:relative;vertical-align:middle}
.hp .tp{display:none;position:absolute;left:50%;bottom:calc(100% + 9px);transform:translateX(-50%);width:262px;
 background:#14172B;color:#fff;padding:11px 13px;border-radius:10px;font-size:12px;font-weight:400;line-height:1.5;
 text-transform:none;letter-spacing:0;z-index:40;box-shadow:0 14px 40px rgba(0,0,0,.3)}
.hp.on .tp,.hp:hover .tp{display:block}
.hp .tp::after{content:'';position:absolute;top:100%;left:50%;margin-left:-6px;border:6px solid transparent;border-top-color:#14172B}

.ops{display:grid;gap:9px;grid-template-columns:repeat(auto-fit,minmax(168px,1fr))}
.op{border:2px solid var(--bd);border-radius:12px;padding:11px 12px;cursor:pointer;background:#fff;text-align:left;transition:all .15s}
.op:hover{border-color:var(--ci);transform:translateY(-2px)}
.op.sl{border-color:var(--az);background:linear-gradient(180deg,#F2F6FF,#fff);box-shadow:0 6px 18px rgba(10,61,145,.14)}
.op b{display:block;font-size:13px}
.op .fx{display:inline-block;margin:5px 0;font-size:11px;font-weight:800;color:#fff;background:var(--az);padding:2px 8px;border-radius:99px}
.op.sl .fx{background:var(--mg)}
.op small{display:block;color:var(--mu);font-size:11.5px;line-height:1.4}

/* stepper */
.stepper{display:flex;align-items:stretch;border:1.5px solid var(--bd);border-radius:10px;overflow:hidden;background:#fff}
.stepper:focus-within{border-color:var(--az);box-shadow:0 0 0 3px rgba(10,61,145,.12)}
.stepper input{border:0;border-radius:0;text-align:center;font-weight:700;box-shadow:none!important;flex:1 1 auto;
 min-width:60px;width:100%;padding:11px 2px;font-size:16px}
.stepper button{border:0;background:#EDF2FB;color:var(--az);width:40px;min-width:40px;font-size:20px;font-weight:700;
 cursor:pointer;flex:none;transition:background .12s;line-height:1}
.stepper button:hover{background:var(--az);color:#fff}
.stepper button:active{transform:scale(.94)}

/* chips de filtro */
.chips{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px}
.chip{border:1.5px solid var(--bd);background:#fff;border-radius:99px;padding:7px 14px;font-size:12.5px;font-weight:700;
 color:var(--mu);cursor:pointer;transition:all .14s}
.chip:hover{border-color:var(--ci);color:var(--ci)}
.chip.sl{background:var(--az);border-color:var(--az);color:#fff}

.sv{border:1.5px solid var(--bd);border-left:5px solid var(--az);border-radius:12px;padding:14px;margin-bottom:12px;
 background:#fff;box-shadow:var(--sh);animation:pop .25s ease}
@keyframes pop{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}
.sv.hr{border-left-color:var(--mg)}
.sv.er{border-color:var(--vm);background:#FFF8F8}
.sv .hd{display:flex;align-items:center;gap:9px;margin-bottom:12px}
.sv .nm{width:27px;height:27px;border-radius:8px;background:var(--az);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:800;flex:none}
.sv.hr .nm{background:var(--mg)}
.sv .hd .sp{flex:1}
.ic{border:1px solid var(--bd);background:#fff;border-radius:8px;width:32px;height:32px;cursor:pointer;color:var(--mu);font-size:14px;transition:all .14s}
.ic:hover{border-color:var(--az);color:var(--az);background:#F3F7FF}
.ic.dg:hover{border-color:var(--vm);color:var(--vm);background:#FFF5F5}
.seg{display:flex;border:1.5px solid var(--bd);border-radius:10px;overflow:hidden}
.seg button{flex:1;border:0;background:#fff;padding:11px 8px;font-size:13px;font-weight:700;color:var(--mu);cursor:pointer;transition:all .14s}
.seg button:hover{background:#F1F5FC}
.seg button.on{background:var(--az);color:#fff}
.seg button.on.m{background:var(--mg)}
.out{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px;padding-top:12px;border-top:1px dashed var(--bd);align-items:center}
.pl{font-size:11.5px;background:#EEF3FC;color:var(--az);padding:5px 10px;border-radius:99px;font-weight:700}
.pl.g{background:#E8F7EE;color:var(--ok)}.pl.r{background:#FDECEC;color:var(--vm)}.pl.y{background:#FEF5E0;color:var(--wn)}
.tt2{margin-left:auto;font-size:19px;font-weight:800;color:var(--az)}

.bt{border:0;border-radius:11px;padding:13px 19px;font-size:14px;font-weight:700;cursor:pointer;
 background:linear-gradient(135deg,var(--az),var(--az2));color:#fff;box-shadow:0 6px 18px rgba(10,61,145,.25);
 transition:transform .15s,box-shadow .15s;display:inline-flex;align-items:center;gap:8px}
.bt:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(10,61,145,.33)}
.bt:active{transform:translateY(0) scale(.98)}
.bt.sec{background:#fff;color:var(--az);border:1.5px solid var(--bd);box-shadow:none}
.bt.sec:hover{border-color:var(--az);background:#F6F9FF}
.bt.mg{background:linear-gradient(135deg,var(--mg),#E0439F)}
.bt.ok{background:linear-gradient(135deg,var(--ok),#1FA75F)}
.bt:disabled{opacity:.42;cursor:not-allowed;transform:none;box-shadow:none}
.bar{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:14px}

.ft{position:fixed;left:0;right:0;bottom:0;z-index:8;background:#fff;border-top:1px solid var(--bd);
 box-shadow:0 -6px 24px rgba(16,30,70,.10);padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px))}
.ft .in{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.ft .lb{display:block;font-size:10px;color:var(--mu);font-weight:800;text-transform:uppercase;letter-spacing:.5px;
 white-space:nowrap;margin-bottom:2px}
.ft .vl{font-size:22px;font-weight:800;color:var(--az);line-height:1.1;white-space:nowrap;letter-spacing:-.4px}
.fbox{min-width:0}
.fbox.fsm .vl{font-size:15px;font-weight:700;color:var(--mu)}
.fsep{width:1px;align-self:stretch;background:var(--bd);margin:2px 0}
.ft .sp{flex:1;min-width:10px}

.kp{display:grid;gap:11px;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));margin-bottom:14px}
.k{border-radius:var(--r);padding:14px 15px;color:#fff;box-shadow:var(--sh);position:relative;overflow:hidden}
.k::after{content:'';position:absolute;right:-26px;top:-26px;width:84px;height:84px;border-radius:50%;background:rgba(255,255,255,.12)}
.k b{display:block;font-size:10.5px;opacity:.9;font-weight:800;text-transform:uppercase;letter-spacing:.5px}
.k i{display:block;font-style:normal;font-size:24px;font-weight:800;margin-top:5px;letter-spacing:-.5px}
.k small{opacity:.85;font-size:11px}
.ch{width:100%;height:auto;display:block;overflow:visible}
table.tb{width:100%;border-collapse:collapse;font-size:13px}
table.tb th{background:var(--az);color:#fff;padding:10px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.4px}
table.tb th:last-child,table.tb td:last-child{text-align:right}
table.tb td{padding:9px 10px;border-bottom:1px solid var(--bd)}
table.tb tr:nth-child(even) td{background:#FAFBFE}
.h3{font-size:14.5px;font-weight:800;margin:0 0 11px;color:var(--az);display:flex;align-items:center;gap:8px}
.h3::before{content:'';width:4px;height:16px;border-radius:2px;background:linear-gradient(var(--az),var(--ci))}
.al{border-radius:11px;padding:12px 14px;font-size:13px;line-height:1.5;margin-bottom:13px}
.al.r{background:#FDECEC;border:1px solid #F7C5C5;color:#9B1C1C}
.al.y{background:#FEF7E6;border:1px solid #F5DEA8;color:#8A5B00}
.al.g{background:#E9F8EF;border:1px solid #BCE6CC;color:#14603A}
.lgbox{width:94px;height:94px;border:2px dashed var(--bd);border-radius:12px;display:grid;place-items:center;
 cursor:pointer;color:var(--mu);font-size:11px;text-align:center;overflow:hidden;background:#FAFCFF}
.lgbox img{width:100%;height:100%;object-fit:contain}
.toast{position:fixed;left:50%;bottom:92px;z-index:2147483200;transform:translateX(-50%) translateY(20px);background:#14172B;color:#fff;
 padding:12px 20px;border-radius:11px;font-size:13.5px;font-weight:600;opacity:0;pointer-events:none;
 transition:all .25s}
.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}

.mdl{position:fixed;inset:0;z-index:2147483100;background:rgba(10,20,45,.55);display:flex;align-items:flex-start;
 justify-content:center;padding:4vh 14px;overflow-y:auto;animation:fd .2s ease}
.mdlbox{background:var(--bg);border-radius:16px;max-width:900px;width:100%;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden}
.mdlhd{background:linear-gradient(120deg,var(--az),var(--ci));color:#fff;padding:15px 18px;display:flex;align-items:center;
 justify-content:space-between;font-size:16px;position:sticky;top:0;z-index:2}
.mdlhd .ic{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.3);color:#fff}
.mdlbd{padding:16px}
.hero{padding:6px 2px 16px}
.hero h2{font-size:25px;line-height:1.22;margin:0 0 7px;letter-spacing:-.4px}
.hero p{color:var(--mu);font-size:14px;line-height:1.55;margin:0;max-width:640px}
.mgrid{display:grid;gap:13px;grid-template-columns:repeat(auto-fit,minmax(255px,1fr));margin-bottom:16px}
.mcard{display:flex;flex-direction:column;align-items:flex-start;gap:7px;text-align:left;cursor:pointer;
 background:#fff;border:2px solid var(--bd);border-radius:16px;padding:19px 17px;box-shadow:var(--sh);
 transition:transform .16s,border-color .16s,box-shadow .16s}
.mcard:hover{transform:translateY(-4px);border-color:var(--ci);box-shadow:0 14px 34px rgba(16,30,70,.14)}
.mcard.sl{border-color:var(--az);background:linear-gradient(180deg,#F4F8FF,#fff);box-shadow:0 14px 34px rgba(10,61,145,.17)}
.mico{width:50px;height:50px;border-radius:14px;display:grid;place-items:center;font-size:25px;color:#fff;margin-bottom:3px}
.mtt{font-size:17px;font-weight:800;color:var(--tx);line-height:1.25}
.mok{color:var(--ok)}
.msb{font-size:13px;color:var(--mu);line-height:1.5}
.mls{display:flex;flex-direction:column;gap:5px;margin-top:7px;width:100%}
.mls i{font-style:normal;font-size:12.5px;color:var(--tx);padding-left:17px;position:relative;line-height:1.45}
.mls i::before{content:'';position:absolute;left:3px;top:7px;width:6px;height:6px;border-radius:50%;background:var(--ci)}
.pills{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px}
.pills span{font-size:11.5px;font-weight:700;color:var(--mu);background:#fff;border:1px solid var(--bd);
 border-radius:99px;padding:6px 12px}
@media(max-width:640px){.hero h2{font-size:21px}.mcard{padding:16px 14px}.mico{width:44px;height:44px;font-size:22px}}
#obPrt{display:none}
@media print{
 body>*{display:none!important}
 #obPrt{display:block!important;font-family:var(--ff);color:#000;font-size:11px}
 @page{size:A4 portrait;margin:14mm}
 .pg{page-break-after:always}.pg:last-child{page-break-after:auto}
 #obPrt h1{font-size:18px;margin:0;color:#0A3D91}
 #obPrt .hd{border-bottom:3px solid #0A3D91;padding-bottom:8px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-end;gap:14px}
 #obPrt .hd img{max-height:52px;max-width:150px;object-fit:contain}
 #obPrt table{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:12px}
 #obPrt th{background:#0A3D91;color:#fff;padding:6px;text-align:left}
 #obPrt td{padding:5px 6px;border-bottom:.5px solid #ccc}
 #obPrt .num{text-align:right}
 #obPrt .tot td{background:#0A3D91;color:#fff;font-weight:bold;font-size:12px}
 #obPrt .sub td{background:#E8EEF8;font-weight:bold}
 #obPrt .cond{font-size:9px;line-height:1.5;color:#333}
 #obPrt .car{border:1px solid #0A3D91;padding:10px;margin-top:26px;font-size:9.5px;line-height:1.5}
 #obPrt .sig{margin-top:36px;text-align:center}
}
@media (max-width:640px){
 .wrap{padding:6px 12px 160px}
 h2.tt{font-size:19px}
 .top{padding:11px 12px;padding-top:calc(11px + env(safe-area-inset-top,0px))}
 .top .ti small{display:none}
 .gh{padding:9px 10px;font-size:12px}
 #obFab{right:13px;bottom:13px;padding:14px 18px}
 .k i{font-size:20px}
 .ft .in{gap:12px;row-gap:9px}
 .ft .vl{font-size:19px}
 .fbox.fsm .vl{font-size:13.5px}
 .ft .lb{font-size:9px}
 .fsep{display:none}
 .fbox.fsm{padding-left:12px;border-left:1px solid var(--bd)}
 .bt{width:100%;justify-content:center}
 .bar .bt{width:100%}
 .ft .bt{width:auto;flex:1 1 44%;padding:12px 10px;font-size:13.5px}
 .ft .sp{flex-basis:100%;height:0}
 .stps{padding:12px 12px 2px}
 .stp{flex:0 0 112px}
 table.tb{font-size:12px}
 table.tb td,table.tb th{padding:7px 6px}
 .mdlbd{padding:11px}
}
</style>
</head>
<body>
<div id="ob">
 <div id="obCta">
  <div class="ctain">
   <div class="ctatx"><b>Gerador de Orçamento — projetos e obras</b>
    <span>Honorários de projeto e estimativa de execução, com proposta pronta em PDF, Word ou Excel.</span></div>
   <button class="ctabt" data-a="abrir">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
     <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h3M13 10h3M8 14h3M13 14h3M8 18h8"/></svg>
    Gerador de Orçamento</button>
  </div>
 </div>
 <button id="obFab" data-a="abrir"><span class="pl"></span>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
   <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h3M13 10h3M8 14h3M13 14h3M8 18h8"/></svg>
  <span class="tx">Gerador de Orçamento</span></button>

 <div id="obApp">
  <div class="top">
   <div class="ti" id="obTopTi">Gerador de Orçamento<small>Arquitetura · Engenharia · BIM</small></div>
   <span class="sp"></span>
   <div class="topbt">
    <button class="gh" data-a="novoTudo" title="Novo orçamento">✚ Novo</button>
    <button class="gh" data-a="mdBib">📁</button>
    <button class="gh" data-a="mdCfg">⚙</button>
    <button class="gh" data-a="baixar">Salvar</button>
    <button class="gh" data-a="fechar">✕</button>
   </div>
  </div>
  <div class="stps" id="obStps"></div>
  <div class="wrap" id="obPns"></div>
  <div class="ft"><div class="in">
    <div class="fbox"><span class="lb" id="obFL1">HONORÁRIOS DE PROJETO</span><div class="vl" id="obFT">R$ 0,00</div></div>
    <div class="fsep"></div>
    <div class="fbox fsm"><span class="lb" id="obFL2">SERVIÇOS</span><div class="vl" id="obFQ">0</div></div>
    <span class="sp"></span>
    <button class="bt sec" id="obBV" data-a="ir" data-v="-1">← Voltar</button>
    <button class="bt" id="obBS" data-a="ir" data-v="1">Continuar →</button>
  </div></div>
 </div>
 <div id="obMdl"></div>
 <div class="toast" id="obToast"></div>
</div>
<div id="obPrt"></div>

<script>
/* =======================================================================
   GERADOR DE ORÇAMENTO DE PROJETOS
   Base de preços: Tabela de Honorários CEHOP, referência 2026 (valores máximos).
   Tudo roda no navegador. Sem servidor, sem envio de dados.
   ======================================================================= */

/* [disciplina, serviço, tipo, unidade, faixaMin, faixaMax, preço, critério] */
const CAT = [["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Administrativos","Cadastro","m²",0.0,999999999.0,7.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Administrativos","Novo","m²",0.0,999999999.0,26.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Administrativos","Reforma","m²",0.0,999999999.0,28.6,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Educacionais","Cadastro","m²",0.0,999999999.0,7.2,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Educacionais","Novo","m²",0.0,999999999.0,24.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Educacionais","Reforma","m²",0.0,999999999.0,26.4,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Esportivos","Cadastro","m²",0.0,999999999.0,9.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Esportivos","Novo","m²",0.0,999999999.0,31.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Esportivos","Reforma","m²",0.0,999999999.0,34.7,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Quadras de Esporte","Cadastro","m²",0.0,999999999.0,5.9,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Quadras de Esporte","Novo","m²",0.0,999999999.0,19.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Quadras de Esporte","Reforma","m²",0.0,999999999.0,21.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Hospitalares e de Saúde","Cadastro","m²",0.0,999999999.0,10.9,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Hospitalares e de Saúde","Novo","m²",0.0,999999999.0,36.4,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios Hospitalares e de Saúde","Reforma","m²",0.0,999999999.0,40.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Prédios Industriais e Galpões","Cadastro","m²",0.0,999999999.0,3.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Prédios Industriais e Galpões","Novo","m²",0.0,999999999.0,12.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Prédios Industriais e Galpões","Reforma","m²",0.0,999999999.0,13.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios da Segurança Pública","Cadastro","m²",0.0,999999999.0,7.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios da Segurança Pública","Novo","m²",0.0,999999999.0,26.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Edifícios da Segurança Pública","Reforma","m²",0.0,999999999.0,28.6,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Penitenciárias e Presídios","Cadastro","m²",0.0,999999999.0,9.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Penitenciárias e Presídios","Novo","m²",0.0,999999999.0,31.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Penitenciárias e Presídios","Reforma","m²",0.0,999999999.0,34.7,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Teatros e Auditórios","Cadastro","m²",0.0,999999999.0,9.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Teatros e Auditórios","Novo","m²",0.0,999999999.0,32.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Teatros e Auditórios","Reforma","m²",0.0,999999999.0,35.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Centros de Convenções","Cadastro","m²",0.0,999999999.0,7.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Centros de Convenções","Novo","m²",0.0,999999999.0,26.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Centros de Convenções","Reforma","m²",0.0,999999999.0,28.6,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Parques e Praças","Cadastro","m²",0.0,999999999.0,0.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Parques e Praças","Novo","m²",0.0,999999999.0,2.5,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Parques e Praças","Reforma","m²",0.0,999999999.0,2.8,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Restaurações de Edif. Tombadas","Cadastro","m²",0.0,999999999.0,11.7,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Restaurações de Edif. Tombadas","Reforma","m²",0.0,999999999.0,39.0,""],["Edificação e urbanismo · Projeto de edificação — por tipologia","Acessibilidade","Reforma","m²",0.0,999999999.0,3.5,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em 2D (CAD) - tour 360º, sem instalações","OPÇÃO ÚNICA","m²",0.0,999999999.0,10.1,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em BIM - tour 360º, sem instalações","OPÇÃO ÚNICA","m²",0.0,999999999.0,13.7,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em BIM - tour 360º, sem instalações e quantitativos de materiais","OPÇÃO ÚNICA","m²",0.0,999999999.0,21.6,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em 2D (CAD) - tour 360º, com instalações","OPÇÃO ÚNICA","m²",0.0,999999999.0,14.4,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em BIM - tour 360º, com instalações","OPÇÃO ÚNICA","m²",0.0,999999999.0,18.0,""],["Edificação e urbanismo · Cadastro com Laser Scan","Em BIM - tour 360º, com instalações e quantitativos de materiais","OPÇÃO ÚNICA","m²",0.0,999999999.0,28.8,""],["Edificação e urbanismo · Projeto de edificação residencial","Residências com ou sem repetições","OPÇÃO ÚNICA","m²",0.0,999999999.0,22.0,"Ver regra de repetições em REGRAS_E_NOTAS"],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",0.0,2000.0,2.4,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",2000.01,5000.0,2.0,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",5000.01,10000.0,1.8,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",10000.01,20000.0,1.4,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",20000.01,30000.0,1.3,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",30000.01,40000.0,1.2,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Urbanização","Urbanização","OPÇÃO ÚNICA","m²",40000.0,999999999.0,1.1,"Praças, quadras, parques aquáticos, calçadões, cemitérios, feiras, estacionamentos, terminais, conjuntos habitacionais etc."],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",0.0,2000.0,3.6,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",2001.0,5000.0,2.9,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",5001.0,10000.0,2.6,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",10001.0,20000.0,2.0,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",20001.0,30000.0,1.4,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",30001.0,40000.0,0.9,"Cobrado pela área de intervenção botânica"],["Edificação e urbanismo · Paisagismo","Paisagismo","OPÇÃO ÚNICA","m²",40000.0,999999999.0,0.7,"Cobrado pela área de intervenção botânica"],["Instalações e estrutura · Fundações","Superficiais","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.7,"Área = projeção da construção. Blocos, sapatas, vigas, grelhas, radier etc."],["Instalações e estrutura · Fundações","Profunda","OPÇÃO ÚNICA","m²",0.0,999999999.0,10.4,"Área = projeção da construção. Tubulões, estacas, reforço de solo."],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edificações em Geral","Concreto Armado","m²",0.0,999999999.0,13.5,"Área = área construída"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edifícios Hospitalares e de Saúde","Concreto Armado","m²",0.0,999999999.0,16.6,"Área = área construída"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Penitenciárias e Presídios","Concreto Armado","m²",0.0,999999999.0,16.6,"Área = área construída"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Teatros, Auditórios, Centros de Convenções","Concreto Armado","m²",0.0,999999999.0,16.6,"Área = área construída"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edificações em Geral","Metálica/Madeira - Simples","m²",0.0,999999999.0,8.2,"Área = projeção (cobertura, marquise etc.)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edificações em Geral","Metálica/Madeira - Completa","m²",0.0,999999999.0,13.5,"Área = área construída (pilares, vigas e cobertura)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edificações em Geral","Metálica/Madeira - Espacial","m²",0.0,999999999.0,10.7,"Área = projeção"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edifícios Hospitalares e de Saúde","Metálica/Madeira - Simples","m²",0.0,999999999.0,8.2,"Área = projeção (cobertura, marquise etc.)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edifícios Hospitalares e de Saúde","Metálica/Madeira - Completa","m²",0.0,999999999.0,13.5,"Área = área construída (pilares, vigas e cobertura)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edifícios Hospitalares e de Saúde","Metálica/Madeira - Espacial","m²",0.0,999999999.0,10.7,"Área = projeção"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Penitenciárias e Presídios","Metálica/Madeira - Simples","m²",0.0,999999999.0,8.2,"Área = projeção (cobertura, marquise etc.)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Penitenciárias e Presídios","Metálica/Madeira - Completa","m²",0.0,999999999.0,13.5,"Área = área construída (pilares, vigas e cobertura)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Penitenciárias e Presídios","Metálica/Madeira - Espacial","m²",0.0,999999999.0,10.7,"Área = projeção"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Teatros, Auditórios, Centros de Convenções","Metálica/Madeira - Simples","m²",0.0,999999999.0,8.2,"Área = projeção (cobertura, marquise etc.)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Teatros, Auditórios, Centros de Convenções","Metálica/Madeira - Completa","m²",0.0,999999999.0,13.5,"Área = área construída (pilares, vigas e cobertura)"],["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Teatros, Auditórios, Centros de Convenções","Metálica/Madeira - Espacial","m²",0.0,999999999.0,10.7,"Área = projeção"],["Instalações e estrutura · Recuperação Estrutural","Recuperação estrutural com reforço","OPÇÃO ÚNICA","m²",0.0,999999999.0,15.6,"Área = área trabalhada"],["Instalações e estrutura · Instalações hidráulicas prediais","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.7,"Área = área construída. Água quente incluída."],["Instalações e estrutura · Esgoto sanitário predial","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.7,"Área = área construída"],["Instalações e estrutura · Drenagem pluvial da edificação","Edificações em Geral","Simples","m²",0.0,999999999.0,2.1,"Área = área de cobertura, incl. drenagem da climatização"],["Instalações e estrutura · Drenagem pluvial da edificação","Edificações em Geral","Reuso","m²",0.0,999999999.0,3.1,"Área = área de cobertura"],["Instalações e estrutura · Instalações hidráulicas prediais","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,5.2,"Área = área construída. Água quente incluída."],["Instalações e estrutura · Esgoto sanitário predial","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,5.2,"Área = área construída"],["Instalações e estrutura · Drenagem pluvial da edificação","Edifícios Hospitalares e de Saúde","Simples","m²",0.0,999999999.0,2.1,"Área = área de cobertura, incl. drenagem da climatização"],["Instalações e estrutura · Drenagem pluvial da edificação","Edifícios Hospitalares e de Saúde","Reuso","m²",0.0,999999999.0,3.1,"Área = área de cobertura"],["Instalações e estrutura · Instalações hidráulicas prediais","Penitenciárias e Presídios","OPÇÃO ÚNICA","m²",0.0,999999999.0,4.7,"Área = área construída. Água quente incluída."],["Instalações e estrutura · Esgoto sanitário predial","Penitenciárias e Presídios","OPÇÃO ÚNICA","m²",0.0,999999999.0,4.7,"Área = área construída"],["Instalações e estrutura · Drenagem pluvial da edificação","Penitenciárias e Presídios","Simples","m²",0.0,999999999.0,2.1,"Área = área de cobertura, incl. drenagem da climatização"],["Instalações e estrutura · Drenagem pluvial da edificação","Penitenciárias e Presídios","Reuso","m²",0.0,999999999.0,3.1,"Área = área de cobertura"],["Instalações e estrutura · Instalações hidráulicas prediais","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.7,"Área = área construída. Água quente incluída."],["Instalações e estrutura · Esgoto sanitário predial","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.7,"Área = área construída"],["Instalações e estrutura · Drenagem pluvial da edificação","Teatros, Auditórios, Centros de Convenções","Simples","m²",0.0,999999999.0,2.1,"Área = área de cobertura, incl. drenagem da climatização"],["Instalações e estrutura · Drenagem pluvial da edificação","Teatros, Auditórios, Centros de Convenções","Reuso","m²",0.0,999999999.0,3.1,"Área = área de cobertura"],["Instalações e estrutura · Irrigação","Área verde, jardins","OPÇÃO ÚNICA","m²",0.0,999999999.0,1.7,"Área irrigada"],["Instalações e estrutura · Irrigação","Campo CBF","OPÇÃO ÚNICA","m²",0.0,999999999.0,1.9,"Área irrigada"],["Instalações e estrutura · Irrigação","Campo FIFA","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.3,"Área irrigada"],["Instalações e estrutura · Incêndio e pânico — extintor, hidrante","Extintor","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.9,"Área = área construída. Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · Incêndio e pânico — extintor, hidrante","Extintor + hidrante","OPÇÃO ÚNICA","m²",0.0,999999999.0,5.7,"Área = área construída. Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · Incêndio e pânico — extintor, hidrante","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,6.2,"Área = área construída. Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · GLP / GN — gás liquefeito ou natural","Por unidade","OPÇÃO ÚNICA","un",0.0,999999999.0,1700.0,"Preço por unidade (não é por m²). Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · GLP / GN — gás liquefeito ou natural","Até 10 pontos","OPÇÃO ÚNICA","un",0.0,999999999.0,2300.0,"Preço por unidade (não é por m²). Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · GLP / GN — gás liquefeito ou natural","De 11 a 30 pontos","OPÇÃO ÚNICA","un",0.0,999999999.0,3000.0,"Preço por unidade (não é por m²). Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · GLP / GN — gás liquefeito ou natural","Acima de 31 pontos","OPÇÃO ÚNICA","un",0.0,999999999.0,3750.0,"Preço por unidade (não é por m²). Aprovado no Corpo de Bombeiros."],["Instalações e estrutura · PDA / SPDA — descargas atmosféricas","Relatório de análise do risco de exposição","OPÇÃO ÚNICA","un",0.0,999999999.0,1950.0,"Aprovado no Corpo de Bombeiros"],["Instalações e estrutura · PDA / SPDA — descargas atmosféricas","SPDA","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.1,"Área = área de cobertura. Só executa se o relatório de risco indicar necessidade."],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,8.8,"Área = área construída"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,12.5,"Área = área construída"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Iluminação de área externa","OPÇÃO ÚNICA","m²",0.0,999999999.0,1.15,"Itens 3, 5, 6 e 7 só são contratados individualmente para edificações existentes"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Iluminação artística (Luminotécnica)","OPÇÃO ÚNICA","m²",0.0,999999999.0,27.0,"Área = área construída"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Sistema de detecção de alarme de incêndio","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.3,"Itens 3, 5, 6 e 7 só são contratados individualmente para edificações existentes"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Gerador","OPÇÃO ÚNICA","un",0.0,999999999.0,4550.0,"Itens 3, 5, 6 e 7 só são contratados individualmente para edificações existentes"],["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Subestação","OPÇÃO ÚNICA","un",0.0,999999999.0,7480.0,"Itens 3, 5, 6 e 7 só são contratados individualmente para edificações existentes"],["Instalações e estrutura · Cabeamento estruturado — voz, dados, antena","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.6,"Área = área construída. Voz, dados e antena coletiva."],["Instalações e estrutura · CFTV — circuito fechado de TV","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Sonorização e áudio","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Climatização e exaustão","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,5.2,"Área = área construída"],["Instalações e estrutura · Cabeamento estruturado — voz, dados, antena","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,4.7,"Área = área construída. Voz, dados e antena coletiva."],["Instalações e estrutura · CFTV — circuito fechado de TV","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Sonorização e áudio","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Climatização e exaustão","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,7.3,"Área = área construída"],["Instalações e estrutura · Cabeamento estruturado — voz, dados, antena","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,3.6,"Área = área construída. Voz, dados e antena coletiva."],["Instalações e estrutura · CFTV — circuito fechado de TV","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Sonorização e áudio","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Área = área construída"],["Instalações e estrutura · Climatização e exaustão","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,6.2,"Área = área construída"],["Instalações e estrutura · Gases Medicinais (GM) — vácuo, ar comprimido, oxigênio, óxido nitroso","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Pacote: vácuo, ar comprimido, oxigênio e óxido nitroso"],["Instalações e estrutura · Tratamento Acústico","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,74.8,"Área = área contemplada"],["Instalações e estrutura · Comunicação Visual","Edificações em Geral","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.1,"Área = área construída, inclui a arte"],["Instalações e estrutura · Gases Medicinais (GM) — vácuo, ar comprimido, oxigênio, óxido nitroso","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Pacote: vácuo, ar comprimido, oxigênio e óxido nitroso"],["Instalações e estrutura · Tratamento Acústico","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,74.8,"Área = área contemplada"],["Instalações e estrutura · Comunicação Visual","Edifícios Hospitalares e de Saúde","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.1,"Área = área construída, inclui a arte"],["Instalações e estrutura · Gases Medicinais (GM) — vácuo, ar comprimido, oxigênio, óxido nitroso","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.0,"Pacote: vácuo, ar comprimido, oxigênio e óxido nitroso"],["Instalações e estrutura · Tratamento Acústico","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,74.8,"Área = área contemplada"],["Instalações e estrutura · Comunicação Visual","Teatros, Auditórios, Centros de Convenções","OPÇÃO ÚNICA","m²",0.0,999999999.0,2.1,"Área = área construída, inclui a arte"],["Instalações e estrutura · PGRSCC — resíduos sólidos da construção","De 0 a 1.500,00 m²","OPÇÃO ÚNICA","un",0.0,1500.0,1950.0,"Preço por unidade. Inclui RRT/ART."],["Instalações e estrutura · PGRSCC — resíduos sólidos da construção","Acima de 1.501,00 m²","OPÇÃO ÚNICA","un",1501.0,999999999.0,2600.0,"Preço por unidade. Inclui RRT/ART."],["Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias","Terraplenagem e Geométrico de Vias","OPÇÃO ÚNICA","m²",0.0,14000.0,1.0,"Área considerada: área do terreno. Com indicação de jazida."],["Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias","Terraplenagem e Geométrico de Vias","OPÇÃO ÚNICA","m²",14000.01,70000.0,0.9,"Área considerada: área do terreno. Com indicação de jazida."],["Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias","Terraplenagem e Geométrico de Vias","OPÇÃO ÚNICA","m²",70000.01,200000.0,0.8,"Área considerada: área do terreno. Com indicação de jazida."],["Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias","Terraplenagem e Geométrico de Vias","OPÇÃO ÚNICA","m²",200000.0,999999999.0,0.7,"Área considerada: área do terreno. Com indicação de jazida."],["Infraestrutura Áreas livres · Pavimentação","Pavimentação","OPÇÃO ÚNICA","m²",0.0,2500.0,1.6,"Área: ruas = 20% da área do terreno; praças e equipamentos = 15%"],["Infraestrutura Áreas livres · Pavimentação","Pavimentação","OPÇÃO ÚNICA","m²",2500.01,12000.0,1.4,"Área: ruas = 20% da área do terreno; praças e equipamentos = 15%"],["Infraestrutura Áreas livres · Pavimentação","Pavimentação","OPÇÃO ÚNICA","m²",12000.01,35000.0,1.2,"Área: ruas = 20% da área do terreno; praças e equipamentos = 15%"],["Infraestrutura Áreas livres · Pavimentação","Pavimentação","OPÇÃO ÚNICA","m²",35000.0,999999999.0,1.1,"Área: ruas = 20% da área do terreno; praças e equipamentos = 15%"],["Infraestrutura Áreas livres · Drenagem Pluvial","Simples - (Micro e Macrodrenagem)","Simples","m²",0.0,10000.0,0.7,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Simples - (Micro e Macrodrenagem)","Simples","m²",10000.01,50000.0,0.65,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Simples - (Micro e Macrodrenagem)","Simples","m²",50000.01,150000.0,0.6,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Simples - (Micro e Macrodrenagem)","Simples","m²",150000.0,999999999.0,0.5,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Complexa - (Micro e Macrodrenagem)","Complexa","m²",0.0,10000.0,1.1,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Complexa - (Micro e Macrodrenagem)","Complexa","m²",10000.01,50000.0,1.0,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Complexa - (Micro e Macrodrenagem)","Complexa","m²",50000.01,150000.0,0.9,""],["Infraestrutura Áreas livres · Drenagem Pluvial","Complexa - (Micro e Macrodrenagem)","Complexa","m²",150000.0,999999999.0,0.8,""],["Infraestrutura Áreas livres · Abastecimento de Água","Distribuição","OPÇÃO ÚNICA","m²",0.0,15000.0,0.8,""],["Infraestrutura Áreas livres · Abastecimento de Água","Distribuição","OPÇÃO ÚNICA","m²",15000.01,40000.0,0.7,""],["Infraestrutura Áreas livres · Abastecimento de Água","Distribuição","OPÇÃO ÚNICA","m²",40000.01,125000.0,0.6,""],["Infraestrutura Áreas livres · Abastecimento de Água","Distribuição","OPÇÃO ÚNICA","m²",125000.0,999999999.0,0.5,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Rede Condominial com Fossa e Filtro","OPÇÃO ÚNICA","m²",0.0,15000.0,0.7,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Rede Condominial com Fossa e Filtro","OPÇÃO ÚNICA","m²",15000.01,165000.0,0.65,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Rede Condominial com Fossa e Filtro","OPÇÃO ÚNICA","m²",165000.0,999999999.0,0.6,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Tratamento de Maior Complexidade / Elevatória","OPÇÃO ÚNICA","m²",0.0,15000.0,1.4,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Tratamento de Maior Complexidade / Elevatória","OPÇÃO ÚNICA","m²",15000.01,40000.0,1.3,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Tratamento de Maior Complexidade / Elevatória","OPÇÃO ÚNICA","m²",40000.01,125000.0,1.1,""],["Infraestrutura Áreas livres · Esgotos Sanitários","Tratamento de Maior Complexidade / Elevatória","OPÇÃO ÚNICA","m²",125000.0,999999999.0,1.0,""],["Infraestrutura Áreas livres · Rede Elétrica","Rede Elétrica","OPÇÃO ÚNICA","m²",0.0,13750.0,0.8,"Partidos urbanísticos: ruas = 15% da área do terreno; praças e equipamentos = 20%"],["Infraestrutura Áreas livres · Rede Elétrica","Rede Elétrica","OPÇÃO ÚNICA","m²",13750.01,41250.0,0.7,"Partidos urbanísticos: ruas = 15% da área do terreno; praças e equipamentos = 20%"],["Infraestrutura Áreas livres · Rede Elétrica","Rede Elétrica","OPÇÃO ÚNICA","m²",41250.01,123750.0,0.65,"Partidos urbanísticos: ruas = 15% da área do terreno; praças e equipamentos = 20%"],["Infraestrutura Áreas livres · Rede Elétrica","Rede Elétrica","OPÇÃO ÚNICA","m²",123750.01,999999999.0,0.6,"Partidos urbanísticos: ruas = 15% da área do terreno; praças e equipamentos = 20%"],["Infraestrutura Áreas livres · Estruturas de Contenção / Estabilidade de Taludes","Estruturas de Contenção / Estabilidade de Taludes","OPÇÃO ÚNICA","m²",0.0,3.0,18.2,"Área = desnível x comprimento longitudinal"],["Infraestrutura Áreas livres · Estruturas de Contenção / Estabilidade de Taludes","Estruturas de Contenção / Estabilidade de Taludes","OPÇÃO ÚNICA","m²",3.01,6.0,21.3,"Área = desnível x comprimento longitudinal"],["Infraestrutura Áreas livres · Estruturas de Contenção / Estabilidade de Taludes","Estruturas de Contenção / Estabilidade de Taludes","OPÇÃO ÚNICA","m²",6.01,999999999.0,25.4,"Área = desnível x comprimento longitudinal"],["Infraestrutura Vias de acesso · Terraplenagem e Geométrico de Vias","Terraplenagem e Geométrico de Vias","OPÇÃO ÚNICA","Km",0.0,999999999.0,10600.0,"Com indicação de jazida"],["Infraestrutura Vias de acesso · Pavimentação","Pavimentação","OPÇÃO ÚNICA","Km",0.0,999999999.0,6300.0,""],["Infraestrutura Vias de acesso · Drenagem Pluvial","Simples - (Micro: tubulações etc.)","Simples","Km",0.0,999999999.0,6300.0,""],["Infraestrutura Vias de acesso · Drenagem Pluvial","Complexa - (Macrodrenagem: canais, galerias etc.)","Complexa","Km",0.0,999999999.0,11800.0,""],["Infraestrutura Vias de acesso · Alimentação de Água","Alimentação de Água","OPÇÃO ÚNICA","Km",0.0,999999999.0,6300.0,""],["Infraestrutura Vias de acesso · Esgotos Sanitários","Tratamento de Maior Complexidade / Elevatória","OPÇÃO ÚNICA","Km",0.0,999999999.0,11800.0,""],["Infraestrutura Vias de acesso · Rede Elétrica","Rede Elétrica","OPÇÃO ÚNICA","Km",0.0,999999999.0,5400.0,""],["Infraestrutura Vias de acesso · Rede Elétrica","Alimentador (energia)","OPÇÃO ÚNICA","Km",0.0,999999999.0,6314.0,""],["Infraestrutura Vias de acesso · Projeto Estrutural do Canal de Macrodrenagem","Projeto Estrutural do Canal de Macrodrenagem","OPÇÃO ÚNICA","m",0.0,999999999.0,15.6,""],["Infraestrutura Vias de acesso · Sinalização Vertical e Horizontal","Projeto de Sinalização Vertical e Horizontal","OPÇÃO ÚNICA","Km",0.0,999999999.0,3100.0,""],["Infraestrutura Vias de acesso · Cadastramento de Infraestrutura","Cadastramento de Infraestrutura","OPÇÃO ÚNICA","Km",0.0,999999999.0,5400.0,"Inclui rede de água, energia, drenagem, gás, telefone e outros existentes"],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Mobilização e desmobilização de pessoal e equipamentos (área concentrada)","Em Aracaju","un",0.0,999999999.0,2650.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Mobilização e desmobilização de pessoal e equipamentos (área concentrada)","Até 30 km de Aracaju","un",0.0,999999999.0,3370.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Mobilização e desmobilização de pessoal e equipamentos (área concentrada)","De 31 a 60 km de Aracaju","un",0.0,999999999.0,4040.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Mobilização e desmobilização de pessoal e equipamentos (área concentrada)","De 61 a 100 km de Aracaju","un",0.0,999999999.0,4600.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Mobilização e desmobilização de pessoal e equipamentos (área concentrada)","Maior que 100 km de Aracaju","un",0.0,999999999.0,5600.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Deslocamento entre furos, em mesma área","De 30 até 100 m","un",0.0,999999999.0,420.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Deslocamento entre furos, em mesma área","De 101 até 500 m","un",0.0,999999999.0,560.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Deslocamento entre furos, em mesma área","De 501 até 2000 m","un",0.0,999999999.0,1400.0,""],["Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)","Por metro linear de sondagem","OPÇÃO ÚNICA","m",0.0,999999999.0,170.0,"Mínimo 20,45 m por furo; mínimo de 03 furos"],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Mobilização de pessoal e equipamentos","Em Aracaju","un",0.0,999999999.0,1900.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Mobilização de pessoal e equipamentos","Até 30 km de Aracaju","un",0.0,999999999.0,2580.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Mobilização de pessoal e equipamentos","De 31 a 60 km de Aracaju","un",0.0,999999999.0,3100.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Mobilização de pessoal e equipamentos","De 61 a 100 km de Aracaju","un",0.0,999999999.0,3500.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Mobilização de pessoal e equipamentos","Maior que 100 km de Aracaju","un",0.0,999999999.0,4700.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Deslocamento entre furos, em mesma área","De 30 até 100 m","un",0.0,999999999.0,220.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Deslocamento entre furos, em mesma área","De 101 até 500 m","un",0.0,999999999.0,390.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Deslocamento entre furos, em mesma área","De 501 até 2000 m","un",0.0,999999999.0,600.0,""],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Poço de visita","OPÇÃO ÚNICA","m",0.0,999999999.0,390.0,"Considerar mínimo de 03 furos"],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Trado","OPÇÃO ÚNICA","m",0.0,999999999.0,110.0,"Considerar mínimo de 03 furos"],["Sondagem e solos · Sondagem a Trado e/ou Poço de Visita","Por cada determinação da taxa de percolação","OPÇÃO ÚNICA","un",0.0,999999999.0,1560.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Granulometria por peneiramento","OPÇÃO ÚNICA","un",0.0,999999999.0,189.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Granulometria combinada (peneiramento + sedimentação)","OPÇÃO ÚNICA","un",0.0,999999999.0,703.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Limite de liquidez","OPÇÃO ÚNICA","un",0.0,999999999.0,186.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Limite de plasticidade","OPÇÃO ÚNICA","un",0.0,999999999.0,186.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Compactação proctor normal/intermediário","OPÇÃO ÚNICA","un",0.0,999999999.0,245.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Índice de suporte califórnia","OPÇÃO ÚNICA","un",0.0,999999999.0,319.0,""],["Sondagem e solos · Ensaios de Laboratório","Ensaios de solo - Equivalente de areia","OPÇÃO ÚNICA","un",0.0,999999999.0,198.0,""],["Sondagem e solos · Estudo de Jazidas","Mobilização de pessoal e equipamentos","Em Aracaju","un",0.0,999999999.0,6280.0,""],["Sondagem e solos · Estudo de Jazidas","Mobilização de pessoal e equipamentos","Até 30 km de Aracaju","un",0.0,999999999.0,6600.0,""],["Sondagem e solos · Estudo de Jazidas","Mobilização de pessoal e equipamentos","De 31 a 60 km de Aracaju","un",0.0,999999999.0,6700.0,""],["Sondagem e solos · Estudo de Jazidas","Mobilização de pessoal e equipamentos","De 61 a 100 km de Aracaju","un",0.0,999999999.0,7200.0,""],["Sondagem e solos · Estudo de Jazidas","Mobilização de pessoal e equipamentos","Maior que 100 km de Aracaju","un",0.0,999999999.0,8400.0,""],["Sondagem e solos · Estudo de Jazidas","Sondagem a trado","OPÇÃO ÚNICA","m",0.0,999999999.0,112.0,""],["Sondagem e solos · Estudo de Jazidas","Emissão de relatório técnico de caracterização de jazida","OPÇÃO ÚNICA","un",0.0,999999999.0,4150.0,""],["Topografia e cadastro · Levantamento Planialtimétrico Semi-Cadastral de Vias","Levantamento Planialtimétrico Semi-Cadastral de Vias","OPÇÃO ÚNICA","km",0.0,999999999.0,5216.0,""],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",0.0,10000.0,0.43,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",10000.0,50000.0,0.37,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",50000.0,100000.0,0.31,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",100000.0,250000.0,0.22,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",250000.0,500000.0,0.17,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",500000.0,999999999.0,0.12,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",0.0,10000.0,0.2,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",10000.0,50000.0,0.17,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",50000.0,100000.0,0.15,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",100000.0,250000.0,0.12,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",250000.0,500000.0,0.09,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","Lev. Topográfico Planimétrico Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",500000.0,999999999.0,0.07,"Faturamento mínimo de 0,50 ha"],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",0.0,10000.0,0.81,""],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",10000.0,50000.0,0.71,""],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",50000.0,100000.0,0.58,""],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",100000.0,250000.0,0.47,""],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",250000.0,500000.0,0.36,""],["Topografia e cadastro · Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","Lev. Topográfico Batimétrico e Semi-Cadastral de Áreas","OPÇÃO ÚNICA","m²",500000.0,999999999.0,0.25,""],["Topografia e cadastro · Transporte de Coordenadas e Altitude","Transporte de Coordenadas","OPÇÃO ÚNICA","Km",0.0,999999999.0,1426.0,""],["Topografia e cadastro · Transporte de Coordenadas e Altitude","Transporte de Altitude","OPÇÃO ÚNICA","Km",0.0,999999999.0,2129.0,""],["Topografia e cadastro · Implantação de Marcos de Concreto","Implantação de Marcos de Concreto","OPÇÃO ÚNICA","un",0.0,999999999.0,82.0,""],["Topografia e cadastro · Equipe Topográfica de Campo Completa","Equipe Topográfica de Campo Completa com Equipamento","OPÇÃO ÚNICA","Diária",0.0,999999999.0,2044.0,""],["Topografia e cadastro · Equipe Topográfica de Campo Completa","Equipe Topográfica de Campo Completa com Equipamento e Escritório com Processamento e Desenho","OPÇÃO ÚNICA","Diária",0.0,999999999.0,2427.0,""],["Topografia e cadastro · Deslocamento de Equipe","Até 50 Km da capital","OPÇÃO ÚNICA","un",0.0,999999999.0,0.0,"Não incide"],["Topografia e cadastro · Deslocamento de Equipe","Acima de 50 Km da capital","OPÇÃO ÚNICA","un",0.0,999999999.0,2108.0,""],["Topografia e cadastro · Elaboração de Planta de Locação","Obras de infraestrutura","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.17,""],["Topografia e cadastro · Elaboração de Planta de Locação","Obras civis","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.45,""],["Topografia e cadastro · Lev. Planialtimétrico Semi-Cadastral de Áreas de Invasão/Risco e Vegetação Densa","Lev. Planialtimétrico Semi Cadastral de Áreas de Invasão e/ou de Risco (encostas, brejos etc.) e Áreas com Vegetação Densa","OPÇÃO ÚNICA","m²",0.0,10000.0,0.9,""],["Topografia e cadastro · Lev. Planialtimétrico Semi-Cadastral de Áreas de Invasão/Risco e Vegetação Densa","Lev. Planialtimétrico Semi Cadastral de Áreas de Invasão e/ou de Risco (encostas, brejos etc.) e Áreas com Vegetação Densa","OPÇÃO ÚNICA","m²",10000.0,50000.0,0.8,""],["Topografia e cadastro · Lev. Planialtimétrico Semi-Cadastral de Áreas de Invasão/Risco e Vegetação Densa","Lev. Planialtimétrico Semi Cadastral de Áreas de Invasão e/ou de Risco (encostas, brejos etc.) e Áreas com Vegetação Densa","OPÇÃO ÚNICA","m²",100000.0,999999999.0,0.7,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",0.0,1.0,1033.0,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",1.0,5.0,905.0,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",5.01,10.0,777.0,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",10.01,25.0,639.0,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",25.01,50.0,511.0,""],["Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²","Cadastro Imobiliário Individual para fins de regularização (exclusive cadastro arquitetônico)","OPÇÃO ÚNICA","lote",50.0,999999999.0,383.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",0.0,1.0,596.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",1.0,5.0,511.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",5.01,10.0,449.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",10.01,25.0,373.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",25.01,50.0,298.0,""],["Topografia e cadastro · Cadastro Social / Coleta de Documentação","Cadastro Social / Coleta de Documentação","OPÇÃO ÚNICA","lote",50.0,999999999.0,224.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",0.0,1.0,341.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",1.0,5.0,298.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",5.01,10.0,255.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",10.01,25.0,213.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",25.01,50.0,170.0,""],["Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê","Elaboração de planta individual, memorial descritivo e dossiê contendo cadastro social/documental","OPÇÃO ÚNICA","lote",50.0,999999999.0,138.0,""],["Orçamento e custos · Orçamento - Edificações","Edificações em Geral","Novo","m²",0.0,999999999.0,6.0,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Edificações em Geral","Reforma","m²",0.0,999999999.0,7.2,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Edifícios Hospitalares e de Saúde","Novo","m²",0.0,999999999.0,8.0,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Edifícios Hospitalares e de Saúde","Reforma","m²",0.0,999999999.0,9.6,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Restaurações de Edificações Tombadas","Reforma","m²",0.0,999999999.0,10.5,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Acessibilidade","Novo","m²",0.0,999999999.0,2.0,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento - Edificações","Acessibilidade","Reforma","m²",0.0,999999999.0,2.4,"Valor mínimo: R$ 3.116,00"],["Orçamento e custos · Orçamento dos Quantitativos de Projetos","Fundação","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.47,"Valor mínimo: R$ 1.579,00. Só pago se não contratado o orçamento completo (com arquitetura)."],["Orçamento e custos · Orçamento dos Quantitativos de Projetos","Estrutural","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.68,"Valor mínimo: R$ 1.579,00. Só pago se não contratado o orçamento completo (com arquitetura)."],["Orçamento e custos · Orçamento dos Quantitativos de Projetos","Elétrico","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.99,"Valor mínimo: R$ 1.579,00. Só pago se não contratado o orçamento completo (com arquitetura)."],["Orçamento e custos · Orçamento dos Quantitativos de Projetos","Hidráulico, Sanitário, Drenagem, Incêndio, Gás, PDA, Cabeamento Estruturado","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.36,"Valor mínimo: R$ 1.579,00. Só pago se não contratado o orçamento completo (com arquitetura)."],["Orçamento e custos · Orçamento dos Quantitativos de Projetos","Sonorização, CFTV, Climatização, Gases Medicinais, Chamada de Enfermeira","OPÇÃO ÚNICA","m²",0.0,999999999.0,0.26,"Valor mínimo: R$ 1.579,00. Só pago se não contratado o orçamento completo (com arquitetura)."],["Orçamento e custos · Infraestrutura e Urbanização","Infraestrutura e Urbanização","OPÇÃO ÚNICA","m²",0.0,10000.0,0.9,"Valor mínimo: R$ 1.246,00"],["Orçamento e custos · Infraestrutura e Urbanização","Infraestrutura e Urbanização","OPÇÃO ÚNICA","m²",10001.0,30000.0,0.8,"Valor mínimo: R$ 1.246,00"],["Orçamento e custos · Infraestrutura e Urbanização","Infraestrutura e Urbanização","OPÇÃO ÚNICA","m²",30001.0,999999999.0,0.7,"Valor mínimo: R$ 1.246,00"]];
const CIDADES = {"AC":["Rio Branco","Cruzeiro do Sul","Sena Madureira"],"AL":["Maceió","Arapiraca","Palmeira dos Índios","Rio Largo"],"AM":["Manaus","Parintins","Itacoatiara","Manacapuru"],"AP":["Macapá","Santana","Laranjal do Jari"],"BA":["Salvador","Feira de Santana","Vitória da Conquista","Camaçari","Juazeiro","Ilhéus","Itabuna","Barreiras"],"CE":["Fortaleza","Caucaia","Juazeiro do Norte","Maracanaú","Sobral","Crato"],"DF":["Brasília","Taguatinga","Ceilândia","Gama"],"ES":["Vitória","Vila Velha","Serra","Cariacica","Linhares","Colatina"],"GO":["Goiânia","Aparecida de Goiânia","Anápolis","Rio Verde","Luziânia"],"MA":["São Luís","Imperatriz","Timon","Caxias","Codó"],"MG":["Belo Horizonte","Uberlândia","Contagem","Juiz de Fora","Betim","Montes Claros","Uberaba","Governador Valadares"],"MS":["Campo Grande","Dourados","Três Lagoas","Corumbá"],"MT":["Cuiabá","Várzea Grande","Rondonópolis","Sinop"],"PA":["Belém","Ananindeua","Santarém","Marabá","Castanhal","Parauapebas"],"PB":["João Pessoa","Campina Grande","Santa Rita","Patos"],"PE":["Recife","Jaboatão dos Guararapes","Olinda","Caruaru","Petrolina","Paulista"],"PI":["Teresina","Parnaíba","Picos","Floriano"],"PR":["Curitiba","Londrina","Maringá","Ponta Grossa","Cascavel","São José dos Pinhais","Foz do Iguaçu"],"RJ":["Rio de Janeiro","São Gonçalo","Duque de Caxias","Nova Iguaçu","Niterói","Campos dos Goytacazes","Petrópolis","Volta Redonda"],"RN":["Natal","Mossoró","Parnamirim","São Gonçalo do Amarante"],"RO":["Porto Velho","Ji-Paraná","Ariquemes","Vilhena"],"RR":["Boa Vista","Rorainópolis","Caracaraí"],"RS":["Porto Alegre","Caxias do Sul","Pelotas","Canoas","Santa Maria","Gravataí","Novo Hamburgo"],"SC":["Florianópolis","Joinville","Blumenau","São José","Chapecó","Itajaí","Criciúma"],"SE":["Aracaju","Nossa Senhora do Socorro","Lagarto","Itabaiana","São Cristóvão","Estância"],"SP":["São Paulo","Guarulhos","Campinas","São Bernardo do Campo","Santo André","Osasco","Ribeirão Preto","Sorocaba","Santos","São José dos Campos"],"TO":["Palmas","Araguaína","Gurupi","Porto Nacional"]};


/* CUB R8-N (residencial multifamiliar, padrão normal) por UF — R$/m².
   Referência de set/2026, compilada de publicações dos Sinduscons estaduais.
   É VALOR DE REFERÊNCIA e muda todo mês: confira no Sinduscon do seu estado e edite nas configurações. */

/* Parâmetros de estimativa de obra de infraestrutura.
   São referências de mercado para ordem de grandeza, EDITÁVEIS — não substituem
   orçamento analítico com composições SINAPI/SICRO. */

/* ============ ESTIMATIVA DE EXECUÇÃO DE OBRA ============
   Nada aqui tem relação com honorários de projeto. São dois orçamentos distintos:
   o projeto é serviço técnico; a obra é execução. */

/* Etapas da obra: participação no custo e repartição em MATERIAL · MÃO DE OBRA · EQUIPAMENTO.
   [nome, % do custo, % material, % equipamento] — a mão de obra é o que sobra.
   Equipamento é escavadeira, rolo, caminhão, usina, guindaste, bomba, fôrma e andaime:
   pesa pouco em edificação e muito em terraplenagem e pavimentação. */
const ETAPAS_OBRA={
 edif:[
  ["Serviços preliminares e canteiro",0.030,0.35,0.12],["Fundações",0.080,0.45,0.18],
  ["Estrutura",0.175,0.55,0.09],["Alvenaria e vedações",0.095,0.42,0.03],
  ["Cobertura",0.050,0.58,0.04],["Instalações hidrossanitárias",0.060,0.55,0.02],
  ["Instalações elétricas e dados",0.070,0.55,0.02],["Esquadrias e vidros",0.070,0.75,0.02],
  ["Revestimentos de parede e teto",0.120,0.40,0.03],["Pisos e pavimentações",0.075,0.52,0.03],
  ["Pintura",0.055,0.35,0.02],["Louças, metais e bancadas",0.035,0.78,0.01],
  ["Limpeza, ligações e entrega",0.027,0.30,0.10]],
 lote:[
  ["Mobilização e canteiro",0.035,0.28,0.17],["Terraplenagem e geométrico",0.175,0.22,0.42],
  ["Drenagem pluvial",0.155,0.50,0.16],["Pavimentação e meios-fios",0.265,0.52,0.22],
  ["Rede de água",0.075,0.58,0.08],["Rede de esgoto",0.095,0.55,0.11],
  ["Rede elétrica e iluminação",0.120,0.62,0.06],["Paisagismo e áreas comuns",0.055,0.45,0.07],
  ["Sinalização e entrega",0.025,0.62,0.07]],
 rod:[
  ["Mobilização e canteiro",0.040,0.26,0.20],["Desmatamento e limpeza",0.030,0.08,0.45],
  ["Terraplenagem",0.290,0.18,0.46],["Drenagem e obras de arte correntes",0.190,0.50,0.17],
  ["Pavimentação — base e sub-base",0.160,0.48,0.26],["Pavimentação — revestimento",0.165,0.60,0.21],
  ["Sinalização horizontal e vertical",0.070,0.64,0.08],["Obras complementares e entrega",0.055,0.45,0.12]]};

/* Regime previdenciário da obra. A Lei 8.212/91 define a contribuição patronal sobre
   a folha; a Lei 12.546/11 permite, para parte da construção civil, a CPRB sobre a
   receita bruta. O regime correto depende do CNAE e do enquadramento — confirme com a contabilidade. */
const REGIMES_INSS=[
 ["Sobre a folha — 28,8%",0.288,'folha',"INSS patronal 20% + RAT 3% + terceiros 5,8%. Incide sobre a mão de obra."],
 ["Sobre a folha — 26,8%",0.268,'folha',"Com RAT reduzido por FAP favorável (1%)."],
 ["CPRB — 4,5% da receita",0.045,'receita',"Desoneração da folha: incide sobre a receita bruta da obra, não sobre o salário."],
 ["Obra por empreitada — sem encargo direto",0,'nenhum',"Quando a construtora assume o encargo. Confira a retenção de 11% na nota."]];
const INFRA_EST={
 lote:[["Urbanização simples",120,"terraplenagem leve, via de saibro ou bloquete, drenagem superficial"],
       ["Urbanização padrão",190,"pavimentação asfáltica, drenagem, água, esgoto e rede elétrica"],
       ["Urbanização completa",280,"tudo acima mais iluminação, paisagismo, calçadas acessíveis e rede enterrada"]],
 rod:[["Via urbana / acesso simples",1800000,"pista simples, pavimento flexível, drenagem superficial"],
      ["Rodovia pista simples",3200000,"terraplenagem, base, revestimento, drenagem e sinalização"],
      ["Rodovia pista dupla",6500000,"duplicação com obras de arte correntes"]]};
const CUB={AC:2480,AL:2310,AM:2460,AP:2520,BA:2390,CE:2270,DF:2424,ES:2540,GO:2430,MA:2280,
 MG:2490,MS:2470,MT:2510,PA:2360,PB:2300,PE:2260,PI:2240,PR:2420,RJ:2560,RN:2290,RO:2450,
 RR:2530,RS:2600,SC:2520,SE:2250,SP:2239,TO:2400};
/* Padrão construtivo: nome, fator sobre o CUB R8-N, descrição */
const PADROES=[["Popular / baixo",0.78,"Acabamento simples, vão pequeno, sem elevador"],
 ["Normal / médio",1.00,"É o próprio R8-N: acabamento corrente de mercado"],
 ["Alto padrão",1.28,"Acabamento superior, mais área de circulação e instalações"]];
/* Composição típica do CUB. Despesas administrativas entram no total mas não são obra física. */
const COMPOSICAO=[["Materiais",0.55],["Mão de obra com encargos",0.38],["Despesas administrativas",0.07]];
/* O CUB NÃO cobre: fundações, elevadores, instalações especiais, paisagismo,
   muros, ligações de concessionária, projetos, terreno e impostos da incorporação. */
/* Preço de venda da hora, em reais. Referência de mercado de projeto para 2026.
   No modo "já sei quanto cobro" é o valor cobrado do cliente.
   No modo "me ajude a calcular" o campo passa a receber o salário mensal. */
const FUNCOES=[["Coordenador / Gerente BIM",285],["Arquiteto / Engenheiro Sênior",240],
 ["Arquiteto / Engenheiro Pleno",175],["Projetista Júnior",115],["Modelador BIM",140],
 ["Orçamentista",170],["Desenhista / Cadista",98],["Estagiário",55],["Administrativo / Aprovações",85]];
/* A dificuldade vem do PROJETO, não da tipologia: uma residência de alto padrão com
   geometria livre pode ser mais difícil que um prédio repetitivo. Os critérios abaixo
   descrevem o esforço, e qualquer tipo de obra pode cair em qualquer nível. */
const NIVEIS=[
 ["Nível 1 — Muito simples",0.80,"Geometria repetitiva, poucas disciplinas, sem instalação especial, aprovação em um órgão só."],
 ["Nível 2 — Simples",0.90,"Programa conhecido ou projeto padrão, soluções correntes, pouca interferência entre disciplinas."],
 ["Nível 3 — Média",1.00,"Programa específico, todas as disciplinas convencionais, aprovação em mais de um órgão."],
 ["Nível 4 — Alta",1.30,"Instalações especiais, norma setorial rígida, geometria livre ou interferência densa entre disciplinas."],
 ["Nível 5 — Muito alta",1.60,"Patrimônio tombado, obra em funcionamento, processo industrial, ou projeto autoral de alta exigência."]];
/* LOD = quanto de informação o modelo carrega. Cada nível acrescenta detalhe,
   verificação e responsabilidade — por isso consome mais horas. */
/* LOD é o quanto de informação o MODELO carrega — não tem relação com o tipo de obra.
   Qualquer tipologia pode ser contratada em qualquer LOD. */
const LODS=[
 ["LOD 100 — Conceitual",0.70,"Massas e volumes. Mostra onde fica, que tamanho tem e quanto ocupa. Não serve para executar nem para orçar com precisão.","▢"],
 ["LOD 200 — Aproximado",0.85,"Elementos genéricos com tamanho e posição aproximados: existe a parede, a laje, o duto, mas sem detalhe construtivo.","▤"],
 ["LOD 300 — Preciso",1.00,"Geometria, posição e especificação exatas; quantitativo confiável. É o nível que a obra executa e o padrão do projeto executivo.","▦"],
 ["LOD 350 — Com interfaces",1.20,"O 300 mais as conexões entre disciplinas: furos de passagem, suportes, encaixes. É o que permite compatibilizar de verdade.","▩"],
 ["LOD 400 — Fabricação",1.45,"Detalhe de produção: cada peça com corte, solda, parafuso e sequência de montagem. Para o que é fabricado fora e chega pronto.","▣"],
 ["LOD 500 — As-built",1.70,"Modelo conferido em campo, com o que foi realmente construído e os dados de operação e manutenção do empreendimento.","✓"]];

/* Tipos de edificação: rótulo, serviço de arquitetura na tabela, serviço das disciplinas
   de engenharia (a tabela diferencia só 4 grupos), disciplinas extras e exemplos. */
const TIPOS=[
 {id:'res1',nome:'Residência unifamiliar',arq:'Residências com ou sem repetições',discArq:'Edificação e urbanismo · Projeto de edificação residencial',
  eng:'Edificações em Geral',ex:'casa térrea ou sobrado, lote urbano',
  extras:['glp'],inc:'Extintor'},
 {id:'resm',nome:'Edifício residencial',arq:'Residências com ou sem repetições',discArq:'Edificação e urbanismo · Projeto de edificação residencial',
  eng:'Edificações em Geral',ex:'prédio de apartamentos, conjunto habitacional',
  extras:['glp','cftv','cab','spda','elev'],inc:'Extintor + hidrante'},
 {id:'com',nome:'Comercial / administrativo',arq:'Edifícios Administrativos',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edificações em Geral',ex:'escritório, loja, agência, sede administrativa',
  extras:['clima','cab','cftv','son','cvis','spda'],inc:'Extintor + hidrante'},
 {id:'edu',nome:'Educacional',arq:'Edifícios Educacionais',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edificações em Geral',ex:'escola, creche, centro de formação',
  extras:['clima','cab','cftv','son','glp','spda'],inc:'Extintor + hidrante'},
 {id:'sau',nome:'Saúde',arq:'Edifícios Hospitalares e de Saúde',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edifícios Hospitalares e de Saúde',ex:'UBS, UPA, clínica, hospital',
  extras:['clima','gases','cab','cftv','son','cvis','spda','ger'],inc:'Edifícios Hospitalares e de Saúde'},
 {id:'cul',nome:'Cultural / eventos',arq:'Teatros e Auditórios',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Teatros, Auditórios, Centros de Convenções',ex:'teatro, auditório, centro de convenções',
  extras:['clima','acus','son','cab','cftv','spda'],inc:'Extintor + hidrante'},
 {id:'ind',nome:'Industrial / galpão',arq:'Prédios Industriais e Galpões',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edificações em Geral',ex:'galpão, depósito, centro de distribuição',
  extras:['spda','cftv'],inc:'Extintor + hidrante',estrutura:'Metálica/Madeira - Completa'},
 {id:'esp',nome:'Esportivo',arq:'Edifícios Esportivos',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edificações em Geral',ex:'ginásio, quadra coberta, complexo esportivo',
  extras:['son','spda','irrig'],inc:'Extintor + hidrante'},
 {id:'seg',nome:'Segurança pública',arq:'Edifícios da Segurança Pública',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Edificações em Geral',ex:'delegacia, batalhão, posto policial',
  extras:['clima','cab','cftv','spda'],inc:'Extintor + hidrante'},
 {id:'pen',nome:'Penitenciário',arq:'Penitenciárias e Presídios',discArq:'Edificação e urbanismo · Projeto de edificação — por tipologia',
  eng:'Penitenciárias e Presídios',ex:'unidade prisional, centro socioeducativo',
  extras:['clima','cab','cftv','spda','ger'],inc:'Extintor + hidrante'}];

/* Disciplinas extras: id → [disciplina, serviço (ou null = usa o do tipo), unidade de quantidade] */
const EXTRAS={
 clima:['Instalações e estrutura · Climatização e exaustão',null,'constr'],
 gases:['Instalações e estrutura · Gases Medicinais (GM) — vácuo, ar comprimido, oxigênio, óxido nitroso',null,'constr'],
 cab:['Instalações e estrutura · Cabeamento estruturado — voz, dados, antena',null,'constr'],
 cftv:['Instalações e estrutura · CFTV — circuito fechado de TV',null,'constr'],
 son:['Instalações e estrutura · Sonorização e áudio',null,'constr'],
 acus:['Instalações e estrutura · Tratamento Acústico',null,'constr'],
 cvis:['Instalações e estrutura · Comunicação Visual',null,'constr'],
 glp:['Instalações e estrutura · GLP / GN — gás liquefeito ou natural','Até 10 pontos','un'],
 spda:['Instalações e estrutura · PDA / SPDA — descargas atmosféricas','Relatório de análise do risco de exposição','un'],
 ger:['Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica','Gerador','un'],
 elev:null, irrig:['Instalações e estrutura · Irrigação','Área verde, jardins','terr']};
/* Grupos por OBJETO do serviço, não por profissão: arquitetos e engenheiros
   atuam nos dois campos conforme suas atribuições no CAU e no CREA. */
/* Capítulos pelo OBJETO do serviço. Arquitetos e engenheiros, cada um conforme suas
   atribuições no CAU ou no CREA, atuam em qualquer um deles — a ferramenta não reserva
   capítulo a profissão nenhuma. */
const GRUPOS=[["TODAS","Tudo"],["Edificação e urbanismo","Edificação e urbanismo"],
 ["Instalações e estrutura","Instalações e estrutura"],["Infraestrutura","Infraestrutura e vias"],
 ["Sondagem e solos","Sondagem e solos"],["Topografia e cadastro","Topografia e cadastro"],
 ["Orçamento e custos","Orçamento e custos"]];
const ETAPAS_INFRA=[
 ["1. Levantamento e cadastro da gleba",.12,"Assinatura do contrato"],
 ["2. Concepção urbanística / traçado",.18,"Aprovação do partido urbanístico"],
 ["3. Projeto geométrico e terraplenagem",.16,"Aprovação do geométrico"],
 ["4. Redes: drenagem, água, esgoto e energia",.22,"Entrega das redes"],
 ["5. Aprovação na prefeitura e concessionárias",.12,"Protocolo e anuências"],
 ["6. Memoriais e documentação do parcelamento",.10,"Entrega dos memoriais por lote"],
 ["7. Orçamento e cronograma de obra",.07,"Entrega do caderno"],
 ["8. Entrega final e registro",.03,"Aceite final"]];
const ETAPAS=[["1. Levantamento e programa",.10,7,"Assinatura do contrato"],
 ["2. Estudo preliminar",.15,10,"Aprovação do partido"],["3. Anteprojeto",.20,15,"Aprovação do anteprojeto"],
 ["4. Projeto legal",.10,20,"Protocolo nos órgãos"],["5. Projetos executivos",.25,30,"Entrega dos executivos"],
 ["6. Compatibilização BIM",.10,10,"Relatório final"],["7. Orçamento e memoriais",.07,10,"Entrega do caderno"],
 ["8. Entrega e as-built",.03,5,"Aceite final"]];
const CONDICOES=[
 "Os serviços cobrados por quantidade têm por referência a Tabela de Honorários de Projetos, Consultorias e Serviços de Engenharia — CEHOP, Referência Ano 2026, que fixa os valores máximos admitidos.",
 "Os serviços cobrados por carga horária são remunerados pelas horas efetivamente empregadas, nas funções e valores indicados, com apontamento à disposição do contratante.",
 "A compatibilização BIM compreende modelo federado, rodadas de detecção de interferências, relatórios e reuniões de resolução.",
 "Os preços incluem lucro, impostos, encargos, plotagem e encadernações. Projetos elaborados em BIM — Building Information Modeling.",
 "Entrega em 03 vias encadernadas em espiral e arquivos digitais em 02 pendrives, com RRT e/ou ART assinadas digitalmente.",
 "Cada etapa se inicia após o aceite formal da anterior. O prazo fica suspenso enquanto se aguarda aprovação do contratante ou de órgãos públicos.",
 "Alterações de escopo após o aceite do anteprojeto são orçadas por carga horária e formalizadas em termo aditivo.",
 "Não estão inclusos: taxas públicas não previstas, ensaios adicionais e serviços de terceiros não listados.",
 "A nota fiscal é emitida a cada marco de pagamento atingido."];
const PACOTES={
 edif:{itens:[["Edificação e urbanismo · Projeto de edificação — por tipologia",null,"Novo"],["Instalações e estrutura · Fundações","Superficiais","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · Estrutura (concreto, metálica ou madeira)","Edificações em Geral","Concreto Armado"],["Instalações e estrutura · Instalações hidráulicas prediais","Edificações em Geral","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · Esgoto sanitário predial","Edificações em Geral","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica","Edificações em Geral","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · Incêndio e pânico — extintor, hidrante","Extintor + hidrante","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · Climatização e exaustão","Edificações em Geral","OPÇÃO ÚNICA"],
  ["Instalações e estrutura · PGRSCC — resíduos sólidos da construção","De 0 a 1.500,00 m²","OPÇÃO ÚNICA"],
  ["Orçamento e custos · Orçamento - Edificações","Edificações em Geral","Novo"]]},
 infra:{itens:[["Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias",null,"OPÇÃO ÚNICA"],
  ["Infraestrutura Áreas livres · Pavimentação",null,"OPÇÃO ÚNICA"],
  ["Infraestrutura Áreas livres · Drenagem Pluvial","Simples - (Micro e Macrodrenagem)","Simples"],
  ["Infraestrutura Áreas livres · Rede Elétrica",null,"OPÇÃO ÚNICA"]]},
 gestao:{hora:true,itens:[["Coordenação e gerenciamento BIM","Coordenador / Gerente BIM",40],
  ["Acompanhamento de obra — 12 visitas de 4 h","Arquiteto / Engenheiro Pleno",48],
  ["Protocolo e acompanhamento nos órgãos","Administrativo / Aprovações",24]]}};

/* ===== estado ===== */
const hoje=new Date();
const dBR=d=>String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear();
let S={
 emp:{tipo:"PJ",nome:"",cnpj:"",resp:"",reg:"",fone:"",email:"",site:"",end:"",logo:""},
 cli:{tipo:"PJ",nome:"",doc:"",cep:"",uf:"",cid:"",bairro:"",end:"",contato:"",email:"",fone:""},
 objeto:"",prop:"PROP-"+hoje.getFullYear()+"-001",data:dBR(hoje),validade:30,
 nivel:2,lod:2,areaConstr:0,areaTerr:0,
 itens:[],filtro:"TODAS",busca:"",
 compMetodo:0,compPct:.12,compM2:3.20,
 compHoras:[["Montagem do modelo federado e regras","Modelador BIM",16],
  ["Rodada 1 — detecção, relatório e reunião","Coordenador / Gerente BIM",12],
  ["Rodada 2 — reverificação após correções","Coordenador / Gerente BIM",8],
  ["Rodada 3 — verificação final","Coordenador / Gerente BIM",8],
  ["Ajustes nos modelos das disciplinas","Modelador BIM",24],
  ["Relatório final e entrega do federado","Coordenador / Gerente BIM",6]],
 horaModo:'direto',encargos:1.60,horasPessoa:150,salarios:[],mult:3.0,imposto:.06,retencao:0,desconto:0,margemAlvo:.25,fixoMes:18000,horasMes:640,lodNaTabela:false,
 custos:[["ART / RRT e taxas de aprovação",600],["Plotagem, encadernação e pendrives",450],
  ["Deslocamento, diárias e hospedagem",800],["Projetistas / consultores terceirizados",3000],
  ["Sondagem, topografia ou ensaios de terceiros",0],["Outros custos diretos",0]],
 etapas:ETAPAS.map(e=>e.slice()),etapasAuto:true,custoObra:0,passo:0,
 modo:'',             /* 'projeto' | 'obra' | 'ambos' */
 escopo:'edif',       /* 'edif' | 'infra' | 'ambos' */
 terreno:{valorM2:0,total:0,vendaLote:0,vendaM2:0},
 obra:{regime:0,bdi:0.1418,bdiComp:{},precoComBDI:true,puTP:[],extras:[],desoneraRet:false,unitEdif:0,unitLote:0,unitRod:0},
 tipoInfra:'lote',    /* 'lote' | 'urb' | 'rod' */
 gestao:false, levant:false,
 tipoEdif:'com',quer:{estim:false},
 lote:{area:0,pViario:20,pVerde:15,pInst:5,lw:12,lp:30,lotes:0,cond:false,larguraVia:12},
 rod:{km:0,pista:7,drenCompl:false,sinal:true,jazida:true},
 cubUF:'',cubVal:0,cubPadrao:1,cubExtra:.18,cubAuto:true,
 infraPadrao:1,infraVal:0,rodPadrao:1,rodVal:0};

/* ===== utilidades ===== */
const $=s=>document.querySelector(s);
const fmt=n=>(isFinite(n)?n:0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const brl=n=>'R$ '+fmt(n);
const pc=n=>((isFinite(n)?n:0)*100).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})+'%';
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=v=>{if(typeof v==='number')return isFinite(v)?v:0;let t=String(v==null?'':v).trim();if(!t)return 0;if(t.indexOf(',')>=0)t=t.replace(/\./g,'').replace(',','.');else if(/^\d{1,3}(\.\d{3})+$/.test(t))t=t.replace(/\./g,'');const n=parseFloat(t);return isFinite(n)?n:0};
const fNiv=()=>NIVEIS[S.nivel][1], fLod=()=>LODS[S.lod][1];
/* 'direto'    → o número digitado JÁ é o preço cobrado por hora.
   'calcular'  → o número digitado é o salário mensal; o preço sai da conta:
                 (salário × encargos ÷ horas produtivas) × multiplicador. */
function precoHora(i){const f=FUNCOES[i]; if(!f)return 0;
 if(S.horaModo==='direto')return num(f[1]);
 const custo=custoHoraFn(i); return custo*num(S.mult)}
function custoHoraFn(i){const f=FUNCOES[i]; if(!f)return 0;
 const hp=num(S.horasPessoa)||150;
 return (num(f[1])*num(S.encargos))/hp}
const vHora=f=>{const i=FUNCOES.findIndex(y=>y[0]===f);return i<0?0:Math.round(precoHora(i))};

const DISCIPLINAS=[...new Set(CAT.map(r=>r[0]))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
const servicosDe=d=>[...new Set(CAT.filter(r=>r[0]===d).map(r=>r[1]))];
const tiposDe=(d,s)=>[...new Set(CAT.filter(r=>r[0]===d&&r[1]===s).map(r=>r[2]))];
const linhasDe=(d,s,t)=>CAT.filter(r=>r[0]===d&&r[1]===s&&r[2]===t);
/* Unidades que uma disciplina ou serviço usa — a mesma disciplina pode ter m² e km. */
const unsDe=(d,sv)=>[...new Set(CAT.filter(r=>r[0]===d&&(!sv||r[1]===sv)).map(r=>r[3]))];
const rotUn=u=>u.join(' · ');
const achaFaixa=(d,s,t,q)=>linhasDe(d,s,t).find(r=>q>=r[4]&&q<=r[5])||null;
const rotFaixa=r=>(r[4]<=0&&r[5]>=999999999)?'Preço único':(r[4]<=0?'até '+fmt(r[5]):(r[5]>=999999999?'acima de '+fmt(r[4]):fmt(r[4])+' a '+fmt(r[5])));
/* O capítulo é o prefixo antes do '·'; 'Infraestrutura Áreas livres' e
   'Infraestrutura Vias de acesso' contam como o mesmo capítulo. */
const grupoDe=d=>{const p=(d.split('·')[0]||'').trim();
 return p.indexOf('Infraestrutura')===0?'Infraestrutura':p};

/* ===== validação de documentos ===== */
function soDig(v){return String(v||'').replace(/\D/g,'')}
function mascaraCPF(v){const d=soDig(v).slice(0,11);
 return d.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d{1,2})$/,'.$1-$2')}
function mascaraCNPJ(v){const d=soDig(v).slice(0,14);
 return d.replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3')
         .replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d{1,2})$/,'$1-$2')}
function validaCPF(v){const c=soDig(v);if(c.length!==11||/^(\d)\1{10}$/.test(c))return false;
 let s=0;for(let i=0;i<9;i++)s+=+c[i]*(10-i);let d1=(s*10)%11;if(d1===10)d1=0;if(d1!==+c[9])return false;
 s=0;for(let i=0;i<10;i++)s+=+c[i]*(11-i);let d2=(s*10)%11;if(d2===10)d2=0;return d2===+c[10]}
function validaCNPJ(v){const c=soDig(v);if(c.length!==14||/^(\d)\1{13}$/.test(c))return false;
 const calc=n=>{let p=n===12?[5,4,3,2,9,8,7,6,5,4,3,2]:[6,5,4,3,2,9,8,7,6,5,4,3,2];
  let s=0;for(let i=0;i<n;i++)s+=+c[i]*p[i];const r=s%11;return r<2?0:11-r};
 return calc(12)===+c[12]&&calc(13)===+c[13]}
function validaDoc(tipo,v){const c=soDig(v);if(!c)return{ok:null,msg:''};
 if(tipo==='PF')return c.length<11?{ok:null,msg:'Faltam '+(11-c.length)+' dígitos — o CPF tem 11'}
   :(validaCPF(v)?{ok:true,msg:'CPF válido'}:{ok:false,msg:'CPF inválido — confira os dígitos'});
 return c.length<14?{ok:null,msg:'Faltam '+(14-c.length)+' dígitos — o CNPJ tem 14'}
   :(validaCNPJ(v)?{ok:true,msg:'CNPJ válido'}:{ok:false,msg:'CNPJ inválido — confira os dígitos'})}

/* Busca de CEP nos Correios via ViaCEP. Sem chave, sem cadastro.
   Se o site estiver offline ou o CEP não existir, o usuário digita à mão. */
function mascaraCEP(v){const d=soDig(v).slice(0,8);return d.replace(/^(\d{5})(\d)/,'$1-$2')}
async function buscaCEP(cep){
 const c=soDig(cep); if(c.length!==8)return null;
 /* Duas fontes: se uma estiver fora do ar ou bloqueada, tenta a outra. */
 const fontes=[
  {url:'https://viacep.com.br/ws/'+c+'/json/',
   le:j=>j.erro?null:{uf:j.uf||'',cid:j.localidade||'',bairro:j.bairro||'',end:j.logradouro||''}},
  {url:'https://brasilapi.com.br/api/cep/v1/'+c,
   le:j=>j.state?{uf:j.state,cid:j.city||'',bairro:j.neighborhood||'',end:j.street||''}:null}];
 for(const f of fontes){
  try{const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),6000);
   const r=await fetch(f.url,{signal:ctrl.signal}); clearTimeout(t);
   if(!r.ok)continue; const j=await r.json(); const d=f.le(j); if(d)return d}
  catch(e){}
 }
 return null}

/* Consulta pública de CNPJ na base da Receita Federal.
   Duas fontes gratuitas e sem cadastro; se a primeira falhar, tenta a segunda. */
async function buscaCNPJ(doc){
 const c=soDig(doc); if(c.length!==14)return null;
 const fontes=[
  {url:'https://brasilapi.com.br/api/cnpj/v1/'+c, le:j=>!j.razao_social?null:{
    nome:j.razao_social, fantasia:j.nome_fantasia||'',
    end:[j.descricao_tipo_de_logradouro,j.logradouro,j.numero].filter(Boolean).join(' ')+(j.complemento?', '+j.complemento:''),
    bairro:j.bairro||'', cid:j.municipio||'', uf:j.uf||'', cep:j.cep?mascaraCEP(j.cep):'',
    fone:j.ddd_telefone_1?mascaraFone(j.ddd_telefone_1):'', email:j.email||'',
    situacao:j.descricao_situacao_cadastral||''}},
  {url:'https://minhareceita.org/'+c, le:j=>!j.razao_social?null:{
    nome:j.razao_social, fantasia:j.nome_fantasia||'',
    end:[j.descricao_tipo_de_logradouro,j.logradouro,j.numero].filter(Boolean).join(' '),
    bairro:j.bairro||'', cid:j.municipio||'', uf:j.uf||'', cep:j.cep?mascaraCEP(j.cep):'',
    fone:j.ddd_telefone_1?mascaraFone(j.ddd_telefone_1):'', email:j.email||'',
    situacao:j.descricao_situacao_cadastral||''}}];
 for(const f of fontes){
  try{const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),8000);
   const r=await fetch(f.url,{signal:ctrl.signal}); clearTimeout(t);
   if(!r.ok)continue; const j=await r.json(); const d=f.le(j); if(d)return d}
  catch(e){}}
 return null}

/* Preenche o bloco do cliente ou do emissor com os dados da Receita. */
function aplicaCNPJ(alvo,d){
 const o=alvo==='emp'?S.emp:S.cli;
 if(!o.nome)o.nome=d.nome;
 if(alvo==='emp'){
  if(!o.end)o.end=[d.end,d.bairro,d.cid&&(d.cid+'/'+d.uf)].filter(Boolean).join(' — ');
  if(!o.fone&&d.fone)o.fone=d.fone;
  if(!o.email&&d.email)o.email=d.email.toLowerCase();
 }else{
  if(!o.end)o.end=d.end; if(!o.bairro)o.bairro=d.bairro;
  if(!o.cid)o.cid=d.cid; if(!o.uf)o.uf=d.uf; if(!o.cep&&d.cep)o.cep=d.cep;
  if(!o.fone&&d.fone)o.fone=d.fone;
  if(!o.email&&d.email)o.email=d.email.toLowerCase();
 }
 OB.persist();OB.render();
 OB.toast(d.nome.slice(0,42)+(d.situacao&&d.situacao!=='ATIVA'?(' — situação '+d.situacao):''))}
function mascaraFone(v){const d=soDig(v).slice(0,11);
 if(d.length<=10)return d.replace(/^(\d{2})(\d)/,'($1) $2').replace(/(\d{4})(\d{1,4})$/,'$1-$2');
 return d.replace(/^(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{1,4})$/,'$1-$2')}
const validaEmail=v=>!v?null:/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);

/* ===== cálculo ===== */
function calcItem(it){
 if(it.modo==='hora'){const vh=vHora(it.funcao);
  return{un:'hora',preco:vh,sub:vh*num(it.qtd)*fNiv()*fLod(),
   faixa:'Hora × compl. '+fNiv().toFixed(2)+' × LOD '+fLod().toFixed(2),crit:'',
   erro:!it.funcao?'Escolha quem vai executar':(num(it.qtd)<=0?'Informe as horas':'')}}
 const linhas=linhasDe(it.disc,it.serv,it.tipo), un=linhas.length?linhas[0][3]:'';
 if(!it.disc)return{un:'',preco:0,sub:0,faixa:'—',crit:'',erro:'Escolha a disciplina'};
 if(!it.serv)return{un:'',preco:0,sub:0,faixa:'—',crit:'',erro:'Escolha o serviço'};
 if(!it.tipo)return{un,preco:0,sub:0,faixa:'—',crit:'',erro:'Escolha o tipo'};
 const q=num(it.qtd), r=achaFaixa(it.disc,it.serv,it.tipo,q);
 if(!r)return{un,preco:0,sub:0,faixa:'—',crit:'',
   erro:q>0?('Quantidade fora das faixas. Este serviço é cobrado por '+un):'Informe a quantidade em '+un};
 const fl=S.lodNaTabela?fLod():1;
 return{un:r[3],preco:r[6],sub:r[6]*q*(it.ajuste==null?1:it.ajuste)*fl,faixa:rotFaixa(r),crit:r[7],erro:''}}
function compatVals(){
 const base=S.itens.filter(i=>i.modo!=='hora').reduce((a,i)=>a+calcItem(i).sub,0);
 return[base*S.compPct*fNiv()*fLod(),
        num(S.areaConstr)*S.compM2*fNiv()*fLod(),
        S.compHoras.reduce((a,h)=>a+vHora(h[1])*num(h[2]),0)*fNiv()*fLod()]}
function calc(){
 let tab=0,hora=0,horas=0,erros=0;
 S.itens.forEach(i=>{const c=calcItem(i);if(c.erro)erros++;
  if(i.modo==='hora'){hora+=c.sub;horas+=num(i.qtd)}else tab+=c.sub});
 const comp=compatVals()[S.compMetodo],bruto=tab+hora+comp,desc=bruto*S.desconto,liq=bruto-desc;
 const imp=liq*S.imposto,chE=S.horasMes?S.fixoMes/S.horasMes:0,fixo=chE*horas;
 const dir=S.custos.reduce((a,c)=>a+num(c[1]),0),lucro=liq-imp-fixo-dir;
 return{tab,hora,horas,comp,bruto,desc,liq,imp,fixo,diretos:dir,lucro,erros,
  margem:liq?lucro/liq:0,ret:liq*S.retencao,custoHoraEsc:chE,porDisc:porDisc()}}
function porDisc(){const m={};
 S.itens.forEach(i=>{if(!i.disc)return;const c=calcItem(i);m[i.disc]=m[i.disc]||{v:0,h:0};
  m[i.disc].v+=c.sub;if(i.modo==='hora')m[i.disc].h+=num(i.qtd)});
 return Object.entries(m).map(([k,v])=>({nome:k,curto:(k.split('·')[1]||k).trim(),...v})).sort((a,b)=>b.v-a.v)}
function estObra(){
 const uf=S.cubUF||S.cli.uf||'';
 const base=num(S.cubVal)>0?num(S.cubVal):(CUB[uf]||0);
 const f=PADROES[S.cubPadrao][1], unit=base*f;
 const a=num(S.areaConstr), bruto=unit*a, extra=bruto*num(S.cubExtra), total=bruto+extra;
 return{uf,base,unit,area:a,bruto,extra,total,
  comp:COMPOSICAO.map(c=>({k:c[0],v:bruto*c[1],p:c[1]}))}}
function estInfra(){
 if(S.escopo==='edif')return null;
 if(S.tipoInfra==='rod'){
  const p=INFRA_EST.rod[S.rodPadrao], unit=num(S.rodVal)>0?num(S.rodVal):p[1], km=num(S.rod.km);
  const fx=num(S.rod.pista)>8?1.25:1;  /* pista mais larga encarece proporcionalmente */
  return{tipo:'rod',rot:p[0],unit:unit*fx,qt:km,un:'km',total:unit*fx*km,
   comp:[["Terraplenagem e obras de terra",0.32],["Pavimentação",0.34],["Drenagem e obras de arte",0.22],
         ["Sinalização e segurança viária",0.07],["Canteiro e mobilização",0.05]]}}
 const p=INFRA_EST.lote[S.infraPadrao], unit=num(S.infraVal)>0?num(S.infraVal):p[1], a=num(S.lote.area);
 return{tipo:'lote',rot:p[0],unit,qt:a,un:'m² de gleba',total:unit*a,
  comp:[["Terraplenagem",0.18],["Pavimentação e calçadas",0.30],["Drenagem",0.16],
        ["Água e esgoto",0.17],["Rede elétrica e iluminação",0.13],["Paisagismo e áreas comuns",0.06]]}}


/* ===== QUANTITATIVOS FÍSICOS DE TERRAPLENAGEM E PAVIMENTAÇÃO =====
   Fórmulas conferidas contra um orçamento sintético real de condomínio
   (SINAPI 08/2026 — PA): extensão viária 1.020 m, pista 7.555,20 m²,
   calçada 3.060 m², meio-fio 2.040 m. Cada linha traz o critério usado. */
const PARAM_TP={
 esp_corte:0.3125,    /* limpeza e corte superficial sobre toda a caixa de via (m) */
 esp_aterro:0.4536,   /* aterro médio sobre toda a caixa de via (m) */
 empol:1.30,          /* empolamento do material removido */
 fluencia:1.20,       /* fluência/compactação do aterro */
 esp_base:0.163,      /* base compactada (m) */
 esp_subbase:0.163,   /* sub-base compactada (m) */
 perda_base:1.25,
 demaos_imprim:2, perda_imprim:1.10,
 esp_cbuq:0.05,       /* duas camadas de 2,5 cm */
 dens_cbuq:2.40, perda_cbuq:1.10,
 larg_passeio:1.50, esp_passeio:0.05, perda_passeio:1.10,
 perda_meiofio:1.10, faixas_pintura:3};
/* Preços unitários COM BDI, de referência. Ajuste pelo SINAPI do seu estado e mês. */
const PRECOS_TP=[
 ["Remoção de material de 1ª categoria, DMT 6 km","m³",11.65,"corte"],
 ["Argila/barro para aterro com transporte até 10 km","m³",65.55,"aterro"],
 ["Compactação de camada final de aterro, 100% PN","m³",40.00,"aterro"],
 ["Ensaio de terraplenagem — camada final","m³",15.00,"aterro"],
 ["Piçarra de jazida ao natural para base","m³",90.00,"base"],
 ["Base e sub-base compactada com rolo, 15 cm","m³",500.00,"base"],
 ["Ensaio de terraplenagem — corpo do aterro","m³",15.00,"base"],
 ["Imprimação com asfalto diluído CM-30","m²",12.00,"imprim"],
 ["Ensaio de imprimação — asfalto diluído","m²",3.00,"imprim"],
 ["Fabricação de CBUQ a quente, CAP 50/70","t",1900.00,"cbuq_t"],
 ["Transporte de CBUQ, usina → obra","t",300.00,"cbuq_t"],
 ["Execução de pavimento em concreto asfáltico","m³",600.00,"cbuq_m3"],
 ["Ensaio Marshall — mistura betuminosa","un",400.00,"marshall"],
 ["Meio-fio de concreto pré-moldado 30×12/15 cm","m",80.00,"meiofio"],
 ["Passeio de concreto usinado C25, não armado","m³",1300.00,"passeio"],
 ["Pintura de faixa viária retrorrefletiva, 10 cm","m",15.00,"pintura"],
 ["Placas de sinalização vertical","un",900.00,"placas"]];

function quantTP(){
 const P=PARAM_TP, r=estRedes(), e=estLotes();
 const ext=r.ext, pista=Math.max(0,r.pavim), passeio=r.calcada;
 const caixa=e.vi;                     /* corte e aterro cobrem a caixa inteira, não só a pista */
 const corte=r.ext>0?(caixa*P.esp_corte):0;
 const q={
  ext, pista, passeio, meiofio:r.meioFio*P.perda_meiofio,
  corte:corte*P.empol,
  aterro:(caixa*P.esp_aterro)*P.fluencia,
  base:(pista*(P.esp_base+P.esp_subbase))*P.perda_base,
  imprim:pista*P.demaos_imprim*P.perda_imprim,
  cbuq_m3:pista*P.esp_cbuq*P.perda_cbuq,
  marshall:Math.max(10,Math.round(pista/75)),
  pintura:ext*P.faixas_pintura,
  placas:Math.max(6,Math.ceil(ext/85)),
  passeio_m3:passeio*P.esp_passeio*P.perda_passeio};
 q.cbuq_t=(pista*P.esp_cbuq)*P.dens_cbuq*P.perda_cbuq;
 const mapa={corte:q.corte,aterro:q.aterro,base:q.base,imprim:q.imprim,
  cbuq_t:q.cbuq_t,cbuq_m3:q.cbuq_m3,marshall:q.marshall,meiofio:q.meiofio,
  passeio:q.passeio_m3,pintura:q.pintura,placas:q.placas};
 const lin=PRECOS_TP.map((p,i)=>{const qt=mapa[p[3]]||0, pu=num(S.obra.puTP&&S.obra.puTP[i])||p[2];
  return{nome:p[0],un:p[1],qt,pu,total:qt*pu}});
 return{q,lin,total:lin.reduce((a,x)=>a+x.total,0)}}

/* Custos unitários das redes, com BDI, referência de mercado — editáveis. */
const PRECOS_REDE={agua:180,esgoto:320,dren:650,energia:240,pv:3500,poste:4200,paisag:45,prelim:0.05,finais:0.025};
/* Composição da obra de infraestrutura a partir dos quantitativos reais,
   e não de um valor por m² de gleba. */
function obraInfra(){
 const t=quantTP(), r=estRedes(), e=estLotes(), P=S.obra.pr||PRECOS_REDE;
 if(t.q.ext<=0)return null;
 const g=k=>t.lin.filter(x=>PRECOS_TP[t.lin.indexOf(x)][3]===k).reduce((a,x)=>a+x.total,0);
 const terra=g('corte')+g('aterro');
 const pav=g('base')+g('imprim')+g('cbuq_t')+g('cbuq_m3')+g('meiofio')+g('passeio');
 const sinal=g('pintura')+g('placas')+g('marshall');
 const dren=r.dren*P.dren;
 const agua=r.agua*P.agua;
 const esg=r.esgoto*P.esgoto+r.pv*P.pv;
 const ene=r.energia*P.energia+r.postes*P.poste;
 const pais=e.vd*P.paisag;
 const sub0=terra+pav+sinal+dren+agua+esg+ene+pais;
 const prelim=sub0*P.prelim;
 /* Serviços finais: limpeza geral, remoção de entulho, desmobilização,
    cadastro as-built e ligações definitivas com as concessionárias. */
 const finais=sub0*(P.finais||0.025);
 const sub=sub0+finais;
 /* [nome, valor, % material, % equipamento] */
 const itens=[["Serviços preliminares, canteiro e equipe",prelim,0.28,0.17],
  ["Terraplenagem",terra,0.22,0.42],["Pavimentação",pav,0.52,0.22],
  ["Drenagem pluvial",dren,0.50,0.16],["Rede de água",agua,0.58,0.08],
  ["Rede de esgoto",esg,0.55,0.11],["Rede elétrica e iluminação",ene,0.62,0.06],
  ["Paisagismo e áreas comuns",pais,0.45,0.07],["Sinalização viária",sinal,0.62,0.07],
  ["Serviços finais, limpeza e entrega",finais,0.18,0.22]];
 return{itens,total:sub+prelim,quant:t,redes:r}}
/* Custo de execução da obra, etapa por etapa, com material, mão de obra e encargo. */


/* Composição do BDI pela fórmula do Acórdão 2.622/2013 do TCU:
   BDI = [ (1+AC+S+R+G) x (1+DF) x (1+L) / (1 - T) ] - 1
   AC administração central · S seguro · R risco · G garantia · DF despesas financeiras
   L lucro · T tributos sobre o faturamento. */
const BDI_PADRAO={ac:4.0,sr:1.27,g:0.4,df:1.23,l:7.4,pis:0.65,cofins:3.0,iss:3.0,cprb:4.5};
function calcBDI(){
 const b=Object.assign({},BDI_PADRAO,S.obra.bdiComp||{});
 const T=(num(b.pis)+num(b.cofins)+num(b.iss)+num(b.cprb))/100;
 const n=(1+(num(b.ac)+num(b.sr)+num(b.g))/100)*(1+num(b.df)/100)*(1+num(b.l)/100);
 const bdi=T>=1?0:(n/(1-T))-1;
 return{b,T,bdi,faixa:bdi<0.19?'abaixo da faixa usual':(bdi>0.27?'acima da faixa usual':'dentro da faixa usual')}}
/* Prazo estimado da OBRA, em meses, pelo porte e pela complexidade.
   Referência de produtividade de canteiro; o cronograma real sai do planejamento da construtora. */
function prazoObra(){
 const fc=0.85+(fNiv()-0.8)*0.4;   /* obra complexa leva mais tempo */
 let m=0;
 if(S.escopo!=='infra'){const a=num(S.areaConstr); if(a>0)m=Math.max(5,4+a/230)}
 if(S.escopo!=='edif'){
  if(S.tipoInfra==='rod')m=Math.max(m,4+num(S.rod.km)*0.9);
  else m=Math.max(m,6+num(S.lote.area)/9000)}
 return Math.round(Math.min(48,m*fc))}
/* Prazo estimado do PROJETO, em dias corridos de trabalho da equipe. */
/* Troca o roteiro de etapas conforme a natureza e redistribui o prazo calculado.
   Para de rodar assim que o usuário editar alguma etapa à mão. */
function sincronizaEtapas(){
 if(!S.etapasAuto)return;
 const infra=(S.escopo==='infra');
 const base=infra?ETAPAS_INFRA.map(e=>[e[0],e[1],0,e[2]]):ETAPAS.map(e=>e.slice());
 const d=prazoProjeto();
 base.forEach(x=>{x[2]=Math.max(2,Math.round(d*x[1]))});
 S.etapas=base}
function prazoProjeto(){
 const a=num(S.areaConstr), g=num(S.lote.area), km=num(S.rod.km);
 let d=40;
 if(a>0)d=45+a/22;
 if(S.escopo!=='edif'){if(S.tipoInfra==='rod')d=Math.max(d,50+km*4);else d=Math.max(d,55+g/700)}
 d=d*fNiv()*(0.85+(fLod()-0.7)*0.3);
 return Math.round(Math.min(360,Math.max(30,d)))}
function calcObra(){
 const O=S.obra, lin=[];
 /* normaliza para fechar exatamente 100%, qualquer que seja o arredondamento da tabela */
 const push=(grupo,arr,base)=>{if(base<=0)return;
  const soma=arr.reduce((a,e)=>a+e[1],0)||1;
  arr.forEach(e=>{const p=e[1]/soma, t=base*p, mat=t*e[2], eq=t*(e[3]||0), mo=t-mat-eq;
   lin.push({grupo,etapa:e[0],pct:p,total:t,mat,mo,eq})})};
 let baseEdif=0, baseInfra=0, jaComBDI=false;
 if(S.escopo!=='infra'){const eo=estObra(); baseEdif=eo.total; push('Edificação',ETAPAS_OBRA.edif,baseEdif)}
 if(S.escopo!=='edif'){
  const oi=(S.tipoInfra!=='rod')?obraInfra():null;
  if(oi){                                   /* parcelamento: vem dos quantitativos */
   baseInfra=oi.total;
   /* O usuário decide: os preços unitários adotados já trazem BDI e encargos, ou são custo puro? */
   jaComBDI=(S.obra.precoComBDI!==false);
   oi.itens.forEach(x=>{if(x[1]<=0)return;
    lin.push({grupo:'Infraestrutura',etapa:x[0],pct:x[1]/oi.total,total:x[1],
     mat:x[1]*x[2],eq:x[1]*(x[3]||0),mo:x[1]*(1-x[2]-(x[3]||0))})})}
  else{const ei=estInfra();
   if(ei){baseInfra=ei.total; push(ei.tipo==='rod'?'Rodovia':'Infraestrutura',
     ei.tipo==='rod'?ETAPAS_OBRA.rod:ETAPAS_OBRA.lote,baseInfra)}}}
 /* itens que o usuário acrescentou à mão */
 (S.obra.extras||[]).forEach(x=>{const t=num(x.qt)*num(x.pu); if(t<=0&&!x.nome)return;
  const fm=x.mat==null?0.5:num(x.mat), fe=x.eq==null?0.08:num(x.eq);
  lin.push({grupo:'Acrescentados por você',etapa:x.nome||'Item sem nome',pct:0,total:t,
   mat:t*fm,eq:t*fe,mo:t*Math.max(0,1-fm-fe),manual:true})});
 const direto=lin.reduce((a,x)=>a+x.total,0);
 lin.forEach(x=>{if(direto>0)x.pct=x.total/direto});
 const mat=lin.reduce((a,x)=>a+x.mat,0), mo=lin.reduce((a,x)=>a+x.mo,0), eq=lin.reduce((a,x)=>a+(x.eq||0),0);
 const reg=REGIMES_INSS[O.regime];
 /* Preço unitário de banco (SINAPI/ORSE) já embute encargos sociais e, aqui, o BDI.
    Aplicar de novo seria contar duas vezes o mesmo custo. */
 /* A mão de obra apurada acima é custo de serviço; a folha é a parcela salarial dentro dela.
    Adota-se 70% como salário e 30% como ferramenta, EPI e administração do serviço. */
 const folha=mo*0.70;
 const inss=jaComBDI?0:(reg[2]==='folha'?folha*reg[1]:0);
 const custo=direto+inss;
 const taxaBDI=calcBDI().bdi;
 const bdi=jaComBDI?0:custo*taxaBDI;
 const total=custo+bdi;
 const cprb=jaComBDI?0:(reg[2]==='receita'?total*reg[1]:0);
 const totalFinal=total+cprb;
 const meses=prazoObra(); let acum=0;
 lin.forEach(x=>{x.ini=acum; x.dur=Math.max(0.5,x.pct*meses*1.45); acum+=x.dur*0.62});
 const fim=Math.max(...lin.map(x=>x.ini+x.dur),0);
 lin.forEach(x=>{x.ini=x.ini*meses/(fim||1); x.dur=x.dur*meses/(fim||1)});
 /* Quando o preço unitário já traz BDI e encargos, o valor deles não some:
    está dentro do total. Aqui ele é separado de volta, para aparecer na proposta. */
 const txEnc=REGIMES_INSS[O.regime][2]==='folha'?REGIMES_INSS[O.regime][1]:0;
 const bdiEmb=jaComBDI?(totalFinal-totalFinal/(1+taxaBDI)):0;
 const custoSemBDI=jaComBDI?totalFinal-bdiEmb:0;
 const moSemBDI=jaComBDI?mo*(custoSemBDI/(direto||1)):0;
 const folhaEmb=jaComBDI?moSemBDI*0.70:0;
 const encEmb=jaComBDI?(folhaEmb-folhaEmb/(1+txEnc)):0;
 return{lin,meses,jaComBDI,taxaBDI,bdiEmb,encEmb,custoSemBDI,direto,mat,mo,eq,folha,inss,cprb,bdi,custo,total:totalFinal,reg,baseEdif,baseInfra,
  porM2:num(S.areaConstr)>0?totalFinal/num(S.areaConstr):0}}
function econ(){const o=S.cubAuto?calcObra().total:num(S.custoObra),ad=o*.10*.60,rt=o*.03,t=ad+rt,inv=calc().liq;
 return{obra:o,adit:ad,retr:rt,tot:t,inv,liquido:t-inv,roi:inv?t/inv:0,pctObra:o?inv/o:0}}

/* ===== gráficos ===== */
const PAL=['#0A3D91','#1B87A8','#C4178C','#EC1C24','#4472C4','#17854B','#ED7D31','#7030A0','#2E75B6','#00B0F0'];
function barrasH(d,w=560,lim=10){if(!d.length)return'<p class="hint">Sem dados — lance serviços na etapa Escopo.</p>';
 d=d.slice(0,lim);const mx=Math.max(...d.map(x=>x.v),1),lh=30,h=d.length*lh+14,lw=148;
 let s=`<svg class="ch" viewBox="0 0 ${w} ${h}">`;
 d.forEach((x,i)=>{const y=i*lh+7,bw=Math.max(2,(x.v/mx)*(w-lw-100)),nm=x.curto.length>23?x.curto.slice(0,22)+'…':x.curto;
  s+=`<text x="0" y="${y+14}" font-size="11.5" fill="#64708A">${esc(nm)}</text>`+
     `<rect x="${lw}" y="${y+3}" width="${bw}" height="16" rx="4" fill="${PAL[i%PAL.length]}"><title>${esc(x.curto)}: ${brl(x.v)}</title></rect>`+
     `<text x="${lw+bw+7}" y="${y+16}" font-size="11" font-weight="700" fill="#14172B">${fmt(x.v)}</text>`});
 return s+'</svg>'}
function rosca(d,w=360){const t=d.reduce((a,x)=>a+Math.max(0,x.v),0);
 if(t<=0)return'<p class="hint">Sem dados ainda.</p>';
 const cx=110,cy=110,R=94,r0=55;let a=-Math.PI/2,s=`<svg class="ch" viewBox="0 0 ${w} 230">`;
 d.forEach((x,i)=>{const v=Math.max(0,x.v),ang=v/t*Math.PI*2,e=a+ang,bg=ang>Math.PI?1:0,p=(R,A)=>[cx+R*Math.cos(A),cy+R*Math.sin(A)];
  const[x1,y1]=p(R,a),[x2,y2]=p(R,e),[x3,y3]=p(r0,e),[x4,y4]=p(r0,a);
  if(v>0)s+=`<path d="M${x1} ${y1}A${R} ${R} 0 ${bg} 1 ${x2} ${y2}L${x3} ${y3}A${r0} ${r0} 0 ${bg} 0 ${x4} ${y4}Z" fill="${PAL[i%PAL.length]}"><title>${esc(x.k)}: ${brl(v)}</title></path>`;
  s+=`<rect x="230" y="${30+i*26}" width="12" height="12" rx="3" fill="${PAL[i%PAL.length]}"/><text x="248" y="${40+i*26}" font-size="11.5" fill="#64708A">${esc(x.k)} · ${pc(v/t)}</text>`;a=e});
 return s+'</svg>'}
function colunas(d,w=560){const mx=Math.max(...d.map(x=>x.v),1),h=206,bw=(w-36)/d.length;
 let s=`<svg class="ch" viewBox="0 0 ${w} ${h}"><line x1="0" y1="${h-32}" x2="${w}" y2="${h-32}" stroke="#DCE4F2"/>`;
 d.forEach((x,i)=>{const bh=Math.max(1,(x.v/mx)*(h-76)),X=18+i*bw,Y=h-32-bh,lb=x.k.length>14?x.k.slice(0,13)+'…':x.k;
  s+=`<rect x="${X+bw*.16}" y="${Y}" width="${bw*.68}" height="${bh}" rx="5" fill="${PAL[i%PAL.length]}"><title>${esc(x.k)}: ${brl(x.v)}</title></rect>`+
     `<text x="${X+bw/2}" y="${Y-6}" font-size="10.5" font-weight="700" text-anchor="middle" fill="#14172B">${fmt(x.v)}</text>`+
     `<text x="${X+bw/2}" y="${h-16}" font-size="10" text-anchor="middle" fill="#64708A">${esc(lb)}</text>`});
 return s+'</svg>'}

/* ===== componentes ===== */
function hp(t){return`<span class="hp" data-a="tip">?<span class="tp">${esc(t)}</span></span>`}
function campo(o){/* {rot,path,tipo,ph,ex,aj,val,msg,cls,list} */
 return`<div><label class="f">${o.rot}${o.aj?hp(o.aj):''}</label>
  <input type="${o.tipo||'text'}" value="${esc(o.val==null?'':o.val)}" placeholder="${esc(o.ph||'')}"
   ${o.list?`list="${o.list}"`:''} ${o.max?`maxlength="${o.max}"`:''} ${o.ro?'readonly':''}
   class="${o.cls||''}" data-in="${o.path}" ${o.im?`inputmode="${o.im}"`:''}>
  ${o.msg?`<div class="hint ${o.msgCls||''}">${esc(o.msg)}</div>`:''}
  ${o.ex?`<div class="ex">Exemplo: ${esc(o.ex)}</div>`:''}</div>`}
function stepper(o){/* {rot,path,val,step,min,max,aj,suf} */
 return`<div><label class="f">${o.rot}${o.aj?hp(o.aj):''}</label>
  <div class="stepper">
   <button type="button" data-a="step" data-p="${o.path}" data-v="-${o.step}" aria-label="diminuir">−</button>
   <input type="text" inputmode="decimal" value="${esc(o.val)}" data-in="${o.path}" data-num="1">
   <button type="button" data-a="step" data-p="${o.path}" data-v="${o.step}" aria-label="aumentar">+</button>
  </div>${o.hint?`<div class="hint">${o.hint}</div>`:''}
  ${o.ex?`<div class="ex">Exemplo: ${esc(o.ex)}</div>`:''}</div>`}

/* ===== app ===== */
/* As etapas mudam conforme a pessoa escolhe projeto, obra ou os dois. */
function passos(){
 const p=[["Início","Projeto ou obra",PM],["Emissor","Quem envia",P0],["Cliente","Quem recebe",P1],["O trabalho","O que será orçado",P2]];
 if(S.modo!=='obra') p.push(["Escopo","Serviços de projeto",P3],["BIM e custos","Honorários",P4]);
 else p.push(["Obra","Custo de execução",POBRA]);
 p.push(["Proposta","Resultado e exportação",P5]);
 return p}

function get(p){return p.split('.').reduce((o,k)=>o==null?undefined:o[k],S)}
function set(p,v){const ks=p.split('.');const last=ks.pop();
 const o=ks.reduce((x,k)=>x[k],S);o[last]=v}

const OB={
 abrir(){$('#obApp').classList.add('on');document.body.style.overflow='hidden';OB.render()},
 fechar(){OB.persist();$('#obApp').classList.remove('on');document.body.style.overflow='';
   OB.toast('Rascunho salvo neste navegador')},
 topo(){try{const a=$('#obApp');
   if(a&&a.scrollTo)a.scrollTo({top:0,behavior:'smooth'});
   else if(a)a.scrollTop=0;
   else if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0)}catch(e){}},
 toast(m){const t=$('#obToast');t.textContent=m;t.classList.add('on');clearTimeout(OB._t);
   OB._t=setTimeout(()=>t.classList.remove('on'),2200)},
 ir(d){const n=S.passo+d;if(n<0||n>passos().length-1)return;if(d>0&&!OB.valida(S.passo))return;
   S.passo=n;OB.render();OB.topo()},
 vai(n){if(n>S.passo&&!OB.valida(S.passo))return;S.passo=n;OB.render();OB.topo()},
 valida(p){
  const nome=passos()[p]&&passos()[p][0];
  if(nome==='Início'&&!S.modo){OB.toast('Escolha entre orçamento de projeto, estimativa de obra ou os dois');return false}
  if(nome==='Cliente'&&!S.cli.nome.trim()){OB.toast('Informe o nome do cliente');return false}
  if(nome==='O trabalho'&&!S.escopo){OB.toast('Escolha entre edificação, infraestrutura ou os dois');return false}
  if(nome==='Escopo'&&!S.itens.length){OB.toast('Adicione pelo menos um serviço');return false}
  return true},
 persist(){try{localStorage.setItem('ob_orc_v3',JSON.stringify(S))}catch(e){}},
 /* Mescla campo a campo: estado salvo por uma versão antiga não derruba a tela. */
 restore(){try{const j=localStorage.getItem('ob_orc_v3');if(!j)return;
   const o=JSON.parse(j),base=JSON.parse(JSON.stringify(S));
   Object.keys(base).forEach(k=>{const v=o[k];
    if(v===undefined||v===null)return;
    if(Array.isArray(base[k])){if(Array.isArray(v))S[k]=v;return}
    if(typeof base[k]==='object'){S[k]=Object.assign({},base[k],typeof v==='object'?v:{});return}
    if(typeof v===typeof base[k])S[k]=v});
   S.passo=0}catch(e){console.warn('estado antigo ignorado',e)}},

 add(){S.itens.push({disc:'',serv:'',tipo:'',modo:'tabela',qtd:'',funcao:'',ajuste:1});
   OB.persist();OB.render();OB.toast('Serviço adicionado')},
 addHora(){S.itens.push({disc:'',serv:'',tipo:'',modo:'hora',qtd:8,funcao:'Coordenador / Gerente BIM',ajuste:1,livre:''});
   OB.persist();OB.render();OB.toast('Serviço por hora adicionado')},
 del(i){const it=S.itens[i],n=it.serv||it.livre||'este serviço';
  pergunta('Excluir serviço','Remover "'+n+'" do orçamento? Esta ação não pode ser desfeita.',
   ()=>{S.itens.splice(i,1);OB.persist();OB.render();OB.toast('Serviço removido')})},
 dup(i){S.itens.splice(i+1,0,JSON.parse(JSON.stringify(S.itens[i])));OB.persist();OB.render();OB.toast('Serviço duplicado')},
 mov(i,d){const j=i+d;if(j<0||j>=S.itens.length)return;const t=S.itens[i];S.itens[i]=S.itens[j];S.itens[j]=t;OB.persist();OB.render()},
 limpar(){if(!S.itens.length){OB.toast('O orçamento já está vazio');return}
  pergunta('Limpar o orçamento','Remover os '+S.itens.length+' serviços lançados? Esta ação não pode ser desfeita.',
   ()=>{S.itens=[];OB.persist();OB.render();OB.toast('Orçamento limpo')},'Limpar tudo')},
 upd(i,k,v){const it=S.itens[i];
  if(k==='disc'){it.disc=v;it.serv='';it.tipo='';const sv=servicosDe(v);if(sv.length===1){it.serv=sv[0];const tp=tiposDe(v,sv[0]);if(tp.length===1)it.tipo=tp[0]}}
  else if(k==='serv'){it.serv=v;it.tipo='';const t=tiposDe(it.disc,v);if(t.length===1)it.tipo=t[0]}
  else if(k==='ajuste'){let n=num(v);if(n>100)n=100;if(n<0)n=0;it.ajuste=n/100}
  else it[k]=v;OB.persist();OB.render()},
 modo(i,m){S.itens[i].modo=m;if(m==='hora'&&!S.itens[i].funcao)S.itens[i].funcao='Coordenador / Gerente BIM';
   OB.persist();OB.render()},



 /* Urbanização de área: praça, parque, calçadão, terminal. */
 montarUrbanizacao(){
  let at=num(S.lote.area); if(at<=0)at=num(S.areaTerr);
  if(at<=0){OB.toast('Informe a área a urbanizar na etapa O trabalho');return}
  S.lote.area=at;
  const verde=at*num(S.lote.pVerde)/100;
  const add=(disc,serv,tipo,q)=>{if(q<=0)return;const svs=servicosDe(disc);if(!svs.length)return;
   const sv=(serv&&svs.includes(serv))?serv:svs[0];const tps=tiposDe(disc,sv);
   const tp=(tipo&&tps.includes(tipo))?tipo:tps[0];
   S.itens.push({disc,serv:sv,tipo:tp,modo:'tabela',qtd:Math.round(q),funcao:'',ajuste:1})};
  add('Edificação e urbanismo · Urbanização',null,null,at);
  add('Edificação e urbanismo · Paisagismo',null,null,verde||at*0.3);
  add('Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias',null,null,at);
  add('Infraestrutura Áreas livres · Pavimentação',null,null,at*0.15);
  add('Infraestrutura Áreas livres · Drenagem Pluvial','Simples - (Micro e Macrodrenagem)','Simples',at);
  add('Infraestrutura Áreas livres · Rede Elétrica',null,null,at*0.20);
  add('Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica','Iluminação de área externa',null,at);
  add('Instalações e estrutura · Irrigação','Área verde, jardins',null,verde||at*0.3);
  add('Orçamento e custos · Infraestrutura e Urbanização',null,null,at);
  OB.toast('Urbanização de '+fmt(at)+' m² montada');
 },
 /* Topografia e sondagem do terreno. */
 montarLevantamento(){
  const area=S.escopo==='infra'?num(S.lote.area):(num(S.areaTerr)||num(S.lote.area)||num(S.areaConstr));
  const add=(disc,serv,tipo,q)=>{if(q<=0)return;const svs=servicosDe(disc);if(!svs.length)return;
   const sv=(serv&&svs.includes(serv))?serv:svs[0];const tps=tiposDe(disc,sv);
   const tp=(tipo&&tps.includes(tipo))?tipo:tps[0];
   S.itens.push({disc,serv:sv,tipo:tp,modo:'tabela',qtd:q,funcao:'',ajuste:1})};
  if(area>0&&!S.itens.some(i=>i.disc.indexOf('Topografia')===0))
   add('Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas',null,null,Math.round(area));
  add('Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)',
      'Mobilização e desmobilização de pessoal e equipamentos (área concentrada)','Em Aracaju',1);
  add('Sondagem e solos · Sondagens de Simples Reconhecimento de Sub-solo (Percussão)','Por metro linear de sondagem',null,61.35);
 },
 /* Loteamento / urbanização: as áreas saem dos percentuais normativos do projeto urbanístico.
    Lei 6.766/79 e planos diretores pedem áreas públicas; os percentuais variam por município,
    então vêm como sugestão editável. */
 montarLoteamento(){
  const L=S.lote; let at=num(L.area);
  if(at<=0)at=num(S.areaTerr);           /* aceita a área do terreno se a gleba ficou em branco */
  if(at<=0){OB.toast('Informe a área da gleba na etapa O trabalho');return}
  S.lote.area=at;
  const viario=at*num(L.pViario)/100, verde=at*num(L.pVerde)/100, inst=at*num(L.pInst)/100;
  const add=(disc,serv,tipo,q)=>{if(q<=0)return;const svs=servicosDe(disc);if(!svs.length)return;
   const sv=(serv&&svs.includes(serv))?serv:svs[0];const tps=tiposDe(disc,sv);
   const tp=(tipo&&tps.includes(tipo))?tipo:tps[0];
   S.itens.push({disc,serv:sv,tipo:tp,modo:'tabela',qtd:Math.round(q),funcao:'',ajuste:1})};
  add('Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias',null,null,at);
  add('Infraestrutura Áreas livres · Pavimentação',null,null,viario);
  add('Infraestrutura Áreas livres · Drenagem Pluvial','Simples - (Micro e Macrodrenagem)','Simples',at);
  add('Infraestrutura Áreas livres · Abastecimento de Água','Distribuição',null,at);
  add('Infraestrutura Áreas livres · Esgotos Sanitários','Rede Condominial com Fossa e Filtro',null,at);
  add('Infraestrutura Áreas livres · Rede Elétrica',null,null,viario);
  add('Edificação e urbanismo · Urbanização',null,null,verde+inst);
  add('Edificação e urbanismo · Paisagismo',null,null,verde);
  add('Topografia e cadastro · Lev. Topográfico Planialtimétrico Semi-Cadastral de Áreas',null,null,at);
  const nl=estLotes().n;
  if(nl>0){
   const n=nl, f=n<=1?'Até 01 lote':(n<=5?'De 1 a 5 lotes':(n<=10?'De 5,01 a 10 lotes':
     (n<=25?'De 10,01 a 25 lotes':(n<=50?'De 25,01 a 50 lotes':'Acima de 50 lotes'))));
   add('Topografia e cadastro · Cadastro Imobiliário Individual (Físico) de Lotes até 500,00 m²',null,f,n);
  }
  /* documentação do parcelamento: um memorial por lote */
  if(nl>0){
   const f2=nl<=1?'Até 01 lote':(nl<=5?'De 1 a 5 lotes':(nl<=10?'De 5,01 a 10 lotes':
     (nl<=25?'De 10,01 a 25 lotes':(nl<=50?'De 25,01 a 50 lotes':'Acima de 50 lotes'))));
   add('Topografia e cadastro · Planta Individual, Memorial Descritivo e Dossiê',null,f2,nl);
  }
  add('Topografia e cadastro · Implantação de Marcos de Concreto',null,null,Math.max(4,Math.ceil(nl/10)));
  add('Topografia e cadastro · Elaboração de Planta de Locação','Obras de infra-estrutura',null,at);
  add('Orçamento e custos · Infraestrutura e Urbanização',null,null,at);
  OB.toast('Infraestrutura montada: '+' '+fmt(viario)+' m² de viário, '+fmt(verde)+' m² de área verde');
 },
 /* Rodovia / via de acesso: a tabela cobra por quilômetro. */
 montarRodovia(){
  const R=S.rod, km=num(R.km);
  if(km<=0){OB.toast('Informe a extensão da via em quilômetros');return}
  const add=(disc,serv,tipo,q)=>{if(q<=0)return;const svs=servicosDe(disc);if(!svs.length)return;
   const sv=(serv&&svs.includes(serv))?serv:svs[0];const tps=tiposDe(disc,sv);
   const tp=(tipo&&tps.includes(tipo))?tipo:tps[0];
   S.itens.push({disc,serv:sv,tipo:tp,modo:'tabela',qtd:q,funcao:'',ajuste:1})};
  add('Infraestrutura Vias de acesso · Terraplenagem e Geométrico de Vias',null,null,km);
  add('Infraestrutura Vias de acesso · Pavimentação',null,null,km);
  add('Infraestrutura Vias de acesso · Drenagem Pluvial',
      R.drenCompl?'Complexa - (Macrodrenagem: canais, galerias etc.)':'Simples - (Micro: tubulações etc.)',null,km);
  if(R.sinal)add('Infraestrutura Vias de acesso · Sinalização Vertical e Horizontal',null,null,km);
  add('Infraestrutura Vias de acesso · Cadastramento de Infraestrutura',null,null,km);
  add('Topografia e cadastro · Levantamento Planialtimétrico Semi-Cadastral de Vias',null,null,km);
  if(R.jazida){add('Sondagem e solos · Estudo de Jazidas','Mobilização de pessoal e equipamentos','Em Aracaju',1);
   add('Sondagem e solos · Estudo de Jazidas','Emissão de relatório técnico de caracterização de jazida',null,1)}
  OB.toast('Via de '+fmt(km)+' km montada');
 },
 /* Monta o escopo conforme o tipo de edificação e as áreas informadas.
    Regras: disciplinas-base sempre; extras conforme o tipo; infraestrutura só se houver terreno. */
 montarEscopo(){
  const E=S.escopo;
  if(!E){OB.toast('Escolha primeiro entre edificação, infraestrutura ou os dois');return}
  S.itens=[];
  const infra=(E==='infra'||E==='ambos');
  if(infra){
   if(S.tipoInfra==='lote')OB.montarLoteamento();
   else if(S.tipoInfra==='rod')OB.montarRodovia();
   else OB.montarUrbanizacao();
  }
  if(S.levant)OB.montarLevantamento();
  if(S.gestao)PACOTES.gestao.itens.forEach(x=>S.itens.push({disc:'',serv:'',tipo:'',modo:'hora',qtd:x[2],funcao:x[1],ajuste:1,livre:x[0]}));
  if(E==='infra'){OB.persist();OB.render();OB.toast(S.itens.length+' serviços montados');return}
  const t=TIPOS.find(x=>x.id===S.tipoEdif)||TIPOS[2];
  const ac=num(S.areaConstr), at=num(S.areaTerr);
  if(ac<=0){OB.persist();OB.render();OB.toast('Informe a área construída para montar a edificação');return}
  const add=(disc,serv,tipo,q)=>{
   if(!disc)return;
   const svs=servicosDe(disc); if(!svs.length)return;
   const sv=(serv&&svs.includes(serv))?serv:(svs.includes(t.eng)?t.eng:(svs.includes('Edificações em Geral')?'Edificações em Geral':svs[0]));
   const tps=tiposDe(disc,sv); const tp=(tipo&&tps.includes(tipo))?tipo:tps[0];
   const un=(linhasDe(disc,sv,tp)[0]||[])[3];
   let qt=q; if(qt==null)qt=un==='m²'?ac:1;
   S.itens.push({disc,serv:sv,tipo:tp,modo:'tabela',qtd:qt,funcao:'',ajuste:1});
  };
  /* 1 · arquitetura */
  add(t.discArq,t.arq,'Novo',ac);
  /* 2 · disciplinas base de toda edificação */
  add('Instalações e estrutura · Fundações','Superficiais',null,ac);
  add('Instalações e estrutura · Estrutura (concreto, metálica ou madeira)',null,t.estrutura||'Concreto Armado',ac);
  add('Instalações e estrutura · Instalações hidráulicas prediais',null,null,ac);
  add('Instalações e estrutura · Esgoto sanitário predial',null,null,ac);
  add('Instalações e estrutura · Drenagem pluvial da edificação',null,'Simples',ac);
  add('Instalações e estrutura · Instalações elétricas prediais — incl. gerador, subestação e luminotécnica','Edifícios Hospitalares e de Saúde'===t.eng?'Edifícios Hospitalares e de Saúde':'Edificações em Geral',null,ac);
  add('Instalações e estrutura · Incêndio e pânico — extintor, hidrante',t.inc,null,ac);
  /* 3 · extras do tipo */
  (t.extras||[]).forEach(k=>{const e=EXTRAS[k];if(!e)return;
   add(e[0],e[1],null,e[2]==='un'?1:(e[2]==='terr'?at:ac))});
  /* 4 · resíduos e orçamento, sempre */
  add('Instalações e estrutura · PGRSCC — resíduos sólidos da construção',ac<=1500?'De 0 a 1.500,00 m²':'Acima de 1.501,00 m²',null,1);
  add('Orçamento e custos · Orçamento - Edificações','Edificações em Geral','Novo',ac);
  /* 5 · infraestrutura do lote, só se houver terreno */
  if(at>0&&E==='edif'){
   add('Infraestrutura Áreas livres · Terraplenagem e Geométrico de Vias',null,null,at);
   add('Infraestrutura Áreas livres · Pavimentação',null,null,Math.round(at*0.20));
   add('Infraestrutura Áreas livres · Drenagem Pluvial','Simples - (Micro e Macrodrenagem)','Simples',at);
   add('Infraestrutura Áreas livres · Rede Elétrica',null,null,Math.round(at*0.15));
   add('Edificação e urbanismo · Paisagismo',null,null,Math.round(at*0.25));
  }
  OB.persist();OB.render();OB.toast(S.itens.length+' serviços montados');
 },
 pacote(k){const p=PACOTES[k];
  p.itens.forEach(x=>{
   if(p.hora){S.itens.push({disc:'',serv:'',tipo:'',modo:'hora',qtd:x[2],funcao:x[1],ajuste:1,livre:x[0]});return}
   const disc=x[0],serv=x[1]||servicosDe(disc)[0],tps=tiposDe(disc,serv),tipo=tps.includes(x[2])?x[2]:tps[0];
   const un=(linhasDe(disc,serv,tipo)[0]||[])[3];
   let q=un==='m²'?(grupoDe(disc)==='Infraestrutura'?num(S.areaTerr):num(S.areaConstr)):1;
   if(disc.indexOf('Infraestrutura Áreas livres · Pavimentação')===0)q=Math.round(num(S.areaTerr)*0.20);
   S.itens.push({disc,serv,tipo,modo:'tabela',qtd:q||'',funcao:'',ajuste:1})});
  OB.persist();OB.render();OB.toast(p.itens.length+' serviços adicionados')},

 baixar(){const b=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=(S.prop||'orcamento')+'.json';
  a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);OB.toast('Arquivo baixado')},
 abrirArq(){const i=document.createElement('input');i.type='file';i.accept='.json';
  i.onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();
   r.onload=()=>{try{Object.assign(S,JSON.parse(r.result));OB.persist();OB.render();OB.toast('Orçamento carregado')}
    catch(x){OB.toast('Arquivo inválido')}};r.readAsText(f)};i.click()},
 logo(){const i=document.createElement('input');i.type='file';i.accept='image/*';
  i.onchange=e=>{const f=e.target.files[0];if(!f)return;
   if(f.size>900000){OB.toast('Imagem grande demais — use até 900 KB');return}
   const r=new FileReader();r.onload=()=>{S.emp.logo=r.result;OB.persist();OB.render();OB.toast('Logo carregada')};
   r.readAsDataURL(f)};i.click()},
 tiraLogo(){S.emp.logo='';OB.persist();OB.render()},
 imprimir(){OB.montaPrint();setTimeout(()=>window.print(),120)},
 word(){OB.montaPrint();
  const css=`<style>body{font-family:Arial;font-size:11pt;color:#000}h1{color:#0A3D91;font-size:16pt;margin:0}
   table{width:100%;border-collapse:collapse;font-size:9.5pt;margin-bottom:12pt}
   th{background:#0A3D91;color:#fff;padding:5pt;text-align:left}td{padding:4pt;border-bottom:.5pt solid #ccc}
   .num{text-align:right}.tot td{background:#0A3D91;color:#fff;font-weight:bold}
   .sub td{background:#E8EEF8;font-weight:bold}.cond{font-size:8.5pt}
   .car{border:1pt solid #0A3D91;padding:8pt;margin-top:20pt;font-size:9pt}.sig{margin-top:30pt;text-align:center}
   .hd{border-bottom:2pt solid #0A3D91;padding-bottom:6pt;margin-bottom:10pt}</style>`;
  const html='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"'
   +' xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8">'+css+'</head><body>'
   +$('#obPrt').innerHTML+'</body></html>';
  const b=new Blob(['\ufeff',html],{type:'application/msword'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=(S.prop||'proposta')+'.doc';
  a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);OB.toast('Arquivo Word baixado')},


 excel(){const c=calc(),e=estObra();
  const linhas=S.itens.map((it,i)=>{const x=calcItem(it);
   const nome=it.modo==='hora'?((it.livre||'Serviço técnico')+(it.funcao?' ('+it.funcao+')':'')):(it.serv+(it.tipo&&it.tipo!=='OPÇÃO ÚNICA'?' — '+it.tipo:''));
   return`<tr><td>${i+1}</td><td>${esc(it.disc||'Carga horária')}</td><td>${esc(nome)}</td><td>${esc(x.un)}</td>
    <td>${num(it.qtd).toFixed(2)}</td><td>${x.preco.toFixed(2)}</td><td>${x.sub.toFixed(2)}</td></tr>`}).join('');
  const t=`<table border="1"><tr><th colspan="7">PROPOSTA ${esc(S.prop)} — ${esc(S.cli.nome)}</th></tr>
   <tr><th>#</th><th>Disciplina</th><th>Serviço</th><th>Un.</th><th>Qtd</th><th>Preço unit.</th><th>Total</th></tr>
   ${linhas}
   <tr><td colspan="6"><b>Compatibilização BIM</b></td><td>${c.comp.toFixed(2)}</td></tr>
   <tr><td colspan="6"><b>Honorários brutos</b></td><td>${c.bruto.toFixed(2)}</td></tr>
   <tr><td colspan="6">Desconto</td><td>${(-c.desc).toFixed(2)}</td></tr>
   <tr><td colspan="6"><b>VALOR DA PROPOSTA</b></td><td>${c.liq.toFixed(2)}</td></tr>
   <tr><td colspan="7"></td></tr>
   <tr><th colspan="7">DEMONSTRATIVO</th></tr>
   <tr><td colspan="6">Impostos</td><td>${(-c.imp).toFixed(2)}</td></tr>
   <tr><td colspan="6">Custo fixo rateado</td><td>${(-c.fixo).toFixed(2)}</td></tr>
   <tr><td colspan="6">Custos diretos</td><td>${(-c.diretos).toFixed(2)}</td></tr>
   <tr><td colspan="6"><b>Lucro líquido</b></td><td>${c.lucro.toFixed(2)}</td></tr>
   <tr><td colspan="6">Margem</td><td>${(c.margem*100).toFixed(1)}%</td></tr>
   <tr><td colspan="7"></td></tr>
   <tr><th colspan="7">CRONOGRAMA</th></tr>
   ${S.etapas.map(x=>`<tr><td colspan="4">${esc(x[0])}</td><td>${(x[1]*100).toFixed(0)}%</td><td>${x[2]} dias</td><td>${(x[1]*c.liq).toFixed(2)}</td></tr>`).join('')}
   <tr><td colspan="7"></td></tr>
   <tr><th colspan="7">ESTIMATIVA DA OBRA (CUB ${esc(e.uf)})</th></tr>
   <tr><td colspan="6">CUB base R$/m²</td><td>${e.base.toFixed(2)}</td></tr>
   <tr><td colspan="6">Padrão ${esc(PADROES[S.cubPadrao][0])} — unitário aplicado</td><td>${e.unit.toFixed(2)}</td></tr>
   <tr><td colspan="6">Área construída (m²)</td><td>${e.area.toFixed(2)}</td></tr>
   ${e.comp.map(x=>`<tr><td colspan="6">${esc(x.k)}</td><td>${x.v.toFixed(2)}</td></tr>`).join('')}
   <tr><td colspan="6">Itens fora do CUB (${(S.cubExtra*100).toFixed(0)}%)</td><td>${e.extra.toFixed(2)}</td></tr>
   <tr><td colspan="6"><b>ESTIMATIVA TOTAL DA OBRA</b></td><td>${e.total.toFixed(2)}</td></tr>
   </table>`;
  const html='<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8">'
   +'<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
   +'<x:Name>Orcamento</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>'
   +'</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>'+t+'</body></html>';
  const b=new Blob(['\ufeff',html],{type:'application/vnd.ms-excel'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=(S.prop||'orcamento')+'.xls';
  a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);OB.toast('Planilha baixada')},
 rodape(){
  const fT=$('#obFT'),fQ=$('#obFQ'),r1=$('#obFL1'),r2=$('#obFL2');
  if(S.modo==='obra'){const o=calcObra();
   if(r1)r1.textContent='ESTIMATIVA DA OBRA'; if(r2)r2.textContent='PRAZO';
   fT.textContent=o.direto>0?brl(o.total):'—';
   fQ.textContent=o.direto>0?(o.meses+' meses'):'falta o tamanho';
   return}
  sincronizaEtapas();const c=calc();
  if(r1)r1.textContent='HONORÁRIOS DE PROJETO'; if(r2)r2.textContent='SERVIÇOS';
  fT.textContent=brl(c.liq); fQ.textContent=String(S.itens.length)},
 render(){
  $('#obTopTi').innerHTML=(S.emp.nome?esc(S.emp.nome):'Gerador de Orçamento')+'<small>Projetos e obras</small>';
  let PS;
  try{PS=passos()}catch(e){console.error(e);PS=[["Início","Projeto ou obra",PM]]}
  if(S.passo>PS.length-1)S.passo=PS.length-1;
  if(S.passo<0)S.passo=0;
  $('#obStps').innerHTML=PS.map((p,i)=>`<button class="stp ${i===S.passo?'nw':(i<S.passo?'dn':'')}" data-a="vai" data-v="${i}">
    <span class="b"><i></i></span><b>${String(i+1).padStart(2,'0')} · ${p[0]}</b><span>${p[1]}</span></button>`).join('');
  let corpo='';
  try{corpo=PS[S.passo][2]()}
  catch(e){console.error(e);
   corpo=`<div class="al r"><b>Esta etapa não pôde ser montada.</b><br>${esc(e.message)}
    <div style="margin-top:12px"><button class="bt sec" data-a="resetTudo">Recomeçar do zero</button></div></div>`}
  $('#obPns').innerHTML=`<section class="pn on">${corpo}</section>`;
  $('#obBV').disabled=S.passo===0;
  $('#obBS').style.display=S.passo===PS.length-1?'none':'';
  OB.rodape();
  const m=$('#obMdl').innerHTML;
  if(m.indexOf('obMdConf')>=0)return;
  if(m.indexOf('obMdCfg')>=0)$('#obMdl').innerHTML=telaConfig();
  else if(m.indexOf('obMdBib')>=0)$('#obMdl').innerHTML=telaBib()},
 montaPrint(){
  const c=calc(),e=S.emp;
  const linhas=S.itens.map((it,i)=>{const x=calcItem(it);
   const nome=it.modo==='hora'?((it.livre||it.serv||'Serviço técnico')+(it.funcao?' ('+it.funcao+')':''))
    :(it.serv+(it.tipo&&it.tipo!=='OPÇÃO ÚNICA'?' — '+it.tipo:''));
   return`<tr><td>${i+1}</td><td>${esc(nome)}</td><td>${esc(x.un)}</td><td class="num">${fmt(num(it.qtd))}</td>
    <td class="num">${fmt(x.preco)}</td><td class="num">${fmt(x.sub)}</td></tr>`}).join('');
  const prazo=S.etapas.reduce((a,x)=>a+num(x[2]),0);
  $('#obPrt').innerHTML=`
   <div class="pg">
    <div class="hd">
     <div>${e.logo?`<img src="${e.logo}" alt="">`:''}<h1>${esc(e.nome||'Proposta Técnica')}</h1>
      <div style="font-size:9.5px;color:#444">${esc([e.resp,e.reg].filter(Boolean).join(' — '))}</div></div>
     <div style="text-align:right;font-size:10px"><b>PROPOSTA DE HONORÁRIOS TÉCNICOS</b><br>
      ${esc(S.prop)} · ${esc(S.data)}<br>Validade: ${esc(S.validade)} dias</div></div>
    <table style="margin-bottom:14px"><tbody>
     <tr><td style="width:110px"><b>Cliente</b></td><td>${esc(S.cli.nome)}</td>
         <td style="width:90px"><b>${S.cli.tipo==='PF'?'CPF':'CNPJ'}</b></td><td>${esc(S.cli.doc)}</td></tr>
     <tr><td><b>Objeto</b></td><td colspan="3">${esc(S.objeto)}</td></tr>
     <tr><td><b>Local</b></td><td>${esc([S.cli.cid,S.cli.uf].filter(Boolean).join(' / '))}</td>
         <td><b>Contato</b></td><td>${esc([S.cli.contato,S.cli.fone].filter(Boolean).join(' · '))}</td></tr>
     <tr><td><b>Complexidade</b></td><td>${esc(NIVEIS[S.nivel][0])}</td>
         <td><b>Detalhe</b></td><td>${esc(LODS[S.lod][0])}</td></tr>
     <tr><td><b>Prazo</b></td><td>${prazo} dias</td><td><b>Áreas</b></td>
         <td>${fmt(num(S.areaConstr))} m² construídos · ${fmt(num(S.areaTerr))} m² de terreno</td></tr>
    </tbody></table>
    <table><thead><tr><th>#</th><th>Serviço</th><th>Un.</th><th class="num">Qtd</th><th class="num">Preço unit.</th><th class="num">Total</th></tr></thead>
     <tbody>${linhas}
      <tr class="sub"><td colspan="5">Compatibilização BIM — ${['percentual sobre os projetos','por metro quadrado','por carga horária'][S.compMetodo]}</td><td class="num">${fmt(c.comp)}</td></tr>
      <tr class="sub"><td colspan="5">Subtotal dos honorários</td><td class="num">${fmt(c.bruto)}</td></tr>
      ${c.desc?`<tr><td colspan="5">Desconto comercial</td><td class="num">-${fmt(c.desc)}</td></tr>`:''}
      <tr class="tot"><td colspan="5">VALOR TOTAL DA PROPOSTA</td><td class="num">${brl(c.liq)}</td></tr>
     </tbody></table>
   </div>
   ${S.modo!=='obra'?'':(()=>{const o=calcObra();if(o.direto<=0)return '';
    return `<div class="pg"><div class="hd"><h1 style="font-size:14px">Estimativa de execução da obra</h1>
     <div style="font-size:9.5px">${esc(S.prop)} · ${esc(S.cli.nome)}</div></div>
     <table><thead><tr><th>Etapa</th><th class="num">%</th><th class="num">Material</th><th class="num">Mão de obra</th><th class="num">Equipamento</th><th class="num">Total</th></tr></thead>
      <tbody>${o.lin.map(x=>`<tr><td>${esc(x.etapa)}</td><td class="num">${(x.pct*100).toFixed(1)}%</td>
       <td class="num">${fmt(x.mat)}</td><td class="num">${fmt(x.mo)}</td><td class="num">${fmt(x.eq||0)}</td><td class="num">${fmt(x.total)}</td></tr>`).join('')}
       <tr class="sub"><td colspan="2">Custo direto</td><td class="num">${fmt(o.mat)}</td><td class="num">${fmt(o.mo)}</td><td class="num">${fmt(o.eq)}</td><td class="num">${fmt(o.direto)}</td></tr>
       ${o.jaComBDI?'':`<tr><td colspan="5">Encargo previdenciário — ${esc(o.reg[0])}</td><td class="num">${fmt(o.inss||o.cprb)}</td></tr>`}
       ${o.jaComBDI
        ?`<tr><td colspan="5">Preços unitários com BDI e encargos inclusos — nada somado por cima</td><td class="num">—</td></tr>
          <tr><td colspan="5" style="font-size:9px">Referência: BDI embutido ${fmt(o.taxaBDI*100)}% = ${fmt(o.bdiEmb)}</td><td class="num"></td></tr>`
        :`<tr><td colspan="5">BDI ${fmt(o.taxaBDI*100)}%</td><td class="num">${fmt(o.bdi)}</td></tr>`}
       <tr class="tot"><td colspan="5">ESTIMATIVA TOTAL DA OBRA</td><td class="num">${brl(o.total)}</td></tr></tbody></table>
     <table style="margin-top:10px"><thead><tr><th colspan="2">COMPOSIÇÃO DO BDI — Acórdão 2.622/2013 TCU</th></tr></thead>
      <tbody>${(()=>{const B=calcBDI();return `<tr><td>Administração central</td><td class="num">${fmt(B.b.ac)}%</td></tr>
       <tr><td>Seguro e risco</td><td class="num">${fmt(B.b.sr)}%</td></tr>
       <tr><td>Garantia</td><td class="num">${fmt(B.b.g)}%</td></tr>
       <tr><td>Despesas financeiras</td><td class="num">${fmt(B.b.df)}%</td></tr>
       <tr><td>Lucro</td><td class="num">${fmt(B.b.l)}%</td></tr>
       <tr><td>PIS / COFINS / ISS / CPRB</td><td class="num">${fmt(B.b.pis)} / ${fmt(B.b.cofins)} / ${fmt(B.b.iss)} / ${fmt(B.b.cprb)} %</td></tr>
       <tr class="sub"><td>BDI resultante</td><td class="num">${fmt(B.bdi*100)}%</td></tr>`})()}</tbody></table>
     <div class="cond"><b>RESSALVAS DA ESTIMATIVA</b><br>
      1. Estimativa paramétrica para ordem de grandeza, baseada em CUB e referências de mercado. Não substitui orçamento analítico com composições SINAPI ou SICRO.<br>
      2. Não inclui terreno, licenciamento, outorgas, ligações de concessionária nem obras de arte especiais.<br>
      3. O enquadramento previdenciário deve ser confirmado com a contabilidade conforme o CNAE da obra.<br>
      4. Esta estimativa de execução não se confunde com os honorários de projeto, orçados à parte.</div></div>`})()}
   <div class="pg">
    <div class="hd"><h1 style="font-size:14px">Cronograma e condições</h1>
     <div style="font-size:9.5px">${esc(S.prop)} · ${esc(S.cli.nome)}</div></div>
    <table><thead><tr><th>Etapa</th><th class="num">%</th><th class="num">Dias</th><th>Marco de pagamento</th><th class="num">Valor</th></tr></thead>
     <tbody>${S.etapas.map(x=>`<tr><td>${esc(x[0])}</td><td class="num">${(x[1]*100).toFixed(0)}%</td>
      <td class="num">${x[2]}</td><td>${esc(x[3])}</td><td class="num">${fmt(x[1]*c.liq)}</td></tr>`).join('')}</tbody></table>
    <div class="cond"><b>CONDIÇÕES GERAIS</b><br>${CONDICOES.map((t,i)=>(i+1)+'. '+esc(t)).join('<br>')}</div>
    <div class="car"><b>${esc(e.nome||'')}</b>${e.cnpj?' · '+(e.tipo==='PF'?'CPF ':'CNPJ ')+esc(e.cnpj):''}<br>
     ${esc([e.end,e.fone,e.email,e.site].filter(Boolean).join(' · '))}</div>
    <div class="sig">_________________________________________<br>
     <b>${esc(e.resp||'Responsável Técnico')}</b><br>${esc(e.reg||'')}</div>
   </div>`}
};



/* O confirm() do navegador não abre dentro de iframe em muitos sites.
   Esta caixa é desenhada na própria página e sempre funciona. */
let _conf=null;
function pergunta(titulo,texto,acao,rotulo){
 _conf=acao;
 $('#obMdl').innerHTML=`<div class="mdl" id="obMdConf"><div class="mdlbox" style="max-width:430px">
  <div class="mdlhd" style="background:linear-gradient(120deg,#EC1C24,#C4178C)"><b>${esc(titulo)}</b></div>
  <div class="mdlbd"><p style="font-size:14px;line-height:1.55;margin:0 0 18px">${esc(texto)}</p>
   <div style="display:flex;gap:9px;flex-wrap:wrap">
    <button class="bt sec" data-a="confNao" style="flex:1">Cancelar</button>
    <button class="bt" data-a="confSim" style="flex:1;background:linear-gradient(135deg,#EC1C24,#F2564C)">${esc(rotulo||'Excluir')}</button>
   </div></div></div></div>`}

/* Trocar de módulo zera o que era do módulo anterior.
   Nada de honorários de projeto somando com estimativa de obra. */
function limpaProjeto(){S.itens=[];S.etapasAuto=true;S.desconto=0;
 S.custos.forEach(c=>{});S.compMetodo=0;S.compPct=.12}
function limpaEdif(){S.areaConstr=0;S.areaTerr=0;S.tipoEdif='com'}
function limpaInfra(){S.lote={area:0,pViario:20,pVerde:15,pInst:5,lw:12,lp:30,lotes:0,cond:false};
 S.rod={km:0,pista:7,drenCompl:false,sinal:true,jazida:true};S.infraVal=0;S.rodVal=0}
function trocaModo(v){
 if(S.modo===v){S.passo=1;OB.render();OB.topo();return}
 const faz=()=>{S.modo=v;S.quer.estim=(v==='obra');limpaProjeto();limpaEdif();limpaInfra();
  S.escopo='edif';S.cubVal=0;S.custoObra=0;S.nivel=2;S.lod=2;
  S.passo=1;OB.persist();OB.render();OB.topo();
  OB.toast(v==='obra'?'Estimativa de obra — tudo zerado para começar':'Orçamento de projeto — tudo zerado para começar')};
 const temDados=S.itens.length||num(S.areaConstr)>0||num(S.lote.area)>0||num(S.rod.km)>0;
 if(temDados)pergunta('Trocar de módulo',
  'Projeto e obra são orçamentos independentes. Ao trocar, tudo o que você preencheu neste módulo é apagado — inclusive as áreas informadas.',
  faz,'Trocar e limpar');
 else faz()}
function trocaEscopo(v){
 if(S.escopo===v)return;
 const faz=()=>{S.escopo=v;limpaProjeto();
  if(v==='edif')limpaInfra(); else limpaEdif();
  OB.persist();OB.render();OB.toast('Escopo trocado — lançamentos anteriores apagados')};
 if(S.itens.length)pergunta('Trocar o tipo de trabalho',
  'Os '+S.itens.length+' serviço(s) já lançados são de outro tipo de obra e serão apagados.',faz,'Trocar e limpar');
 else faz()}
function trocaTipoInfra(v){
 if(S.tipoInfra===v)return;
 const faz=()=>{S.tipoInfra=v;limpaProjeto();limpaInfra();
  OB.persist();OB.render();OB.toast('Lançamentos anteriores apagados')};
 if(S.itens.length)pergunta('Trocar o tipo de infraestrutura',
  'Os '+S.itens.length+' serviço(s) lançados são de outro tipo e serão apagados.',faz,'Trocar e limpar');
 else faz()}
/* ===== biblioteca de orçamentos salvos ===== */
const BIB={
 ler(){try{return JSON.parse(localStorage.getItem('ob_bib')||'[]')}catch(e){return[]}},
 grava(l){try{localStorage.setItem('ob_bib',JSON.stringify(l))}catch(e){OB.toast('Memória cheia — exclua orçamentos antigos')}},
 salvar(){const l=BIB.ler(),c=calc();
  const reg={id:S._id||('o'+Date.now()),nome:S.prop||'Sem número',cliente:S.cli.nome||'Sem cliente',
   objeto:S.objeto||'',data:S.data,valor:c.liq,itens:S.itens.length,quando:new Date().toISOString(),dados:JSON.parse(JSON.stringify(S))};
  reg.dados._id=reg.id;S._id=reg.id;
  const i=l.findIndex(x=>x.id===reg.id);
  if(i>=0)l[i]=reg;else l.unshift(reg);
  BIB.grava(l);OB.persist();OB.render();OB.toast(i>=0?'Orçamento atualizado':'Orçamento salvo na biblioteca')},
 carregar(id){const r=BIB.ler().find(x=>x.id===id);if(!r)return;
  Object.assign(S,r.dados);S.passo=5;OB.persist();OB.render();OB.toast('Orçamento aberto')},
 dup(id){const r=BIB.ler().find(x=>x.id===id);if(!r)return;
  const n=JSON.parse(JSON.stringify(r));n.id='o'+Date.now();n.nome=r.nome+' (cópia)';
  n.dados._id=n.id;n.dados.prop=n.nome;n.quando=new Date().toISOString();
  const l=BIB.ler();l.unshift(n);BIB.grava(l);OB.render();OB.toast('Cópia criada')},
 excluir(id){const r=BIB.ler().find(x=>x.id===id);
  pergunta('Excluir orçamento','Remover "'+((r&&r.nome)||'')+'" da biblioteca? Esta ação não pode ser desfeita.',
   ()=>{BIB.grava(BIB.ler().filter(x=>x.id!==id));OB.render();$('#obMdl').innerHTML=telaBib();OB.toast('Orçamento excluído')})},
 novo(){if(S.itens.length){pergunta('Novo orçamento','Começar do zero? O atual continua na biblioteca se você já tiver salvado.',
   ()=>{S.itens=[];BIB._novo()},'Começar novo');return}BIB._novo()},
 _novo(){
  const emp=JSON.parse(JSON.stringify(S.emp));
  const cfg={mult:S.mult,imposto:S.imposto,retencao:S.retencao,margemAlvo:S.margemAlvo,
   fixoMes:S.fixoMes,horasMes:S.horasMes,cubUF:S.cubUF,cubVal:S.cubVal,cubExtra:S.cubExtra};
  S.itens=[];S.cli={tipo:'PJ',nome:'',doc:'',uf:'',cid:'',end:'',contato:'',email:'',fone:''};
  S.objeto='';S.areaConstr=0;S.areaTerr=0;S.custoObra=0;S.desconto=0;S._id=null;S.passo=1;
  const n=BIB.ler().length+1;S.prop='PROP-'+hoje.getFullYear()+'-'+String(n).padStart(3,'0');
  S.data=dBR(new Date());S.emp=emp;Object.assign(S,cfg);
  OB.persist();OB.render();OB.toast('Orçamento novo')}
};


/* Estimativa da quantidade de lotes: área útil dividida pelo lote-padrão,
   com 8% de perda em meios-fios, esquinas e geometria irregular. */
function estLotes(){const L=S.lote,at=num(L.area);
 const vi=at*num(L.pViario)/100, vd=at*num(L.pVerde)/100, ins=at*num(L.pInst)/100;
 const util=Math.max(0,at-vi-vd-ins), al=num(L.lw)*num(L.lp);
 const n=al>0?Math.floor(util*0.92/al):0;
 return{at,vi,vd,ins,util,al,n}}

/* Mostra, antes de clicar, exatamente com que quantidade cada disciplina vai entrar. */

/* Estimativa de quantitativos lineares do parcelamento.
   A tabela de honorários cobra por m² de gleba, mas o profissional precisa da extensão
   das redes para o memorial, para o orçamento de obra e para conferir se o traçado fecha. */
function estRedes(){
 const L=S.lote, e=estLotes(), larg=num(L.larguraVia)>0?num(L.larguraVia):12;
 const ext=larg>0?e.vi/larg:0;                 /* extensão de via = área do viário ÷ largura da caixa */
 return{larg,ext,
  agua:ext*1.05,                               /* uma rede por via, com 5% de ramais de travessia */
  esgoto:ext*1.10,                             /* coletor sob a via, com poços de visita e travessias */
  dren:ext*0.80,                               /* só nas vias com coleta; o restante é superficial */
  energia:ext*1.00,
  meioFio:ext*2,                               /* dois lados da via */
  calcada:ext*2*1.5,                           /* 1,50 m de passeio de cada lado */
  pavim:e.vi-(ext*2*1.5),                      /* o que sobra da caixa é pista */
  lotes:e.n, memoriais:e.n, marcos:Math.max(4,Math.ceil(e.n/10)),
  postes:Math.ceil(ext/35),                    /* um poste a cada 35 m */
  pv:Math.ceil(ext/50)}}                       /* poço de visita a cada 50 m */
function previaEscopo(){
 if(S.escopo==='infra'){
  if(S.tipoInfra==='rod'){const km=num(S.rod.km);
   return km<=0?null:{falta:'',itens:[['Terraplenagem, pavimentação, drenagem, sinalização e cadastro',fmt(km)+' km cada'],
    ['Levantamento topográfico de vias',fmt(km)+' km'],['Estudo de jazidas',S.rod.jazida?'1 mobilização + relatório':'não incluso']]}}
  const at=num(S.lote.area)||num(S.areaTerr), e=estLotes();
  if(at<=0)return null;
  if(S.tipoInfra==='urb')return{itens:[['Urbanização e paisagismo',fmt(at)+' m²'],
   ['Terraplenagem, drenagem e iluminação',fmt(at)+' m²'],['Pavimentação',fmt(at*0.15)+' m²'],['Orçamento',fmt(at)+' m²']]};
  const r=estRedes();
  return{itens:[
   ['Terraplenagem, drenagem, água, esgoto, topografia e orçamento',fmt(at)+' m² — a gleba inteira'],
   ['Pavimentação, rede elétrica e urbanização',fmt(e.vi)+' m² — o sistema viário, '+S.lote.pViario+'%'],
   ['Paisagismo',fmt(e.vd)+' m² — a área verde, '+S.lote.pVerde+'%'],
   ['Cadastro imobiliário e memorial por lote',e.n+' lotes de '+fmt(num(S.lote.lw))+'×'+fmt(num(S.lote.lp))+' m'],
   ['Marcos de concreto',r.marcos+' unidades']],
   redes:r}}
 const ac=num(S.areaConstr), at=num(S.areaTerr);
 if(ac<=0)return null;
 const t=TIPOS.find(x=>x.id===S.tipoEdif)||TIPOS[2];
 const it=[['Arquitetura e todas as disciplinas da edificação',fmt(ac)+' m² construídos'],
  ['Projetos por unidade: gás, PDA e PGRSCC','1 unidade cada']];
 if(at>0)it.push(['Infraestrutura do lote: terraplenagem e drenagem',fmt(at)+' m²'],
  ['Pavimentação do lote',fmt(at*0.2)+' m² — 20% do terreno'],['Rede elétrica do lote',fmt(at*0.15)+' m² — 15%'],
  ['Paisagismo',fmt(at*0.25)+' m² — 25%']);
 it.push(['Tipologia adotada',t.nome]);
 return{itens:it}}
function discsDoTipo(id){const t=TIPOS.find(x=>x.id===id)||TIPOS[2];
 const base=['arquitetura','fundações','estrutura','hidráulico','esgoto','drenagem','elétrico','incêndio'];
 const nm={clima:'climatização',gases:'gases medicinais',cab:'cabeamento',cftv:'CFTV',son:'sonorização',
  acus:'tratamento acústico',cvis:'comunicação visual',glp:'gás',spda:'SPDA',ger:'gerador',irrig:'irrigação',elev:''};
 const ex=(t.extras||[]).map(k=>nm[k]).filter(Boolean);
 return base.concat(ex,['PGRSCC','orçamento']).join(' · ')}
/* ===== telas ===== */
function PM(){
 const sel=S.modo;
 const op=(v,ico,t,sub,itens,cor)=>`
  <button class="mcard ${sel===v?'sl':''}" data-a="modoApp" data-v="${v}">
   <span class="mico" style="background:${cor}">${ico}</span>
   <span class="mtt">${t}${sel===v?' <b class="mok">✓</b>':''}</span>
   <span class="msb">${sub}</span>
   <span class="mls">${itens.map(x=>`<i>${x}</i>`).join('')}</span>
  </button>`;
 return `
 <div class="hero">
  <h2>Quanto custa o seu trabalho — e quanto custa a obra</h2>
  <p>São duas contas distintas e o sistema não mistura uma na outra. Escolha o que você precisa agora — depois, se quiser a outra, é só salvar esta e começar um orçamento novo.</p>
 </div>
 <div class="mgrid" style="grid-template-columns:repeat(auto-fit,minmax(275px,1fr))">
  ${op('projeto','📐','Orçamento de projeto',
    'Seus honorários técnicos, pela tabela de referência.',
    ['Disciplinas por área ou por hora','Compatibilização BIM','Impostos, custo fixo e margem','Proposta assinada para o cliente'],'linear-gradient(135deg,#0A3D91,#1456C8)')}
  ${op('obra','🏗️','Estimativa de obra',
    'Quanto vai custar construir, etapa por etapa. Para edificação, loteamento, condomínio ou rodovia.',
    ['Material e mão de obra separados','Encargo previdenciário e BDI','Cronograma físico-financeiro','Custo por m² ou por lote'],'linear-gradient(135deg,#C4178C,#E0439F)')}

 </div>
 ${sel?`<div class="al g" style="margin-top:4px"><b>${sel==='projeto'?'Orçamento de projeto.':'Estimativa de obra.'}</b>
   ${sel==='obra'?'Você informa o que será construído e o tamanho; o sistema devolve o custo etapa por etapa, com material, mão de obra, encargo, BDI e cronograma.'
    :'Você monta o escopo de serviços e o sistema calcula seus honorários, com impostos, custo fixo e margem.'}
   <div style="margin-top:11px"><button class="bt" data-a="ir" data-v="1">Começar →</button></div></div>`
  :`<div class="al y" style="margin-top:4px">Toque em uma das duas opções acima para começar.</div>`}
 <div class="pills">
  <span>277 preços de referência</span><span>60 disciplinas</span><span>CUB por estado</span>
  <span>Loteamento e rodovia</span><span>PDF, Word e Excel</span><span>Funciona offline</span>
 </div>`}

/* Estimativa de execução da obra, etapa por etapa. */
function POBRA(){
 const o=calcObra(), O=S.obra, ei=estInfra(), eo=estObra();
 const base=S.escopo==='infra'?(ei?ei.total:0):(S.escopo==='edif'?eo.total:eo.total+(ei?ei.total:0));
 let h=`<h2 class="tt">Estimativa de execução da obra</h2>
 <p class="sb">Custo para construir, separado por etapa, com material e mão de obra. Não confundir com honorários de projeto, que estão nas outras etapas.</p>`;
 if(base<=0)return h+`<div class="al y"><b>Falta o tamanho da obra.</b> Informe abaixo e a estimativa aparece na hora.</div>
  <div class="cd"><div class="h3">Tamanho da obra</div><div class="gr g2">
   ${S.escopo!=='infra'?stepper({rot:'Área construída (m²)',path:'areaConstr',val:S.areaConstr,step:50,ex:'1200,00'}):''}
   ${(S.escopo!=='edif'&&S.tipoInfra==='rod')?stepper({rot:'Extensão da via (km)',path:'rod.km',val:S.rod.km,step:1,ex:'12,50'}):''}
   ${(S.escopo!=='edif'&&S.tipoInfra!=='rod')?stepper({rot:'Área da gleba (m²)',path:'lote.area',val:S.lote.area,step:1000,ex:'50000,00'}):''}
   ${S.escopo!=='infra'?`<div><label class="f">Estado para o CUB</label>
    <select data-a2="cubUF"><option value="">— escolha a UF —</option>
     ${Object.keys(CUB).sort().map(u=>`<option value="${u}" ${u===(S.cubUF||S.cli.uf)?'selected':''}>${u} — ${brl(CUB[u])}/m²</option>`).join('')}</select></div>`:''}
  </div>
  <div class="hint" style="margin-top:10px">Pode trocar depois na etapa <b>O trabalho</b>, junto com o padrão construtivo e o grau de dificuldade.</div></div>`;
 h+=`<div class="cd"><div class="h3">Base de custo adotada</div><table class="tb"><tbody>
   ${S.escopo!=='infra'?`<tr><td>Edificação — CUB ${esc(eo.uf||S.cli.uf||'')} ${esc(PADROES[S.cubPadrao][0])}, ${brl(eo.unit)}/m² × ${fmt(eo.area)} m², mais ${(S.cubExtra*100).toFixed(0)}% de itens fora do CUB</td>
    <td style="text-align:right;font-weight:700">${brl(eo.total)}</td></tr>`:''}
   ${(S.escopo!=='edif'&&ei)?`<tr><td>${ei.tipo==='rod'?'Rodovia':'Infraestrutura'} — ${esc(ei.rot)}, ${brl(ei.unit)} por ${esc(ei.un.replace('m² de gleba','m²'))} × ${fmt(ei.qt)}</td>
    <td style="text-align:right;font-weight:700">${brl(ei.total)}</td></tr>`:''}
   <tr style="background:#E8EEF8"><td style="font-weight:800">Custo direto da obra</td>
    <td style="text-align:right;font-weight:800">${brl(o.direto)}</td></tr></tbody></table>
  <div class="hint" style="margin-top:8px">Os parâmetros unitários estão na etapa anterior e são editáveis.</div></div>

 ${(()=>{const at=S.escopo==='infra'?num(S.lote.area):num(S.areaTerr), vm=num(S.terreno.valorM2);
   const vt=at*vm, e=estLotes(), parc=(S.escopo==='infra'&&S.tipoInfra==='lote'&&e.n>0);
   const emp=vt+o.total;
   return `<div class="cd"><div class="h3">Terreno e custo do empreendimento
    ${hp('O custo de construir é metade da conta de quem lança um empreendimento; a outra metade é o terreno. Aqui os dois se somam. Deixe o valor em zero se o terreno já é seu ou se não quer que entre na conta.')}</div>
   <div class="gr g2" style="margin-bottom:12px">
    ${stepper({rot:'Valor do terreno — R$/m²',path:'terreno.valorM2',val:S.terreno.valorM2,step:at>20000?10:50,
      hint:at>0?('área '+fmt(at)+' m² · total '+brl(vt)):'informe a área na etapa O trabalho'})}
    ${parc?stepper({rot:'Preço de venda pretendido por lote (R$)',path:'terreno.vendaLote',val:S.terreno.vendaLote,step:10000,
      hint:'para medir a margem do empreendimento'}):
     stepper({rot:'Preço de venda — R$/m² construído',path:'terreno.vendaM2',val:S.terreno.vendaM2,step:100,
      hint:'para medir a margem do empreendimento'})}
   </div>
   <table class="tb"><tbody>
    <tr><td>Terreno${at>0?' — '+fmt(at)+' m² × '+brl(vm):''}</td><td style="text-align:right;font-weight:700">${brl(vt)}</td></tr>
    <tr><td>Obra</td><td style="text-align:right;font-weight:700">${brl(o.total)}</td></tr>
    <tr style="background:#E8EEF8"><td style="font-weight:800">Custo total do empreendimento</td>
     <td style="text-align:right;font-weight:800;font-size:16px">${brl(emp)}</td></tr>
    ${parc?`<tr><td>Custo por lote — ${e.n} lotes</td><td style="text-align:right;font-weight:700">${brl(emp/e.n)}</td></tr>
     <tr><td>&nbsp;&nbsp;sendo terreno</td><td style="text-align:right;color:var(--mu)">${brl(vt/e.n)}</td></tr>
     <tr><td>&nbsp;&nbsp;sendo urbanização</td><td style="text-align:right;color:var(--mu)">${brl(o.total/e.n)}</td></tr>`
     :(num(S.areaConstr)>0?`<tr><td>Custo por m² construído, com terreno</td>
      <td style="text-align:right;font-weight:700">${brl(emp/num(S.areaConstr))}/m²</td></tr>`:'')}
   </tbody></table>
   ${(()=>{const vgv=parc?num(S.terreno.vendaLote)*e.n:num(S.terreno.vendaM2)*num(S.areaConstr);
     if(vgv<=0)return `<div class="hint" style="margin-top:9px">Informe o preço de venda pretendido para ver a margem do empreendimento.</div>`;
     const lucro=vgv-emp, mg=vgv?lucro/vgv:0;
     return `<table class="tb" style="margin-top:12px"><tbody>
      <tr><td>Receita projetada${parc?' — '+e.n+' lotes':''}</td><td style="text-align:right;font-weight:700">${brl(vgv)}</td></tr>
      <tr><td>(–) Custo total do empreendimento</td><td style="text-align:right;color:var(--vm)">${brl(-emp)}</td></tr>
      <tr style="background:${lucro>=0?'#E8F7EE':'#FDECEC'}"><td style="font-weight:800">Resultado bruto do empreendimento</td>
       <td style="text-align:right;font-weight:800;font-size:16px">${brl(lucro)} · ${pc(mg)}</td></tr>
     </tbody></table>
     <div class="hint" style="margin-top:8px">Margem bruta: não considera corretagem, marketing, tributos sobre a venda, custo financeiro nem o tempo de comercialização.</div>`})()}
   </div>`})()}
 <div class="cd"><div class="h3">Encargos, BDI e tributos ${hp('Benefícios e Despesas Indiretas, pela fórmula do Acórdão 2.622/2013 do TCU. Cobre a administração central, o risco do contrato, as garantias, o custo financeiro, o lucro e os tributos que incidem sobre o faturamento da obra.')}</div>
  ${(S.escopo!=='edif'&&S.tipoInfra!=='rod')?`
   <label class="f">Como tratar o BDI e os encargos nesta estimativa ${hp('Preço de banco (SINAPI, ORSE, SICRO) na coluna COM BDI já traz encargos sociais e BDI embutidos — nesse caso não se soma nada por cima. Se o preço adotado for custo puro, o sistema acrescenta o encargo previdenciário e o BDI.')}</label>
   <div class="ops" style="margin-bottom:16px">
    <button class="op ${S.obra.precoComBDI!==false?'sl':''}" data-a="precoBDI" data-v="1">
     <b>${S.obra.precoComBDI!==false?'✓ ':''}Não somar — já estão no preço</b>
     <small>O total não muda. É o caso das tabelas de referência na coluna “com BDI”. A composição aparece na proposta apenas como demonstrativo.</small></button>
    <button class="op ${S.obra.precoComBDI===false?'sl':''}" data-a="precoBDI" data-v="0">
     <b>${S.obra.precoComBDI===false?'✓ ':''}Somar por cima — preço é custo puro</b>
     <small>O total <b>aumenta</b>: entra o encargo previdenciário sobre a folha e o BDI calculado abaixo sobre o custo.</small></button>
   </div>
   <div class="al ${S.obra.precoComBDI===false?'y':'g'}" style="margin:-6px 0 16px">
    ${S.obra.precoComBDI===false
     ? 'Nesta opção o BDI de <b>'+pc(calcBDI().bdi)+'</b> e o encargo previdenciário <b>são acrescentados</b> ao custo direto. Por isso aparecem como fatia própria nos gráficos.'
     : 'Nesta opção <b>nada é acrescentado</b> ao total. O BDI e o encargo já estão dentro dos preços e aparecem nos gráficos separados de dentro do próprio total.'}
   </div>`:''}
  ${o.jaComBDI?`<div class="al y"><b>Encargos e BDI já estão nos preços unitários</b> — não são somados de novo.
    Os percentuais abaixo valem como demonstrativo da composição, que é o que o cliente público pede.</div>`
   :`<label class="f">Regime do INSS ${hp('A Lei 8.212/91 fixa a contribuição patronal sobre a folha. A Lei 12.546/11 permite à construção civil optar pela CPRB sobre a receita. Confirme o enquadramento com a contabilidade.')}</label>
    <div class="ops" style="margin-bottom:16px">${REGIMES_INSS.map((r,i)=>`<button class="op ${i===S.obra.regime?'sl':''}" data-a="regIn" data-v="${i}">
      <b>${r[0]}</b><small>${r[3]}</small></button>`).join('')}</div>`}
  ${(()=>{const B=calcBDI();
   return `<div class="gr g3">
    ${stepper({rot:'Administração central (%)',path:'obra.bdiComp.ac',val:B.b.ac,step:0.5})}
    ${stepper({rot:'Seguro e risco (%)',path:'obra.bdiComp.sr',val:B.b.sr,step:0.1})}
    ${stepper({rot:'Garantia (%)',path:'obra.bdiComp.g',val:B.b.g,step:0.1})}
    ${stepper({rot:'Despesas financeiras (%)',path:'obra.bdiComp.df',val:B.b.df,step:0.1})}
    ${stepper({rot:'Lucro (%)',path:'obra.bdiComp.l',val:B.b.l,step:0.5})}
   </div>
   <div class="h3" style="margin:16px 0 10px">Tributos sobre o faturamento</div>
   <div class="gr g3">
    ${stepper({rot:'PIS (%)',path:'obra.bdiComp.pis',val:B.b.pis,step:0.05})}
    ${stepper({rot:'COFINS (%)',path:'obra.bdiComp.cofins',val:B.b.cofins,step:0.1})}
    ${stepper({rot:'ISS (%)',path:'obra.bdiComp.iss',val:B.b.iss,step:0.5,aj:'Alíquota do município da obra. Varia de 2% a 5%.'})}
    ${stepper({rot:'CPRB sobre a receita (%)',path:'obra.bdiComp.cprb',val:B.b.cprb,step:0.5,aj:'Só para quem optou pela desoneração da folha. Se recolhe sobre a folha, zere.'})}
   </div>
   <table class="tb" style="margin-top:14px"><tbody>
    <tr><td>Tributos sobre o faturamento</td><td style="text-align:right;font-weight:700">${pc(B.T)}</td></tr>
    <tr style="background:#E8EEF8"><td style="font-weight:800">BDI calculado</td>
     <td style="text-align:right;font-weight:800;font-size:17px">${pc(B.bdi)}</td></tr>
    <tr><td colspan="2" style="font-size:12px;color:var(--mu)">${esc(B.faixa)} — o TCU aponta de 19% a 27% para infraestrutura urbana e de 20% a 25% para edificações.</td></tr>
   </tbody></table>
   ${o.jaComBDI?`<div class="al y" style="margin-top:12px"><b>Aqui o BDI não é somado de novo</b> — os preços unitários adotados já vêm com BDI.
     O cálculo acima vale como demonstrativo e sai no relatório, para o cliente ver a composição.</div>`
    :`<div class="al g" style="margin-top:12px">Este BDI de <b>${pc(B.bdi)}</b> está sendo aplicado sobre o custo da obra.</div>`}`})()}
 </div>
 <div class="cd"><div class="h3">Acrescentar itens à mão
   ${hp('A estimativa automática trabalha por etapas e coeficientes. Use esta lista para o que for específico da sua obra e não cabe num coeficiente: muro de arrimo, estação elevatória, portaria, poço artesiano, obra de arte, ligação de concessionária, o que for.')}</div>
  ${(S.obra.extras&&S.obra.extras.length)?`<table class="tb"><thead><tr><th>Serviço</th><th>Un.</th><th>Quant.</th><th>Preço unit.</th><th>% mat.</th><th>% equip.</th><th>Total</th><th></th></tr></thead><tbody>
   ${S.obra.extras.map((x,i)=>`<tr>
    <td><input type="text" value="${esc(x.nome||'')}" data-ex="${i}" data-k="nome" placeholder="ex.: Estação elevatória de esgoto" style="padding:8px;font-size:13px"></td>
    <td style="width:78px"><input type="text" value="${esc(x.un||'un')}" data-ex="${i}" data-k="un" style="padding:8px;font-size:13px;text-align:center"></td>
    <td style="width:104px"><input type="text" inputmode="decimal" value="${esc(x.qt||'')}" data-ex="${i}" data-k="qt" data-num="1" style="padding:8px;font-size:13px;text-align:right"></td>
    <td style="width:124px"><input type="text" inputmode="decimal" value="${esc(x.pu||'')}" data-ex="${i}" data-k="pu" data-num="1" style="padding:8px;font-size:13px;text-align:right"></td>
    <td style="width:74px"><input type="text" inputmode="decimal" value="${x.mat==null?50:Math.round(num(x.mat)*100)}" data-ex="${i}" data-k="matpc" data-num="1" style="padding:8px;font-size:13px;text-align:right"></td>
    <td style="width:74px"><input type="text" inputmode="decimal" value="${x.eq==null?8:Math.round(num(x.eq)*100)}" data-ex="${i}" data-k="eqpc" data-num="1" style="padding:8px;font-size:13px;text-align:right"></td>
    <td style="text-align:right;font-weight:700;white-space:nowrap">${brl(num(x.qt)*num(x.pu))}</td>
    <td style="width:44px"><button class="ic dg" data-a="exDel" data-i="${i}">✕</button></td></tr>`).join('')}
   <tr style="background:#E8EEF8"><td colspan="6" style="font-weight:800">Subtotal acrescentado</td>
    <td style="text-align:right;font-weight:800">${brl(S.obra.extras.reduce((a,x)=>a+num(x.qt)*num(x.pu),0))}</td><td></td></tr>
  </tbody></table>`:`<div class="hint">Nenhum item acrescentado. A estimativa está só com as etapas automáticas.</div>`}
  <div style="margin-top:12px"><button class="bt" data-a="exAdd">+ Acrescentar item</button></div>
  <div class="hint" style="margin-top:9px">Informe o preço unitário já com BDI e encargos, como vem do SINAPI, do ORSE ou da sua composição.</div>
 </div>
 <div class="cd"><div class="h3">Fechamento</div><table class="tb"><tbody>
  <tr><td>Material e insumos</td><td style="text-align:right">${brl(o.mat)} · ${pc(o.mat/o.direto)}</td></tr>
  <tr><td>Mão de obra</td><td style="text-align:right">${brl(o.mo)} · ${pc(o.mo/o.direto)}</td></tr>
  <tr><td>Equipamentos</td><td style="text-align:right">${brl(o.eq)} · ${pc(o.eq/o.direto)}</td></tr>
  <tr><td style="font-weight:800">Custo direto</td><td style="text-align:right;font-weight:800">${brl(o.direto)}</td></tr>
  ${o.jaComBDI?`<tr><td colspan="2" style="font-size:12px;color:var(--mu);padding-top:12px">
    <b>Apenas como referência</b> — não entra na soma, já está dentro do custo direto acima:</td></tr>
  <tr><td style="color:var(--mu)">· custo sem BDI</td><td style="text-align:right;color:var(--mu)">${brl(o.custoSemBDI)}</td></tr>
  <tr><td style="color:var(--mu)">· BDI embutido (${pc(o.taxaBDI)})</td><td style="text-align:right;color:var(--mu)">${brl(o.bdiEmb)}</td></tr>
  <tr><td style="color:var(--mu)">· encargo previdenciário embutido (${esc(o.reg[0])})</td><td style="text-align:right;color:var(--mu)">${brl(o.encEmb)}</td></tr>`
   :`<tr><td>Folha estimada (70% da mão de obra)</td><td style="text-align:right">${brl(o.folha)}</td></tr>
  <tr><td>Encargo previdenciário — ${esc(o.reg[0])}</td><td style="text-align:right">${brl(o.inss||o.cprb)}</td></tr>
  <tr><td style="font-weight:800">Custo da obra</td><td style="text-align:right;font-weight:800">${brl(o.custo)}</td></tr>
  <tr><td>BDI — ${pc(o.taxaBDI)}</td><td style="text-align:right">${brl(o.bdi)}</td></tr>`}
  <tr style="background:#E8F7EE"><td style="font-weight:800;font-size:15px">ESTIMATIVA TOTAL DA OBRA</td>
   <td style="text-align:right;font-weight:800;font-size:16px">${brl(o.total)}</td></tr>
  ${o.porM2?`<tr><td>Custo por m² construído</td><td style="text-align:right;font-weight:700">${brl(o.porM2)}/m²</td></tr>`:''}
 </tbody></table></div>

 <div class="cd"><div class="h3">Cronograma estimado da obra — ${o.meses} meses</div>
  <table class="tb"><thead><tr><th>Etapa</th><th>Início</th><th>Duração</th><th>Desembolso</th></tr></thead><tbody>
  ${o.lin.map(x=>`<tr><td>${esc(x.etapa)}</td>
   <td>mês ${Math.max(1,Math.round(x.ini+1))}</td><td>${x.dur<1?'menos de 1 mês':fmt(x.dur).replace(',00','')+' meses'}</td>
   <td style="text-align:right;font-weight:700">${fmt(x.total*(o.total/o.direto))}</td></tr>`).join('')}
  </tbody></table>
  <div class="hint" style="margin-top:8px">Prazo estimado pelo porte e pela complexidade da obra, com as etapas se sobrepondo como acontece em canteiro.
   O cronograma definitivo sai do planejamento da construtora.</div></div>
 <div class="gr g2">
  <div class="cd"><div class="h3">Como o total se reparte</div>
   ${rosca([{k:'Material e insumos',v:o.mat},{k:'Mão de obra',v:o.mo},{k:'Equipamentos',v:o.eq}]
      .concat((o.inss||o.cprb)>0?[{k:'Encargo previdenciário',v:o.inss||o.cprb}]:[])
      .concat(o.bdi>0?[{k:'BDI',v:o.bdi}]:[]))}</div>
  <div class="cd"><div class="h3">Todas as etapas, da maior para a menor</div>
   ${barrasH(o.lin.slice().sort((a,b)=>b.total-a.total).map(x=>({curto:x.etapa,v:x.total})),560,99)}</div>
 </div>
 <div class="al y">Estimativa paramétrica para ordem de grandeza, a partir do CUB e de referências de mercado.
  Não substitui orçamento analítico com composições SINAPI ou SICRO, nem dispensa a conferência do enquadramento previdenciário com a contabilidade.</div>`;
 return h}

function P0(){const e=S.emp,epf=e.tipo==='PF',vd=validaDoc(e.tipo,e.cnpj);
 return`<h2 class="tt">Seus dados — quem envia a proposta</h2>
 <p class="sb">Preenchidos uma vez só: ficam salvos neste navegador e entram no carimbo e na assinatura de toda proposta que você gerar.</p>
 <div class="cd">
  <label class="f">Você emite como</label>
  <div class="seg" style="max-width:340px;margin-bottom:15px">
   <button class="${epf?'':'on'}" data-a="tipoEmp" data-v="PJ">Pessoa jurídica</button>
   <button class="${epf?'on':''}" data-a="tipoEmp" data-v="PF">Pessoa física</button>
  </div>
  <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">
  <div style="text-align:center">
   <label class="f">Sua logo</label>
   <div class="lgbox" data-a="logo">${e.logo?`<img src="${esc(e.logo)}" alt="logo">`:'clique para<br>enviar'}</div>
   ${e.logo?`<button class="bt sec" style="padding:6px 10px;font-size:12px;margin-top:7px" data-a="tiraLogo">Remover</button>`:''}
   <div class="ex" style="max-width:94px">PNG, até 900 KB</div>
  </div>
  <div style="flex:1;min-width:260px"><div class="gr g2">
   ${campo({rot:epf?'Seu nome completo':'Razão social',path:'emp.nome',val:e.nome,
     ph:epf?'João da Silva':'Office BIM Projetos Ltda',
     ex:epf?'como consta no seu documento':'razão social, como no cartão CNPJ'})}
   ${campo({rot:epf?'CPF':'CNPJ',path:'emp.cnpj',val:e.cnpj,ph:epf?'000.000.000-00':'00.000.000/0001-00',im:'numeric',max:epf?14:18,
     cls:vd.ok===true?'good':(vd.ok===false?'bad':''),msg:vd.msg,msgCls:vd.ok===true?'ok':(vd.ok===false?'er':''),
     ex:epf?'11 dígitos — pontuação automática':'digite os 14 dígitos e os dados vêm da Receita'})}
   ${campo({rot:'Responsável técnico',path:'emp.resp',val:e.resp,ph:'João da Silva',ex:'nome completo de quem assina',
     aj:'Quem assina a RRT no CAU (arquitetos) ou a ART no CREA (engenheiros). É o nome que vai na linha de assinatura da proposta.'})}
   ${campo({rot:'Registro profissional',path:'emp.reg',val:e.reg,ph:'CAU A123456-7 ou CREA-SE 1234567890',ex:'CAU A123456-7 · CREA-SE 1234567890 · CREA-SP 0601234567'})}
   ${campo({rot:'Telefone',path:'emp.fone',val:e.fone,ph:'(79) 99999-9999',im:'tel',max:15,ex:'DDD + número'})}
   ${campo({rot:'E-mail',path:'emp.email',val:e.email,ph:'contato@seudominio.com.br',tipo:'email',
     cls:validaEmail(e.email)===false?'bad':'',msg:validaEmail(e.email)===false?'E-mail incompleto — falta o @ ou o domínio':'',msgCls:'er'})}
   ${campo({rot:'Site',path:'emp.site',val:e.site,ph:'www.seudominio.com.br'})}
   ${campo({rot:'Endereço',path:'emp.end',val:e.end,ph:'Rua das Mangueiras, 120 — Aracaju/SE'})}
  </div></div>
 </div></div>`}

function P1(){const c=S.cli,vd=validaDoc(c.tipo,c.doc),pf=c.tipo==='PF';
 const cids=CIDADES[c.uf]||[];
 return`<h2 class="tt">Para quem é a proposta</h2>
 <p class="sb">Escolha primeiro se o cliente é pessoa física ou jurídica: o campo do documento muda e o número é conferido na hora.</p>
 <div class="cd">
  <label class="f">Tipo de cliente</label>
  <div class="seg" style="max-width:340px;margin-bottom:14px">
   <button class="${pf?'':'on'}" data-a="tipoCli" data-v="PJ">Pessoa jurídica</button>
   <button class="${pf?'on':''}" data-a="tipoCli" data-v="PF">Pessoa física</button>
  </div>
  <div class="gr g2">
   ${campo({rot:pf?'Nome completo':'Razão social',path:'cli.nome',val:c.nome,
     ph:pf?'Maria Souza Lima':'Construtora Alfa Ltda',
     ex:pf?'nome completo, como no documento':'razão social, como no cartão CNPJ'})}
   ${campo({rot:pf?'CPF':'CNPJ',path:'cli.doc',val:c.doc,ph:pf?'000.000.000-00':'00.000.000/0001-00',
     im:'numeric',max:pf?14:18,cls:vd.ok===true?'good':(vd.ok===false?'bad':''),
     msg:vd.msg,msgCls:vd.ok===true?'ok':(vd.ok===false?'er':''),
     ex:pf?'11 dígitos — a pontuação é automática':'digite os 14 dígitos e os dados vêm da Receita'})}
   <div><label class="f">CEP da obra${hp('Digite os 8 dígitos e o endereço, bairro, cidade e estado são preenchidos sozinhos pelos Correios. Se o CEP não existir ou você estiver sem internet, preencha à mão.')}</label>
    <input type="text" inputmode="numeric" maxlength="9" value="${esc(c.cep)}" placeholder="49000-000" data-cep="1">
    <div class="ex">Digite os 8 dígitos — rua, bairro, cidade e UF vêm sozinhos</div></div>
   <div><label class="f">Estado (UF)${hp('Preenchido pelo CEP. Dá para trocar à mão, e a lista de cidades ao lado passa a sugerir as principais do estado escolhido.')}</label>
    <select data-in="cli.uf"><option value="">— escolha —</option>
     ${Object.keys(CIDADES).sort().map(u=>`<option ${u===c.uf?'selected':''}>${u}</option>`).join('')}</select>
    <div class="ex">Exemplo: SE</div></div>
   ${campo({rot:'Cidade',path:'cli.cid',val:c.cid,ph:c.uf?('ex.: '+cids[0]):'escolha o estado antes',
     list:'lcid',ex:c.uf?cids.slice(0,4).join(' · '):'selecione a UF para ver sugestões'})}
   ${campo({rot:'Bairro',path:'cli.bairro',val:c.bairro,ph:'Centro'})}
   ${campo({rot:'Endereço da obra',path:'cli.end',val:c.end,ph:'Av. Beira Mar, 1500'})}
   ${campo({rot:'Pessoa de contato',path:'cli.contato',val:c.contato,ph:'Carlos Mendes — Setor de Engenharia'})}
   ${campo({rot:'Telefone do contato',path:'cli.fone',val:c.fone,ph:'(79) 3211-0000',im:'tel',max:15})}
   ${campo({rot:'E-mail do contato',path:'cli.email',val:c.email,ph:'engenharia@cliente.com.br',tipo:'email',
     cls:validaEmail(c.email)===false?'bad':'',msg:validaEmail(c.email)===false?'E-mail incompleto':'',msgCls:'er'})}
  </div>
  <datalist id="obLcid">${cids.map(x=>`<option value="${esc(x)}">`).join('')}</datalist>
 </div>
 <div class="cd"><div class="h3">A proposta</div><div class="gr g3">
  ${campo({rot:'Objeto',path:'objeto',val:S.objeto,ph:'Projeto executivo completo de escola municipal com 1.200 m²',
    ex:'diga o que será entregue e a área',
    aj:'Uma frase que o cliente lê primeiro. Bom: projeto executivo em BIM de unidade de saúde com 1.800 m². Ruim: projetos de engenharia.'})}
  ${campo({rot:'Nº da proposta',path:'prop',val:S.prop,ph:'PROP-2026-001',ex:'crie um padrão e não repita; em revisão use -R1'})}
  ${campo({rot:'Data',path:'data',val:S.data,ph:'02/10/2026',ex:'dd/mm/aaaa'})}
  ${stepper({rot:'Validade (dias)',path:'validade',val:S.validade,step:5,ex:'30 dias é o usual'})}
 </div></div>`}

function P2(){
 const E=S.escopo;
 const card=(v,t,sub,on)=>`<button class="op ${on?'sl':''}" data-a="escopo" data-v="${v}">
   <b>${on?'✓ ':''}${t}</b><small>${sub}</small></button>`;
 let h=`<h2 class="tt">O que você vai orçar?</h2>
 <p class="sb">Escolha o caminho. As perguntas seguintes mudam conforme a resposta — você só vê o que é do seu caso.</p>
 <div class="cd"><div class="ops" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
  ${card('edif','Edificação','prédio, casa, galpão, equipamento público',E==='edif')}
  ${card('infra','Infraestrutura','loteamento, condomínio, urbanização, rodovia',E==='infra')}
  ${card('ambos','Os dois juntos','a edificação e a infraestrutura do terreno',E==='ambos')}
 </div></div>`;
 if(!E)return h+`<div class="al y">Escolha uma das opções acima para continuar.</div>`;

 /* ---------- EDIFICAÇÃO ---------- */
 if(E==='edif'||E==='ambos'){
  h+=`<div class="cd"><div class="h3">A edificação</div>
   <label class="f">Que tipo é ${hp('O tipo define o preço da tabela de referência e o conjunto de disciplinas que costuma entrar. A dificuldade do projeto é escolhida à parte, mais abaixo: uma residência pode perfeitamente ser nível 4 ou 5.')}</label>
   <div class="ops" style="margin-bottom:14px">${TIPOS.map(x=>`<button class="op ${x.id===S.tipoEdif?'sl':''}" data-a="tipoEdif" data-v="${x.id}">
    <b>${x.nome}</b><small>${x.ex}</small></button>`).join('')}</div>
   <div class="hint" style="margin:-4px 0 12px">O tipo define o preço de tabela e as disciplinas sugeridas. A dificuldade do projeto você escolhe logo abaixo, e não depende do tipo.</div>
   <div class="gr g2">
    ${stepper({rot:'Área construída (m²)',path:'areaConstr',val:S.areaConstr,step:50,ex:'1200,00',
      aj:'Área construída total. É a base de quase todas as disciplinas da edificação.'})}
    ${E==='edif'?stepper({rot:'Área do terreno (m²)',path:'areaTerr',val:S.areaTerr,step:100,ex:'3000,00',
      hint:'deixe 0 se não há obra externa',
      aj:'Duas funções: define a quantidade dos serviços de infraestrutura do lote (terraplenagem, pavimentação, drenagem e rede elétrica) e entra no custo total do empreendimento junto com o valor do terreno.'}):''}

   </div>
   <div class="hint" style="margin-top:11px">Disciplinas deste tipo: <b>${esc(discsDoTipo(S.tipoEdif))}</b></div></div>`}

 /* ---------- INFRAESTRUTURA ---------- */
 if(E==='infra'||E==='ambos'){
  const T=S.tipoInfra;
  h+=`<div class="cd"><div class="h3">A infraestrutura</div>
   <label class="f">Qual é o caso</label>
   <div class="ops" style="margin-bottom:14px">
    <button class="op ${T==='lote'?'sl':''}" data-a="tipoInfra" data-v="lote"><b>Parcelamento do solo</b>
     <small>loteamento aberto, condomínio fechado ou conjunto habitacional — com lotes e áreas comuns</small></button>
    <button class="op ${T==='urb'?'sl':''}" data-a="tipoInfra" data-v="urb"><b>Urbanização de área</b>
     <small>praça, parque, calçadão, terminal — sem parcelar em lotes</small></button>
    <button class="op ${T==='rod'?'sl':''}" data-a="tipoInfra" data-v="rod"><b>Rodovia ou via de acesso</b>
     <small>estrada, acesso, duplicação — cobrado por quilômetro</small></button>
   </div>`;

  if(T==='lote'){const L=S.lote,e=estLotes();
   h+=`<div class="gr g2" style="margin-bottom:12px">
    ${stepper({rot:'Área total da gleba (m²)',path:'lote.area',val:L.area,step:1000,ex:'50000,00',
      aj:'Área total do terreno a ser parcelado. Dela saem as áreas públicas e a área útil dos lotes.'})}
    <div><label class="f">É condomínio fechado?${hp('No condomínio as vias e áreas comuns são privadas e as exigências de área pública mudam. O cálculo é o mesmo; muda a destinação jurídica, que você descreve no memorial.')}</label>
     <div class="seg"><button class="${L.cond?'':'on'}" data-a="loteCond" data-v="0">Loteamento aberto</button>
      <button class="${L.cond?'on':''}" data-a="loteCond" data-v="1">Condomínio</button></div></div>
   </div>
   <label class="f">Destinação das áreas — percentuais ${hp('A Lei 6.766/79 exige destinação de área pública e o percentual exato vem do plano diretor do município. Os valores abaixo são a prática mais comum. Confira na legislação local.')}</label>
   <div class="gr g3">
    ${stepper({rot:'Sistema viário (%)',path:'lote.pViario',val:L.pViario,step:1,hint:'ruas e calçadas'})}
    ${stepper({rot:'Área verde (%)',path:'lote.pVerde',val:L.pVerde,step:1,hint:'praças e preservação'})}
    ${stepper({rot:'Institucional (%)',path:'lote.pInst',val:L.pInst,step:1,hint:'equipamentos públicos'})}
   </div>
   <label class="f" style="margin-top:14px">Lote padrão ${hp('Informe a testada e a profundidade do lote típico. A quantidade de lotes é calculada pela planilha, não precisa contar.')}</label>
   <div class="gr g3">
    ${stepper({rot:'Testada (m)',path:'lote.lw',val:L.lw,step:1,ex:'12,00'})}
    ${stepper({rot:'Profundidade (m)',path:'lote.lp',val:L.lp,step:1,ex:'30,00'})}
    <div><label class="f">Área do lote</label><input readonly value="${fmt(e.al)} m²"></div>
   </div>
   ${e.at>0?`<table class="tb" style="margin-top:13px"><tbody>
    <tr><td>Sistema viário — ${L.pViario}%</td><td style="text-align:right">${fmt(e.vi)} m²</td></tr>
    <tr><td>Área verde — ${L.pVerde}%</td><td style="text-align:right">${fmt(e.vd)} m²</td></tr>
    <tr><td>Área institucional — ${L.pInst}%</td><td style="text-align:right">${fmt(e.ins)} m²</td></tr>
    <tr><td style="font-weight:800">Área útil para lotes</td><td style="text-align:right;font-weight:800">${fmt(e.util)} m²</td></tr>
    <tr style="background:#E8F7EE"><td style="font-weight:800">Lotes estimados de ${fmt(num(L.lw))} × ${fmt(num(L.lp))} m</td>
     <td style="text-align:right;font-weight:800;font-size:16px">${e.n} lotes</td></tr>
   </tbody></table>
   <div class="hint" style="margin-top:7px">Estimativa com 8% de perda em meios-fios, esquinas e geometria irregular. O número exato só sai do projeto urbanístico.</div>
   <div class="h3" style="margin:18px 0 10px">Quantitativos estimados das redes ${hp('Saem da área do viário dividida pela largura da caixa de via. Servem para o memorial descritivo, para o orçamento de obra e para conferir se o traçado fecha com a área informada.')}</div>
   <div class="gr g2" style="margin-bottom:12px">
    ${stepper({rot:'Largura da caixa de via (m)',path:'lote.larguraVia',val:S.lote.larguraVia,step:1,
      hint:'pista + passeios dos dois lados',ex:'12,00 em via local · 16,00 em coletora'})}
    <div><label class="f">Extensão total de via</label><input readonly value="${fmt(estRedes().ext)} m">
     <div class="hint">${fmt(e.vi)} m² de viário ÷ ${fmt(estRedes().larg)} m de caixa</div></div>
   </div>
   ${(()=>{const r=estRedes(); if(r.ext<=0)return '';
    return `<table class="tb"><thead><tr><th>Quantitativo</th><th>Estimativa</th><th>Critério</th></tr></thead><tbody>
     <tr><td>Rede de abastecimento de água</td><td style="text-align:right;font-weight:700">${fmt(r.agua)} m</td><td style="font-size:11.5px;color:var(--mu)">uma rede por via + 5% de travessias</td></tr>
     <tr><td>Rede coletora de esgoto</td><td style="text-align:right;font-weight:700">${fmt(r.esgoto)} m</td><td style="font-size:11.5px;color:var(--mu)">coletor sob a via + 10% de travessias</td></tr>
     <tr><td>Drenagem de águas pluviais</td><td style="text-align:right;font-weight:700">${fmt(r.dren)} m</td><td style="font-size:11.5px;color:var(--mu)">80% das vias com coleta em rede</td></tr>
     <tr><td>Rede de distribuição de energia</td><td style="text-align:right;font-weight:700">${fmt(r.energia)} m</td><td style="font-size:11.5px;color:var(--mu)">acompanha o eixo da via</td></tr>
     <tr><td>Poços de visita</td><td style="text-align:right;font-weight:700">${r.pv} un</td><td style="font-size:11.5px;color:var(--mu)">um a cada 50 m</td></tr>
     <tr><td>Postes de iluminação</td><td style="text-align:right;font-weight:700">${r.postes} un</td><td style="font-size:11.5px;color:var(--mu)">um a cada 35 m</td></tr>
     <tr><td>Meio-fio</td><td style="text-align:right;font-weight:700">${fmt(r.meioFio)} m</td><td style="font-size:11.5px;color:var(--mu)">dois lados da via</td></tr>
     <tr><td>Passeio / calçada</td><td style="text-align:right;font-weight:700">${fmt(r.calcada)} m²</td><td style="font-size:11.5px;color:var(--mu)">1,50 m de cada lado</td></tr>
     <tr><td>Pista a pavimentar</td><td style="text-align:right;font-weight:700">${fmt(Math.max(0,r.pavim))} m²</td><td style="font-size:11.5px;color:var(--mu)">viário menos os passeios</td></tr>
     <tr style="background:#E8F7EE"><td style="font-weight:800">Memoriais descritivos de lote</td>
      <td style="text-align:right;font-weight:800">${r.memoriais} un</td><td style="font-size:11.5px;color:var(--mu)">um por lote</td></tr>
    </tbody></table>
    <div class="hint" style="margin-top:8px">Quantitativos de apoio para o memorial e o orçamento. A tabela de honorários cobra por m² de gleba, então eles não alteram o valor do projeto — mas são o que o cliente pergunta.</div>`})()}
   ${e.util<=0?`<div class="al r" style="margin-top:10px">Os percentuais somam mais que a área total. Reveja.</div>`:''}`:''}`}

  if(T==='urb'){
   h+=`<div class="gr g2">
    ${stepper({rot:'Área a urbanizar (m²)',path:'lote.area',val:S.lote.area,step:500,ex:'8000,00',
      aj:'Área de intervenção: praça, parque, calçadão, estacionamento, terminal. A tabela cobra urbanização por faixa de área.'})}
    ${stepper({rot:'Área verde / botânica (m²)',path:'lote.pVerde',val:S.lote.pVerde,step:5,
      hint:'em % da área, para o paisagismo'})}
   </div>`}

  if(T==='rod'){const R=S.rod;
   h+=`<div class="gr g2" style="margin-bottom:12px">
    ${stepper({rot:'Extensão (km)',path:'rod.km',val:R.km,step:1,ex:'12,50',
      aj:'A tabela cobra projeto de via por quilômetro: terraplenagem, pavimentação, drenagem e sinalização.'})}
    ${stepper({rot:'Largura da pista (m)',path:'rod.pista',val:R.pista,step:1,hint:'entra na estimativa de custo da obra'})}
   </div>
   <div class="ops">
    <button class="op ${R.drenCompl?'sl':''}" data-a="rodOpt" data-v="drenCompl"><b>${R.drenCompl?'✓ ':''}Drenagem complexa</b>
     <small>canais e galerias, no lugar de tubulação</small></button>
    <button class="op ${R.sinal?'sl':''}" data-a="rodOpt" data-v="sinal"><b>${R.sinal?'✓ ':''}Sinalização</b>
     <small>vertical e horizontal</small></button>
    <button class="op ${R.jazida?'sl':''}" data-a="rodOpt" data-v="jazida"><b>${R.jazida?'✓ ':''}Estudo de jazidas</b>
     <small>quando há indicação de jazida</small></button>
   </div>`}
  h+=`</div>`}

 /* ---------- COMUM ---------- */
 if(S.modo==='obra')return h+`<div class="cd"><div class="h3">Grau de dificuldade da obra ${hp('Afeta o prazo estimado de execução.')}</div>
  <div class="ops">${NIVEIS.map((n,i)=>`<button class="op ${i===S.nivel?'sl':''}" data-a="niv" data-v="${i}">
   <b>${n[0]}</b><span class="fx">prazo × ${n[1].toFixed(2)}</span><small>${n[2]}</small></button>`).join('')}</div></div>`;
 h+=`<div class="cd"><div class="h3">Serviços adicionais</div><div class="ops">
   <button class="op ${S.gestao?'sl':''}" data-a="togg" data-v="gestao"><b>${S.gestao?'✓ ':''}Gestão e consultoria</b>
    <small>coordenação BIM, visitas de obra e protocolo — cobrado por hora</small></button>
   <button class="op ${S.levant?'sl':''}" data-a="togg" data-v="levant"><b>${S.levant?'✓ ':''}Topografia e sondagem</b>
    <small>levantamento planialtimétrico e sondagem do terreno</small></button>
  </div></div>
 <div class="cd"><div class="h3">Grau de dificuldade e detalhe</div>
  <label class="f">Complexidade ${hp('Multiplica as horas e a compatibilização. Não multiplica os preços de tabela, que são valores máximos.')}</label>
  <div class="ops" style="margin-bottom:14px">${NIVEIS.map((n,i)=>`<button class="op ${i===S.nivel?'sl':''}" data-a="niv" data-v="${i}">
   <b>${n[0]}</b><span class="fx">× ${n[1].toFixed(2)}</span><small>${n[2]}</small></button>`).join('')}</div>
  <label class="f">Até que ponto o modelo vai ser detalhado — LOD ${hp('LOD é o nível de desenvolvimento do modelo BIM. Quanto maior, mais informação ele carrega, mais horas de modelagem e verificação consome, e maior a responsabilidade assumida. LOD 300 é o padrão do projeto executivo.')}</label>
  <div class="ops">${LODS.map((n,i)=>`<button class="op ${i===S.lod?'sl':''}" data-a="lod" data-v="${i}">
   <b><span style="font-size:17px;margin-right:6px">${n[3]}</span>${n[0]}</b>
   <span class="fx">horas × ${n[1].toFixed(2)}</span><small>${n[2]}</small></button>`).join('')}</div>
  <div class="hint" style="margin-top:12px"><label style="display:flex;gap:9px;align-items:flex-start;cursor:pointer">
   <input type="checkbox" style="width:auto;margin-top:2px" ${S.lodNaTabela?'checked':''} data-chk="lodNaTabela">
   <span>Aplicar o LOD também aos serviços cobrados por quantidade (m², km, unidade).
   <b style="color:var(--vm)">Deixe desligado em contrato público</b> — a tabela fixa valores máximos.</span></label></div>
  <div class="al ${S.lodNaTabela?'g':'y'}" style="margin:12px 0 0">
   <b>Onde o LOD ${LODS[S.lod][0].split('—')[0].trim()} está incidindo agora:</b>
   ${S.lodNaTabela
     ? 'em tudo — serviços por quantidade, serviços por hora e compatibilização, todos multiplicados por '+LODS[S.lod][1].toFixed(2)+'.'
     : 'apenas nos serviços por hora e na compatibilização (× '+LODS[S.lod][1].toFixed(2)+'). Os serviços cobrados por quantidade seguem o preço cheio da tabela. Marque a caixa acima se quiser que incida em tudo.'}</div></div>
`;
 return h}

function P3(){const c=calc();
 return`<h2 class="tt">Monte o escopo</h2>
 <p class="sb">O botão verde monta tudo sozinho a partir do que você respondeu. Depois, cada serviço é um cartão: você troca, remove ou acrescenta à vontade.
 Dentro do cartão são três escolhas em cadeia — <b>área</b> do serviço, <b>disciplina</b> e <b>serviço</b> — e o preço da faixa certa aparece pela quantidade que você digitar.</p>
 <div class="bar">
  <button class="bt ok" data-a="montar">✨ Montar escopo automático${S.escopo==='edif'?' da edificação':(S.escopo==='infra'?(S.tipoInfra==='rod'?' da via':' da infraestrutura'):' completo')}</button>
  <button class="bt" data-a="add">+ Serviço por quantidade</button>
  <button class="bt mg" data-a="addHora">+ Serviço por hora</button>
  ${S.escopo!=='infra'?`<button class="bt sec" data-a="pac" data-v="edif">⚡ Disciplinas da edificação</button>`:''}
  ${S.escopo!=='edif'?`<button class="bt sec" data-a="pac" data-v="infra">⚡ Redes e vias automáticas</button>`:''}
  <button class="bt sec" data-a="pac" data-v="gestao">⚡ Gestão por hora</button>
  ${S.itens.length?`<button class="bt sec" data-a="limpar" style="color:var(--vm)">🗑 Limpar tudo</button>`:''}
 </div>
 ${(()=>{const p=previaEscopo();
  if(!p)return `<div class="al r"><b>Falta informar o tamanho.</b> Volte à etapa <b>O trabalho</b> e preencha
   ${S.escopo==='infra'?(S.tipoInfra==='rod'?'a extensão da via em quilômetros':'a área da gleba'):'a área construída'}.
   Sem isso o botão verde não tem como calcular as quantidades.</div>`;
  return `<div class="cd" style="border-left:5px solid var(--ok)"><div class="h3">O botão verde vai gerar isto</div>
   <table class="tb"><tbody>${p.itens.map(x=>`<tr><td>${esc(x[0])}</td>
    <td style="text-align:right;font-weight:700;white-space:nowrap">${esc(x[1])}</td></tr>`).join('')}</tbody></table>
   <div class="hint" style="margin-top:8px">Cada quantidade sai de uma regra sobre o que você informou. Depois de gerar, dá para mudar item por item.</div></div>`})()}
${(()=>{const v=compatVals();
 return `<div class="cd" style="border-left:5px solid var(--mg)"><div class="h3">Compatibilização BIM — defina agora
   ${hp('A compatibilização não existe na tabela de honorários: é serviço à parte, e é o que mais evita prejuízo em obra. Defina aqui, antes de fechar o escopo, para o valor não aparecer “do nada” no total.')}</div>
  <p class="hint" style="margin:-4px 0 12px">Os três métodos são calculados ao mesmo tempo — escolha qual vale nesta proposta, ou zere se não for cobrar.</p>
  <div class="ops" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
   ${v.map((x,i)=>`<button class="op ${i===S.compMetodo?'sl':''}" data-a="cmet" data-v="${i}">
    <b>${['Percentual sobre os projetos','Por metro quadrado','Por carga horária'][i]}</b>
    <span class="fx">${brl(x)}</span>
    <small>${['Sobre a soma dos serviços por quantidade','Sobre a área construída no modelo federado','Pelas rodadas de detecção de interferências'][i]}</small></button>`).join('')}
   <button class="op ${S.compPct===0&&S.compM2===0?'sl':''}" data-a="compZero" data-v="1">
    <b>Não cobrar compatibilização</b><span class="fx">R$ 0,00</span>
    <small>zera os três métodos nesta proposta</small></button>
  </div>
  <div class="gr g2" style="margin-top:13px">
   ${S.compMetodo===0?stepper({rot:'Percentual sobre os projetos (%)',path:'compPct%',val:(S.compPct*100).toFixed(1),step:1,
     hint:'8% simples · 12% média · 18 a 25% alta complexidade'}):''}
   ${S.compMetodo===1?stepper({rot:'Preço por m² (R$)',path:'compM2',val:S.compM2.toFixed(2),step:0.2,
     hint:'referência de R$ 2,00 a R$ 5,00 · área: '+fmt(num(S.areaConstr))+' m²'}):''}
   ${S.compMetodo===2?`<div><label class="f">Como é calculado</label>
     <input readonly value="${fmt(S.compHoras.reduce((a,x)=>a+num(x[2]),0))} h × valor da função">
     <div class="hint">Ajuste as horas na tabela abaixo.</div></div>`:''}
  </div>
  <div class="al ${v[S.compMetodo]>0?'g':'y'}" style="margin-top:12px">
   ${v[S.compMetodo]>0
    ? '<b>'+brl(v[S.compMetodo])+'</b> será somado aos serviços. Esse é o valor que aparece no rodapé junto com o resto.'
    : 'Nenhuma compatibilização será cobrada nesta proposta.'}
   </div>
  ${S.compMetodo!==2?'':`
   <div class="h3" style="margin:18px 0 10px">Rodadas de verificação ${hp('Obra simples: 2 rodadas. Média: 3. Hospital, industrial ou retrofit: 4 a 6. Zere a rodada 3 se a obra for simples.')}</div>
   <div class="gr g2">
   ${S.compHoras.map((hh,j)=>`<div style="border:1px solid var(--bd);border-radius:11px;padding:12px">
     <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:9px">
      <b style="font-size:13px">${esc(hh[0])}</b>
      <span style="font-weight:800;color:var(--mg);white-space:nowrap">${brl(vHora(hh[1])*num(hh[2])*fNiv()*fLod())}</span></div>
     <label class="f">Quem executa</label>
     <select data-ch="${j}" data-k="1" style="margin-bottom:9px">
      ${FUNCOES.map((f,fi)=>`<option value="${esc(f[0])}" ${f[0]===hh[1]?'selected':''}>${esc(f[0])} — ${brl(Math.round(precoHora(fi)))}/h</option>`).join('')}</select>
     <label class="f">Horas</label>
     <div class="stepper"><button data-a="stepCh" data-i="${j}" data-v="-2">−</button>
      <input type="text" inputmode="decimal" value="${hh[2]}" data-ch="${j}" data-k="2" data-num="1">
      <button data-a="stepCh" data-i="${j}" data-v="2">+</button></div>
    </div>`).join('')}
   </div>
   <div class="al g" style="margin-top:12px">Total das rodadas:
    <b>${brl(S.compHoras.reduce((a,x)=>a+vHora(x[1])*num(x[2]),0)*fNiv()*fLod())}</b>
    — ${fmt(S.compHoras.reduce((a,x)=>a+num(x[2]),0))} horas, com complexidade ${fNiv().toFixed(2)} e LOD ${fLod().toFixed(2)}.</div>`}
 </div>`})()}
${S.itens.length?'':`<div class="al g"><b>Comece pelo botão verde.</b> Ele monta o escopo inteiro conforme o tipo de edificação escolhido na etapa anterior
  (<b>${S.escopo==='infra'?(S.tipoInfra==='rod'?('via de '+fmt(num(S.rod.km))+' km'):(S.tipoInfra==='urb'?('urbanização de '+fmt(num(S.lote.area))+' m²'):((S.lote.cond?'condomínio':'loteamento')+' de '+fmt(num(S.lote.area))+' m², '+estLotes().n+' lotes')))
    :esc((TIPOS.find(t=>t.id===S.tipoEdif)||TIPOS[2]).nome)+', '+fmt(num(S.areaConstr))+' m² construídos'+(num(S.areaTerr)>0?' e '+fmt(num(S.areaTerr))+' m² de terreno':'')}</b>),
  já com as áreas preenchidas. Depois você ajusta, remove o que não entra e acrescenta o que faltar.</div>`}
 ${c.erros?`<div class="al r"><b>${c.erros} ${c.erros>1?'serviços precisam':'serviço precisa'} de atenção.</b> Os cartões com borda vermelha ainda não entram na soma.</div>`:''}
 ${S.itens.map((it,i)=>cartao(it,i)).join('')}
 ${S.itens.length?`<div class="cd" style="display:flex;gap:20px;flex-wrap:wrap;align-items:center">
   <div><div class="lb" style="font-size:11px;color:var(--mu);font-weight:800">POR QUANTIDADE</div>
    <div style="font-size:19px;font-weight:800;color:var(--az)">${brl(c.tab)}</div></div>
   <div><div class="lb" style="font-size:11px;color:var(--mu);font-weight:800">POR HORA (${fmt(c.horas)} h)</div>
    <div style="font-size:19px;font-weight:800;color:var(--mg)">${brl(c.hora)}</div></div>
   <div style="margin-left:auto"><div class="lb" style="font-size:11px;color:var(--mu);font-weight:800">SOMA DOS SERVIÇOS</div>
    <div style="font-size:23px;font-weight:800;color:var(--az)">${brl(c.tab+c.hora)}</div></div>
  </div>
  <div class="cd" style="background:#FAFCFF"><div class="h3">Do subtotal ao valor da proposta</div>
   <table class="tb"><tbody>
    <tr><td>Serviços lançados nesta etapa</td><td style="text-align:right;font-weight:700">${brl(c.tab+c.hora)}</td></tr>
    <tr><td>+ Compatibilização BIM — ${['percentual sobre os projetos','por metro quadrado','por carga horária'][S.compMetodo]}
      ${hp('A compatibilização é lançada na etapa seguinte, não aqui. Por isso o rodapé mostra um valor maior que a soma dos serviços.')}</td>
     <td style="text-align:right;font-weight:700">${brl(c.comp)}</td></tr>
    ${c.desc?`<tr><td>− Desconto comercial</td><td style="text-align:right;color:var(--vm)">${brl(-c.desc)}</td></tr>`:''}
    <tr style="background:#E8EEF8"><td style="font-weight:800">Valor da proposta — é o que aparece no rodapé</td>
     <td style="text-align:right;font-weight:800;font-size:16px">${brl(c.liq)}</td></tr>
   </tbody></table>
   <div class="hint" style="margin-top:8px">Impostos, custo fixo e custos diretos não entram neste valor: eles saem do lucro e aparecem no demonstrativo da última etapa.</div></div>`:''}
 ${(c.tab+c.hora)>0&&(c.tab+c.hora)<1950?`<div class="al y">Abaixo do <b>valor mínimo de projeto</b>, que vai de R$ 1.950,00 a R$ 3.900,00 conforme o grau de dificuldade. Cobre o mínimo.</div>`:''}`}

function cartao(it,i){
 const x=calcItem(it),hora=it.modo==='hora';
 const grupo=it._g||'TODAS';
 const uni=it._u||'TODAS';
 const discs=DISCIPLINAS.filter(d=>(grupo==='TODAS'||grupoDe(d)===grupo)
   &&(uni==='TODAS'||unsDe(d).some(u=>u.toLowerCase()===uni.toLowerCase()))
   &&(!it._b||d.toLowerCase().indexOf(String(it._b).toLowerCase())>=0||servicosDe(d).some(s=>s.toLowerCase().indexOf(String(it._b).toLowerCase())>=0)));
 const servs=it.disc?servicosDe(it.disc):[],tipos=(it.disc&&it.serv)?tiposDe(it.disc,it.serv):[];
 return`<div class="sv ${hora?'hr':''} ${x.erro?'er':''}">
  <div class="hd"><span class="nm">${i+1}</span>
   <b style="font-size:13.5px">${hora?'Cobrado por hora trabalhada':'Cobrado pela tabela de honorários'}</b>
   <span class="sp"></span>
   <button class="ic" title="Mover para cima" data-a="mov" data-i="${i}" data-v="-1">↑</button>
   <button class="ic" title="Mover para baixo" data-a="mov" data-i="${i}" data-v="1">↓</button>
   <button class="ic" title="Duplicar" data-a="dup" data-i="${i}">⧉</button>
   <button class="ic dg" title="Excluir" data-a="del" data-i="${i}">✕</button></div>

  ${hora?`<div class="gr g3">
    ${campo({rot:'O que será feito',path:'',val:it.livre||'',ph:'Coordenação e gerenciamento BIM',
      ex:'descreva a atividade, não o cargo',cls:'',})
      .replace('data-in=""',`data-it="${i}" data-k="livre"`)}
    <div><label class="f">Quem executa ${hp('O valor da hora vem das configurações do escritório, no ícone de engrenagem. Use a função que vai de fato executar.')}</label>
     <select data-it="${i}" data-k="funcao">${FUNCOES.map(f=>`<option value="${esc(f[0])}" ${f[0]===it.funcao?'selected':''}>${esc(f[0])} — ${brl(Math.round(precoHora(FUNCOES.indexOf(f))))}/h</option>`).join('')}</select></div>
    ${stepper({rot:'Horas',path:'',val:it.qtd,step:4,ex:'40,00'}).replace('data-in=""',`data-it="${i}" data-k="qtd"`)
      .replace(/data-p=""/g,`data-it="${i}" data-k="qtd"`)}
   </div>`
  :`<div class="chips">${GRUPOS.map(g=>`<button class="chip ${g[0]===grupo?'sl':''}" data-a="grp" data-i="${i}" data-v="${g[0]}">${g[1]}</button>`).join('')}</div>
   <div class="gr g3" style="margin-bottom:12px">
    <div><label class="f">1 · Disciplina ${hp('Os capítulos agrupam os serviços pelo objeto, não pela profissão. Arquitetos e engenheiros atuam em qualquer um deles conforme suas atribuições no CAU ou no CREA. Use os botões acima para encurtar a lista.')}</label>
     <select data-it="${i}" data-k="disc"><option value="">— escolha —</option>
      ${discs.map(d=>`<option value="${esc(d)}" ${d===it.disc?'selected':''}>${esc(d)} — cobrado em ${esc(rotUn(unsDe(d)))}</option>`).join('')}</select></div>
    <div><label class="f">2 · Serviço</label>
     <select data-it="${i}" data-k="serv" ${it.disc?'':'disabled'}>
      <option value="">${it.disc?'— escolha —':'escolha a disciplina antes'}</option>
      ${servs.map(sv=>`<option value="${esc(sv)}" ${sv===it.serv?'selected':''}>${esc(sv)} — ${esc(rotUn(unsDe(it.disc,sv)))}</option>`).join('')}</select></div>
    <div><label class="f">3 · Tipo ${hp('A variação de preço do mesmo serviço: Cadastro, Novo ou Reforma em arquitetura; Concreto ou Metálica em estrutura; a distância de Aracaju em sondagem. Quando só existe um preço, aparece OPÇÃO ÚNICA.')}</label>
     <select data-it="${i}" data-k="tipo" ${it.serv?'':'disabled'}>
      <option value="">${it.serv?'— escolha —':'escolha o serviço antes'}</option>
      ${tipos.map(tp=>{const L=linhasDe(it.disc,it.serv,tp);const un=L.length?L[0][3]:'';
        const fx=L.length>1?(L.length+' faixas de preço'):(L.length?brl(L[0][6])+'/'+un:'');
        return `<option value="${esc(tp)}" ${tp===it.tipo?'selected':''}>${esc(tp)}${un?' — em '+esc(un):''}${fx?' · '+esc(fx):''}</option>`}).join('')}</select></div>
   </div>
   <div class="gr g3">
    ${stepper({rot:'4 · Quantidade'+(x.un?` <span class="pl">em ${esc(x.un)}</span>`:''),path:'',val:it.qtd,step:x.un==='un'||x.un==='lote'?1:50,
      ex:x.un==='un'?'1 — projeto de gás com 15 pontos é quantidade 1':'1200,00',
      aj:'Digite na unidade indicada. Projeto de gás, relatório de PDA, gerador, subestação e PGRSCC são por unidade. Vias de acesso, por quilômetro. Cadastro, por lote. Topografia de campo, por diária.'})
      .replace('data-in=""',`data-it="${i}" data-k="qtd"`).replace(/data-p=""/g,`data-it="${i}" data-k="qtd"`)}
    ${stepper({rot:'5 · Percentual a cobrar',path:'',val:((it.ajuste==null?1:it.ajuste)*100).toFixed(0),step:5,
      hint:'100% é o preço cheio da tabela',
      aj:'Só diminua quando a tabela mandar: contratar apenas o tratamento de esgoto é 50%. Nunca passe de 100% — os preços são o teto permitido.'})
      .replace('data-in=""',`data-it="${i}" data-k="ajuste"`).replace(/data-p=""/g,`data-it="${i}" data-k="ajuste"`)}
    <div><label class="f">Forma de cobrança</label>
     <div class="seg"><button class="on" data-a="modo" data-i="${i}" data-v="tabela">Quantidade</button>
      <button data-a="modo" data-i="${i}" data-v="hora">Por hora</button></div></div>
   </div>`}

  ${hora?`<div class="gr g3" style="margin-top:12px"><div><label class="f">Forma de cobrança</label>
    <div class="seg"><button data-a="modo" data-i="${i}" data-v="tabela">Quantidade</button>
     <button class="on m" data-a="modo" data-i="${i}" data-v="hora">Por hora</button></div></div></div>`:''}

  <div class="out">
   ${x.erro?`<span class="pl r">⚠ ${esc(x.erro)}</span>`
    :`<span class="pl">Unitário ${brl(x.preco)}</span><span class="pl g">Faixa: ${esc(x.faixa)}</span>
      ${x.crit?`<span class="pl y" title="${esc(x.crit)}">${esc(x.crit.length>54?x.crit.slice(0,53)+'…':x.crit)}</span>`:''}`}
   <span class="tt2">${brl(x.sub)}</span></div></div>`}

function P4(){const c=calc(),v=compatVals(),nm=['Percentual sobre os projetos','Por metro quadrado','Por carga horária'];
 return`<h2 class="tt">Impostos, custo fixo e custos diretos</h2>
 <p class="sb">A compatibilização BIM já foi definida na etapa anterior. Aqui ficam os números que transformam o valor cobrado em lucro: tributos, rateio do escritório e desembolsos deste projeto.</p>
 <div class="cd"><div class="h3">Tributos e condições comerciais</div><div class="gr g3">
  ${stepper({rot:'Imposto sobre a nota (%)',path:'imposto%',val:(S.imposto*100).toFixed(2),step:0.5,
    aj:'Some TODOS os tributos sobre o faturamento. Simples Nacional: a alíquota efetiva da sua faixa. Lucro Presumido: ISS + PIS + Cofins + IRPJ + CSLL. Confirme com a contabilidade.'})}
  ${stepper({rot:'Retenções na fonte (%)',path:'retencao%',val:(S.retencao*100).toFixed(2),step:0.5,
    aj:'O contratante retém e recolhe no seu lugar. Não aumenta o custo, mas reduz o caixa recebido no ato.'})}
  ${stepper({rot:'Desconto comercial (%)',path:'desconto%',val:(S.desconto*100).toFixed(1),step:1,
    aj:'Sai inteiro do lucro. Com margem alvo de 25%, um desconto de 10% derruba a margem para cerca de 16%. Prefira reduzir escopo.'})}
  ${stepper({rot:'Margem líquida alvo (%)',path:'margemAlvo%',val:(S.margemAlvo*100).toFixed(0),step:5})}
  ${stepper({rot:'Multiplicador da hora',path:'mult',val:S.mult.toFixed(1),step:0.1,
    aj:'Custo-hora × multiplicador = valor cobrado. Cobre horas não faturáveis, despesas fixas, impostos e lucro. Mercado de projeto: 2,5 a 3,5.'})}
  ${stepper({rot:'Custo fixo mensal (R$)',path:'fixoMes',val:S.fixoMes,step:500,
    aj:'Aluguel, licenças, internet, energia, contabilidade, administrativo. Não inclua a equipe técnica, que já está no custo-hora.'})}
  ${stepper({rot:'Horas produtivas no mês',path:'horasMes',val:S.horasMes,step:40,
    aj:'Horas que a equipe consegue faturar. Na prática, 70% a 80% do tempo. Para ser realista, use 120 h por pessoa.'})}
  <div><label class="f">Custo-hora do escritório</label><input readonly value="${brl(c.custoHoraEsc)}">
   <div class="hint">Piso absoluto por hora trabalhada.</div></div>
 </div></div>
 <div class="cd"><div class="h3">Custos diretos deste projeto ${hp('Desembolsos que só existem por causa desta proposta. Não confunda com o custo fixo do escritório, que já é rateado acima.')}</div>
  <table class="tb"><tbody>
  ${S.custos.map((x,i)=>`<tr><td>${esc(x[0])}</td><td style="width:170px">
   <div class="stepper"><button data-a="stepCu" data-i="${i}" data-v="-100">−</button>
    <input type="text" inputmode="decimal" value="${fmt(num(x[1]))}" data-cu="${i}" data-num="1">
    <button data-a="stepCu" data-i="${i}" data-v="100">+</button></div></td></tr>`).join('')}
  <tr><td style="font-weight:800">Total dos custos diretos</td>
   <td style="text-align:right;font-weight:800;color:var(--az)">${brl(c.diretos)}</td></tr>
 </tbody></table></div>`}

function P5obra(){const o=calcObra(),e=econ();
 const k=(cor,t,v,sb)=>`<div class="k" style="background:linear-gradient(135deg,${cor[0]},${cor[1]})"><b>${t}</b><i>${v}</i><small>${sb||''}</small></div>`;
 if(o.direto<=0)return `<h2 class="tt">Estimativa pronta para exportar</h2>
  <div class="al y">Ainda não há base de cálculo. Volte à etapa <b>O trabalho</b> e informe a área ou a extensão.</div>`;
 return `<h2 class="tt">Estimativa pronta</h2>
 <p class="sb">Exporte e entregue ao cliente. Sai com o seu carimbo, as etapas de obra e as ressalvas técnicas.</p>
 <div class="al ${o.jaComBDI?'y':'g'}">
  <b>${o.jaComBDI?'Nada somado por cima — BDI e encargos já estão no preço.':'Encargo previdenciário e BDI somados por cima.'}</b>
  ${o.jaComBDI
   ? 'Nada foi somado por cima: o total é o próprio custo direto, porque os preços unitários de banco já trazem encargos sociais e BDI. Para referência, dentro dele há cerca de '+brl(o.bdiEmb)+' de BDI ('+pc(o.taxaBDI)+'). Por isso BDI e encargo não aparecem como parcela nos cartões nem no gráfico.'
   : 'Sobre o custo direto de '+brl(o.direto)+' '+((o.inss||o.cprb)>0
      ? ('incidem '+brl(o.inss||o.cprb)+' de encargo previdenciário ('+esc(o.reg[0])+') e ')
      : ('não incide encargo previdenciário ('+esc(o.reg[0])+') e incidem '))
      +brl(o.bdi)+' de BDI ('+pc(o.taxaBDI)+').'}
 </div>
 <div class="kp">
  ${k(['#0A3D91','#1456C8'],'Estimativa da obra',brl(o.total),'custo direto + encargo + BDI')}
  ${k(['#1B87A8','#2BA8CC'],'Material',brl(o.mat),pc(o.mat/o.direto)+' do custo direto')}
  ${k(['#C4178C','#E0439F'],'Mão de obra',brl(o.mo),pc(o.mo/o.direto)+' do custo direto')}
  ${k(['#7030A0','#9B59D0'],'Equipamentos',brl(o.eq),pc(o.eq/o.direto)+' do custo direto')}
  ${o.jaComBDI?'':((o.inss||o.cprb)>0
     ? k(['#EC1C24','#F2564C'],'Encargo previdenciário somado',brl(o.inss||o.cprb),o.reg[0])
     : k(['#64708A','#8A94A8'],'Encargo previdenciário','não incide',o.reg[0]))}
  ${o.jaComBDI?'':k(['#B45309','#D97706'],'BDI somado',brl(o.bdi),pc(o.taxaBDI)+' sobre o custo')}
  ${o.porM2?k(['#17854B','#22A864'],'Por m² construído',brl(o.porM2),fmt(num(S.areaConstr))+' m²'):''}
 </div>
 <div class="cd"><div class="h3">Cronograma físico-financeiro estimado</div>
  <table class="tb"><thead><tr><th>Etapa</th><th>%</th><th>Valor</th></tr></thead><tbody>
  ${o.lin.map(x=>`<tr><td>${esc(x.etapa)} <span style="color:var(--mu);font-size:11px">· ${esc(x.grupo)}</span></td>
   <td>${(x.pct*100).toFixed(1)}%</td><td style="text-align:right;font-weight:700">${fmt(x.total*(o.total/o.direto))}</td></tr>`).join('')}
  <tr style="background:#E8F7EE"><td style="font-weight:800">Total</td><td></td>
   <td style="text-align:right;font-weight:800">${brl(o.total)}</td></tr></tbody></table>
  <div class="hint" style="margin-top:8px">${o.jaComBDI
   ? 'Os preços unitários já trazem encargos e BDI, então cada etapa sai pelo valor cheio.'
   : 'Encargo previdenciário e BDI rateados proporcionalmente em cada etapa.'}</div></div>
 <div class="gr g2">
  <div class="cd"><div class="h3">Composição do custo</div>
   ${rosca([{k:'Material e insumos',v:o.mat},{k:'Mão de obra',v:o.mo},{k:'Equipamentos',v:o.eq}]
      .concat((o.inss||o.cprb)>0?[{k:'Encargo previdenciário',v:o.inss||o.cprb}]:[])
      .concat(o.bdi>0?[{k:'BDI',v:o.bdi}]:[]))}
   <div class="hint" style="margin-top:7px">${o.jaComBDI
    ? 'O gráfico mostra só o custo direto, porque nesta opção nada foi somado por cima: BDI e encargos já estão dentro dos preços unitários.'
    : 'O gráfico mostra o custo direto mais o que foi somado: encargo previdenciário e BDI.'}</div></div>
  <div class="cd"><div class="h3">Todas as etapas, da maior para a menor</div>
   ${barrasH(o.lin.slice().sort((a,b)=>b.total-a.total).map(x=>({curto:x.etapa,v:x.total})),560,99)}</div>
 </div>
 <div class="cd" style="text-align:center;background:linear-gradient(135deg,#0A3D91,#1B87A8);border:0">
  <div style="color:#fff;font-size:18px;font-weight:800;margin-bottom:3px">${brl(o.total)}</div>
  <div style="color:rgba(255,255,255,.85);font-size:13px;margin-bottom:15px">estimativa de execução · ${o.lin.length} etapas</div>
  <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">
   <button class="bt mg" data-a="imprimir">🖨 Imprimir / PDF</button>
   <button class="bt ok" data-a="word">📄 Word</button>
   <button class="bt" data-a="excel">📊 Excel</button>
   <button class="bt sec" data-a="bibSalvar">📁 Salvar</button></div></div>`}

function P5(){
 if(S.modo==='obra')return P5obra();
 const c=calc(),e=econ(),eo=estObra(),ei=estInfra(),sp=S.etapas.reduce((a,x)=>a+x[1],0),prazo=S.etapas.reduce((a,x)=>a+num(x[2]),0);
 const k=(cor,t,v,s)=>`<div class="k" style="background:linear-gradient(135deg,${cor[0]},${cor[1]})"><b>${t}</b><i>${v}</i><small>${s||''}</small></div>`;
 return`<h2 class="tt">Sua proposta está pronta</h2>
 <p class="sb">Confira, ajuste o cronograma e exporte. A versão exportada sai sem botões e sem gráficos, com o seu carimbo e a sua assinatura.</p>
 <div class="kp">
  ${k(['#0A3D91','#1456C8'],'Valor da proposta',brl(c.liq),'Base da nota fiscal')}
  ${k(['#1B87A8','#2BA8CC'],'Lucro líquido',brl(c.lucro),'Depois de tudo')}
  ${k(c.margem>=S.margemAlvo?['#17854B','#22A864']:['#EC1C24','#F2564C'],'Margem líquida',pc(c.margem),'Alvo: '+pc(S.margemAlvo))}
  ${k(['#C4178C','#E0439F'],'Horas lançadas',fmt(c.horas)+' h',c.horas?brl(c.liq/c.horas)+' por hora':'—')}
  ${k(['#4472C4','#6B93DE'],'Serviços',String(S.itens.length),c.porDisc.length+' disciplinas')}
 </div>
 ${c.erros?`<div class="al r"><b>${c.erros} ${c.erros>1?'serviços estão incompletos':'serviço está incompleto'}.</b> Volte à etapa Escopo e corrija antes de enviar.</div>`:''}
 ${c.margem<S.margemAlvo?`<div class="al r"><b>Margem abaixo do alvo.</b> Nesta ordem: as horas foram subestimadas? O grau de dificuldade está certo? Reduza escopo antes de reduzir preço — desconto sai inteiro do lucro.</div>`
  :`<div class="al g"><b>Margem dentro do alvo.</b> ${brl(c.lucro)} de lucro sobre ${brl(c.liq)} faturados.</div>`}
 <div class="gr g2">
  <div class="cd"><div class="h3">${c.horas>0?'Honorários por disciplina':'Participação de cada disciplina'}</div>
   ${c.horas>0?barrasH(c.porDisc.map(d=>({curto:d.curto,v:d.v})))
    :barrasH(c.porDisc.map(d=>({curto:d.curto,v:d.v,fmt:x=>pc(x/(c.tab+c.hora||1))})))}
   ${c.horas>0?'':`<div class="hint" style="margin-top:7px">Nenhuma hora lançada nesta proposta, então o gráfico mostra a participação de cada disciplina no total.</div>`}</div>
  <div class="cd"><div class="h3">Para onde vai o valor</div>${rosca([{k:'Impostos',v:c.imp},{k:'Custo fixo rateado',v:c.fixo},{k:'Custos diretos',v:c.diretos},{k:'Lucro líquido',v:Math.max(0,c.lucro)}])}</div>
  <div class="cd"><div class="h3">Receita por forma de cobrança</div>${colunas([{k:'Quantidade',v:c.tab},{k:'Por hora',v:c.hora},{k:'Compatibilização',v:c.comp}])}</div>
  <div class="cd"><div class="h3">Desembolso por etapa</div>${colunas(S.etapas.map(x=>({k:x[0].replace(/^\d+\.\s*/,''),v:x[1]*c.liq})))}</div>
 </div>
 <div class="cd"><div class="h3">Demonstrativo</div><table class="tb"><tbody>
  <tr><td>Serviços cobrados por quantidade</td><td style="text-align:right">${brl(c.tab)}</td></tr>
  <tr><td>Serviços cobrados por hora (${fmt(c.horas)} h)</td><td style="text-align:right">${brl(c.hora)}</td></tr>
  <tr><td>Compatibilização BIM</td><td style="text-align:right">${brl(c.comp)}</td></tr>
  <tr><td style="font-weight:800">Honorários brutos</td><td style="text-align:right;font-weight:800">${brl(c.bruto)}</td></tr>
  <tr><td>(–) Desconto comercial</td><td style="text-align:right;color:var(--vm)">${brl(-c.desc)}</td></tr>
  <tr style="background:#E8EEF8"><td style="font-weight:800">Honorários líquidos — valor da nota</td><td style="text-align:right;font-weight:800">${brl(c.liq)}</td></tr>
  <tr><td>(–) Impostos sobre a nota</td><td style="text-align:right;color:var(--vm)">${brl(-c.imp)}</td></tr>
  <tr><td>(–) Custo fixo rateado</td><td style="text-align:right;color:var(--vm)">${brl(-c.fixo)}</td></tr>
  <tr><td>(–) Custos diretos</td><td style="text-align:right;color:var(--vm)">${brl(-c.diretos)}</td></tr>
  <tr style="background:#E8F7EE"><td style="font-weight:800">Lucro líquido</td><td style="text-align:right;font-weight:800">${brl(c.lucro)}</td></tr>
  ${c.ret?`<tr><td>Retenções na fonte (informativo)</td><td style="text-align:right">${brl(-c.ret)}</td></tr>`:''}
 </tbody></table></div>
 <div class="cd"><div class="h3">Cronograma e marcos de pagamento</div>
  <div class="al ${S.etapasAuto?'g':'y'}" style="margin-bottom:12px">
   <b>${S.etapasAuto?'Cronograma calculado automaticamente':'Cronograma editado por você'} — ${S.etapas.reduce((a,x)=>a+num(x[2]),0)} dias.</b>
   ${S.etapasAuto?`Roteiro de <b>${S.escopo==='infra'?'infraestrutura':'edificação'}</b>, prazo de ${prazoProjeto()} dias distribuído pelos percentuais.
     Mexa em qualquer linha e ele passa a ser seu.`
    :`<button class="bt sec" style="padding:7px 12px;font-size:12.5px;margin-top:9px" data-a="recalcPrazo">Voltar ao cálculo automático</button>`}</div>
  ${Math.abs(sp-1)>0.001?`<div class="al r">Os percentuais somam ${pc(sp)} — precisam fechar 100%.</div>`:''}
  <table class="tb"><thead><tr><th>Etapa</th><th style="width:118px">%</th><th style="width:118px">Dias</th><th>Marco</th><th>Valor</th></tr></thead><tbody>
  ${S.etapas.map((x,i)=>`<tr><td>${esc(x[0])}</td>
   <td><div class="stepper"><button data-a="stepEt" data-i="${i}" data-k="1" data-v="-1">−</button>
    <input type="text" inputmode="decimal" value="${(x[1]*100).toFixed(0)}" data-et="${i}" data-k="1" data-num="1">
    <button data-a="stepEt" data-i="${i}" data-k="1" data-v="1">+</button></div></td>
   <td><div class="stepper"><button data-a="stepEt" data-i="${i}" data-k="2" data-v="-1">−</button>
    <input type="text" inputmode="decimal" value="${x[2]}" data-et="${i}" data-k="2" data-num="1">
    <button data-a="stepEt" data-i="${i}" data-k="2" data-v="1">+</button></div></td>
   <td style="font-size:12px;color:var(--mu)">${esc(x[3])}</td>
   <td style="text-align:right;font-weight:700">${brl(x[1]*c.liq)}</td></tr>`).join('')}
 </tbody></table><div class="hint" style="margin-top:8px">Prazo total: <b>${prazo} dias</b>. O prazo fica suspenso enquanto se aguarda aprovação do contratante ou de órgãos públicos.</div></div>

 ${(!S.quer.estim||S.escopo==='infra')?'':`<div class="cd"><div class="h3">Estimativa da edificação pelo CUB ${hp('CUB é o Custo Unitário Básico publicado todo mês pelo Sinduscon de cada estado, conforme a NBR 12.721. Serve para estimar a ordem de grandeza da construção — não substitui orçamento analítico.')}</div>
  <div class="gr g3" style="margin-bottom:12px">
   <div><label class="f">Estado de referência</label>
    <select data-a2="cubUF"><option value="">${S.cli.uf?('usar a UF do cliente — '+esc(S.cli.uf)):'— escolha a UF —'}</option>
     ${Object.keys(CUB).sort().map(u=>`<option value="${u}" ${u===S.cubUF?'selected':''}>${u} — ${brl(CUB[u])}/m²</option>`).join('')}</select>
    <div class="ex">CUB R8-N de referência, set/2026</div></div>
   ${stepper({rot:'CUB R$/m² (editável)',path:'cubVal',val:eo.base.toFixed(2),step:10,
     hint:'Zere para voltar ao valor da tabela',
     aj:'O CUB muda todo mês. Entre no site do Sinduscon do seu estado, pegue o valor do R8-N do mês e digite aqui. O que vem preenchido é referência de set/2026.'})}
   ${stepper({rot:'Itens fora do CUB (%)',path:'cubExtra%',val:(S.cubExtra*100).toFixed(0),step:1,
     hint:'fundação, elevador, especiais, muros',
     aj:'O CUB não cobre fundações, elevadores, instalações especiais, paisagismo, muros, ligações de concessionária, projetos nem o terreno. A prática de mercado acrescenta de 15% a 25% sobre o CUB para cobrir isso. A fundação varia muito com o solo: se já houver sondagem, prefira orçá-la à parte.'})}
  </div>
  <label class="f">Padrão construtivo</label>
  <div class="ops" style="margin-bottom:14px">${PADROES.map((p,i)=>`<button class="op ${i===S.cubPadrao?'sl':''}" data-a="pad" data-v="${i}">
   <b>${p[0]}</b><span class="fx">${brl(eo.base*p[1])}/m²</span><small>${p[2]}</small></button>`).join('')}</div>
  ${eo.area>0&&eo.base>0?`<table class="tb"><tbody>
   <tr><td>Área construída × unitário aplicado</td><td style="text-align:right">${fmt(eo.area)} m² × ${brl(eo.unit)}</td></tr>
   ${eo.comp.map(x=>`<tr><td>${esc(x.k)} — ${(x.p*100).toFixed(0)}% do CUB</td><td style="text-align:right">${brl(x.v)}</td></tr>`).join('')}
   <tr><td style="font-weight:800">Subtotal pelo CUB</td><td style="text-align:right;font-weight:800">${brl(eo.bruto)}</td></tr>
   <tr><td>Itens fora do CUB (${(S.cubExtra*100).toFixed(0)}%) — fundação, elevador, especiais, muros, ligações</td><td style="text-align:right">${brl(eo.extra)}</td></tr>
   <tr style="background:#E8EEF8"><td style="font-weight:800">Estimativa total da obra</td><td style="text-align:right;font-weight:800;font-size:16px">${brl(eo.total)}</td></tr>
  </tbody></table>
  <div class="gr g2" style="margin-top:12px">
   <div class="cd" style="margin:0;background:#FAFCFF"><div class="h3" style="font-size:13px">Material × mão de obra</div>
    ${colunas(eo.comp.map(x=>({k:x.k.split(' ')[0],v:x.v})),330)}</div>
   <div class="cd" style="margin:0;background:#FAFCFF"><div class="h3" style="font-size:13px">O que o CUB não inclui</div>
    <ul style="margin:0;padding-left:18px;font-size:12.5px;color:var(--mu);line-height:1.7">
     <li><b>Fundações</b> — dependem do solo; orce à parte depois da sondagem</li>
     <li>Elevadores e equipamentos</li><li>Instalações especiais: gás, incêndio, ar-condicionado central</li>
     <li>Paisagismo, muros, portões e urbanização do lote</li>
     <li>Ligações de água, esgoto e energia</li><li>Projetos, terreno, taxas e impostos da incorporação</li></ul></div>
  </div>
  <div class="hint" style="margin-top:10px">Estimativa pela NBR 12.721 com CUB de referência. Varia mensalmente e por região — confirme no Sinduscon do estado antes de apresentar ao cliente.</div>`
  :`<div class="al y">Informe a área construída na etapa O trabalho e escolha a UF para ver a estimativa.</div>`}
  <div class="hint" style="margin-top:10px"><label style="display:flex;gap:9px;align-items:center;cursor:pointer">
   <input type="checkbox" style="width:auto" ${S.cubAuto?'checked':''} data-chk="cubAuto">
   <span>Usar esta estimativa como custo da obra no cálculo da economia abaixo</span></label></div>
 </div>`}

 ${(!S.quer.estim||S.escopo==='edif'||!ei)?'':`<div class="cd"><div class="h3">Estimativa da obra de infraestrutura
   ${hp('O CUB vale só para edificação. Infraestrutura se estima por metro quadrado de gleba urbanizada ou por quilômetro de via, com os parâmetros abaixo. São referências de mercado para ordem de grandeza — o orçamento de verdade sai de composições SINAPI ou SICRO.')}</div>
  <label class="f">${ei.tipo==='rod'?'Padrão da via':'Padrão de urbanização'}</label>
  <div class="ops" style="margin-bottom:13px">
   ${(ei.tipo==='rod'?INFRA_EST.rod:INFRA_EST.lote).map((p,i)=>`<button class="op ${i===(ei.tipo==='rod'?S.rodPadrao:S.infraPadrao)?'sl':''}"
     data-a="${ei.tipo==='rod'?'rodPad':'infraPad'}" data-v="${i}">
     <b>${p[0]}</b><span class="fx">${ei.tipo==='rod'?brl(p[1])+'/km':brl(p[1])+'/m²'}</span><small>${p[2]}</small></button>`).join('')}
  </div>
  <div class="gr g2" style="margin-bottom:12px">
   ${stepper({rot:ei.tipo==='rod'?'R$ por km (editável)':'R$ por m² (editável)',
     path:ei.tipo==='rod'?'rodVal':'infraVal',val:ei.unit.toFixed(2),step:ei.tipo==='rod'?100000:10,
     hint:'zere para voltar ao valor do padrão'})}
   <div><label class="f">${ei.tipo==='rod'?'Extensão':'Área da gleba'}</label>
    <input readonly value="${fmt(ei.qt)} ${ei.un}"></div>
  </div>
  ${ei.qt>0?`<table class="tb"><tbody>
   ${ei.comp.map(c=>`<tr><td>${esc(c[0])} — ${(c[1]*100).toFixed(0)}%</td>
     <td style="text-align:right">${brl(ei.total*c[1])}</td></tr>`).join('')}
   <tr style="background:#E8EEF8"><td style="font-weight:800">Estimativa da infraestrutura</td>
    <td style="text-align:right;font-weight:800;font-size:16px">${brl(ei.total)}</td></tr>
   ${S.escopo==='ambos'?`<tr><td>+ edificação pelo CUB</td><td style="text-align:right">${brl(eo.total)}</td></tr>
    <tr style="background:#E8F7EE"><td style="font-weight:800">Total estimado da obra</td>
     <td style="text-align:right;font-weight:800;font-size:16px">${brl(ei.total+eo.total)}</td></tr>`:''}
  </tbody></table>
  <div class="gr g2" style="margin-top:12px">
   <div class="cd" style="margin:0;background:#FAFCFF"><div class="h3" style="font-size:13px">Onde vai o dinheiro da obra</div>
    ${colunas(ei.comp.map(c=>({k:c[0].split(' ')[0],v:ei.total*c[1]})),330)}</div>
   <div class="cd" style="margin:0;background:#FAFCFF"><div class="h3" style="font-size:13px">O que não está incluído</div>
    <ul style="margin:0;padding-left:18px;font-size:12.5px;color:var(--mu);line-height:1.7">
     ${ei.tipo==='rod'?`<li><b>Obras de arte especiais</b> — pontes, viadutos e túneis</li>
      <li>Desapropriações e faixa de domínio</li><li>Contenções de grande porte</li>
      <li>Licenciamento ambiental e compensações</li><li>Projetos e gerenciamento</li>`
      :`<li><b>Terreno</b> e custos de aquisição</li>
      <li>Muros, portaria e guarita do condomínio</li>
      <li>Equipamentos das áreas comuns: quadra, salão, piscina</li>
      <li>Ligações e taxas das concessionárias</li>
      <li>Licenciamento, registro do parcelamento e outorgas</li><li>Projetos e gerenciamento</li>`}</ul></div>
  </div>
  <div class="hint" style="margin-top:10px">Referência de mercado para ordem de grandeza. Varia muito com o relevo, o solo e a distância das jazidas. Confirme com composições SINAPI ou SICRO antes de apresentar ao cliente.</div>`
  :`<div class="al y">Informe a ${ei.tipo==='rod'?'extensão da via':'área da gleba'} na etapa anterior.</div>`}
 </div>`}
 ${!S.quer.estim?'':`<div class="cd"><div class="h3">Quanto o cliente economiza com BIM</div>
  <div class="gr g2" style="margin-bottom:12px">
   ${S.cubAuto?`<div><label class="f">Custo da obra (vindo do CUB)</label><input readonly value="${brl(eo.total)}">
     <div class="hint">Desmarque a opção acima para digitar outro valor.</div></div>`
    :stepper({rot:'Custo estimado da obra (R$)',path:'custoObra',val:S.custoObra,step:50000,ex:'2500000,00',
     aj:'Valor da CONSTRUÇÃO, não do projeto. Mostra ao cliente a ordem de grandeza do que ele evita gastando um pouco mais em projeto.'})}
   <div><label class="f">Investimento em projeto</label><input readonly value="${brl(e.inv)}"></div></div>
  ${e.obra>0?`<table class="tb"><tbody>
   <tr><td>Aditivos evitados — 10% típicos, 60% evitáveis com projeto compatibilizado</td><td style="text-align:right">${brl(e.adit)}</td></tr>
   <tr><td>Retrabalho e desperdício evitados — 3% do custo da obra</td><td style="text-align:right">${brl(e.retr)}</td></tr>
   <tr style="background:#E8F7EE"><td style="font-weight:800">Economia total estimada</td><td style="text-align:right;font-weight:800">${brl(e.tot)}</td></tr>
   <tr><td>Resultado líquido para o cliente</td><td style="text-align:right;font-weight:800;color:${e.liquido>=0?'var(--ok)':'var(--vm)'}">${brl(e.liquido)}</td></tr>
   <tr><td>Retorno sobre o investimento em projeto</td><td style="text-align:right;font-weight:800">${e.roi.toFixed(2).replace('.',',')}×</td></tr>
   <tr><td>Projeto como percentual da obra ${hp('Referência de mercado: 3% a 6% para projeto completo.')}</td><td style="text-align:right">${pc(e.pctObra)}</td></tr>
  </tbody></table><div class="hint" style="margin-top:8px">Estimativa comercial baseada em parâmetros de mercado, não garantia contratual. Apresente como ordem de grandeza.</div>`
  :`<div class="al y">Informe a área e a UF para ver a comparação.</div>`}</div>`}
 <div class="cd" style="text-align:center;background:linear-gradient(135deg,#0A3D91,#1B87A8);border:0">
  <div style="color:#fff;font-size:18px;font-weight:800;margin-bottom:3px">${brl(c.liq)}</div>
  <div style="color:rgba(255,255,255,.85);font-size:13px;margin-bottom:15px">${S.itens.length} serviços · ${c.porDisc.length} disciplinas · prazo de ${prazo} dias</div>
  <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">
   <button class="bt mg" data-a="imprimir">🖨 Imprimir / PDF</button>
   <button class="bt ok" data-a="word">📄 Baixar em Word</button>
   <button class="bt" data-a="excel">📊 Baixar em Excel</button>
   <button class="bt sec" data-a="bibSalvar">📁 Salvar na biblioteca</button>
   <button class="bt sec" data-a="baixar">💾 Arquivo de backup</button>
  </div></div>`}


function telaConfig(){const c=calc();
 return`<div class="mdl" id="obMdCfg"><div class="mdlbox">
  <div class="mdlhd"><b>⚙ Configurações do escritório</b><button class="ic" data-a="fecharMdl">✕</button></div>
  <div class="mdlbd">
   <p class="sb">Valem para todos os orçamentos e ficam salvas neste navegador. Mexa aqui uma vez e esqueça.</p>
   <div class="cd"><div class="h3">Quanto custa a hora da sua equipe</div>
    <p class="hint" style="margin:-4px 0 14px">Esta é a parte que define o preço dos serviços cobrados por hora.
     Escolha abaixo o jeito que combina com você — os dois chegam no mesmo lugar.</p>
    <div class="ops" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-bottom:16px">
     <button class="op ${S.horaModo==='direto'?'sl':''}" data-a="horaModo" data-v="direto">
      <b>${S.horaModo==='direto'?'✓ ':''}Já sei quanto cobro</b>
      <small>Você digita o preço da hora e acabou. Digitou 200, cobra 200.<br>
      <b style="color:var(--az)">É o jeito mais simples. Comece por aqui.</b></small></button>
     <button class="op ${S.horaModo==='calcular'?'sl':''}" data-a="horaModo" data-v="calcular">
      <b>${S.horaModo==='calcular'?'✓ ':''}Me ajude a calcular</b>
      <small>Você informa o salário e a planilha calcula o preço, somando encargos,
      despesas do escritório e lucro.</small></button>
    </div>

    ${S.horaModo==='direto'?`
    <div class="al g"><b>Como preencher:</b> em cada linha, escreva o valor que você cobra do cliente por uma hora daquele profissional.
     <br><br><b>Exemplo:</b> se você cobra R$ 200,00 pela hora do engenheiro sênior, digite <b>200</b> no campo dele. É isso.
     <br><br>Não sabe quanto cobrar? Use a outra opção, que faz a conta a partir do salário.</div>`
    :`<div class="al y"><b>Como funciona a conta:</b>
     <br><br>1. Você informa o <b>salário mensal</b> da pessoa (só o salário, sem encargos).
     <br>2. A planilha multiplica pelos encargos — FGTS, INSS, 13º, férias, vale — e divide pelas horas que ela produz por mês. Isso dá o que a hora <b>custa</b>.
     <br>3. Depois multiplica pelo fator de venda, para cobrir aluguel, software, imposto, as horas que ninguém paga e o seu lucro. Isso dá o que você <b>cobra</b>.
     <br><br><b>Exemplo:</b> salário de R$ 4.000 × 1,60 de encargos = R$ 6.400 por mês. Dividido por 150 horas = R$ 42,67 de custo por hora.
     Multiplicado por 3,0 = <b>R$ 128,00 cobrados por hora</b>.</div>
    <div class="gr g3" style="margin:14px 0">
     ${stepper({rot:'Encargos sobre o salário',path:'encargos',val:S.encargos,step:0.05,
       hint:'1,60 = o funcionário custa 60% a mais que o salário',
       aj:'FGTS, INSS patronal, 13º, férias com um terço, vale-transporte, vale-refeição e provisão de rescisão. Para CLT no regime comum, fica entre 1,55 e 1,80. Para quem contrata como PJ, use 1,00.'})}
     ${stepper({rot:'Horas produtivas por pessoa no mês',path:'horasPessoa',val:S.horasPessoa,step:10,
       hint:'de 160 contratuais, cerca de 150 viram projeto',
       aj:'Nem toda hora paga vira projeto: reunião interna, treinamento, proposta e retrabalho consomem parte do mês. Usar 150 já é realista; 120 é conservador.'})}
     ${stepper({rot:'Fator de venda',path:'mult',val:S.mult.toFixed(1),step:0.1,
       hint:'mercado de projeto: 2,5 a 3,5',
       aj:'Multiplica o custo para cobrir o que o salário não paga: aluguel, licenças de software, contabilidade, administrativo, imposto da nota, horas não faturáveis e lucro. Abaixo de 2,5 a conta raramente fecha.'})}
    </div>`}

    <div class="gr g2">
    ${FUNCOES.map((f,i)=>`<div style="border:1px solid var(--bd);border-radius:11px;padding:12px">
     <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:9px">
      <b style="font-size:13px">${esc(f[0])}</b>
      ${S.horaModo==='direto'?'':`<span style="font-size:15px;font-weight:800;color:var(--az);white-space:nowrap">${brl(Math.round(precoHora(i)))}/h</span>`}</div>
     <label class="f">${S.horaModo==='direto'?'R$ por hora cobrada do cliente':'Salário mensal da pessoa (R$)'}</label>
     <div class="stepper"><button data-a="stepFn" data-i="${i}" data-v="${S.horaModo==='direto'?-10:-200}">−</button>
      <input type="text" inputmode="decimal" value="${fmt(f[1])}" data-fn="${i}" data-num="1">
      <button data-a="stepFn" data-i="${i}" data-v="${S.horaModo==='direto'?10:200}">+</button></div>
     ${S.horaModo==='calcular'?`<div class="hint" style="margin-top:7px">
      ${brl(num(f[1]))} ÷ ${S.horasPessoa} h × ${num(S.encargos).toFixed(2)} = <b>${brl(custoHoraFn(i))}/h de custo</b>
      · × ${num(S.mult).toFixed(1)} = <b style="color:var(--az)">${brl(Math.round(precoHora(i)))}/h cobrados</b></div>`
      :`<div class="hint" style="margin-top:7px">entra assim nos serviços por hora</div>`}
    </div>`).join('')}
    </div>
    <div class="hint" style="margin-top:12px">Não usa alguma dessas funções? Deixe como está — ela só aparece se você escolher na hora de lançar um serviço.</div>
   </div>
   <div class="cd"><div class="h3">Padrões financeiros</div><div class="gr g3">
    ${stepper({rot:'Multiplicador da hora',path:'mult',val:S.mult.toFixed(1),step:0.1,hint:'mercado: 2,5 a 3,5'})}
    ${stepper({rot:'Imposto sobre a nota (%)',path:'imposto%',val:(S.imposto*100).toFixed(2),step:0.5})}
    ${stepper({rot:'Retenções (%)',path:'retencao%',val:(S.retencao*100).toFixed(2),step:0.5})}
    ${stepper({rot:'Margem alvo (%)',path:'margemAlvo%',val:(S.margemAlvo*100).toFixed(0),step:5})}
    ${stepper({rot:'Custo fixo mensal (R$)',path:'fixoMes',val:S.fixoMes,step:500})}
    ${stepper({rot:'Horas produtivas no mês',path:'horasMes',val:S.horasMes,step:40})}
    <div><label class="f">Custo-hora do escritório</label><input readonly value="${brl(c.custoHoraEsc)}"></div>
    ${stepper({rot:'Itens fora do CUB (%)',path:'cubExtra%',val:(S.cubExtra*100).toFixed(0),step:1})}
   </div></div>
   <div class="cd"><div class="h3">CUB de referência</div>
    <div class="gr g3">
     <div><label class="f">UF padrão</label><select data-a2="cubUF">
      <option value="">usar a UF do cliente</option>
      ${Object.keys(CUB).sort().map(u=>`<option value="${u}" ${u===S.cubUF?'selected':''}>${u} — ${brl(CUB[u])}/m²</option>`).join('')}</select></div>
     ${stepper({rot:'CUB R$/m² (0 = usar tabela)',path:'cubVal',val:fmt(S.cubVal),step:10})}
    </div>
    <div class="hint" style="margin-top:8px">O CUB muda todo mês. Confira no Sinduscon do seu estado e atualize aqui.</div></div>
   <div class="cd"><div class="h3">Dados que vão na proposta</div>
    <div class="gr g2">
     ${campo({rot:'Escritório',path:'emp.nome',val:S.emp.nome})}
     ${campo({rot:'Responsável técnico',path:'emp.resp',val:S.emp.resp})}
     ${campo({rot:'Registro',path:'emp.reg',val:S.emp.reg})}
     ${campo({rot:'CNPJ',path:'emp.cnpj',val:S.emp.cnpj,max:18})}
    </div></div>
   <div class="cd"><div class="h3" style="color:var(--vm)">Zona de risco</div>
    <button class="bt sec" style="color:var(--vm)" data-a="resetTudo">Apagar tudo e recomeçar</button>
    <div class="hint" style="margin-top:7px">Remove configurações, orçamento atual e biblioteca deste navegador.</div></div>
  </div></div></div>`}

function telaBib(){const l=BIB.ler();
 return`<div class="mdl" id="obMdBib"><div class="mdlbox">
  <div class="mdlhd"><b>📁 Meus orçamentos (${l.length})</b><button class="ic" data-a="fecharMdl">✕</button></div>
  <div class="mdlbd">
   <div class="bar"><button class="bt" data-a="bibSalvar">💾 Salvar o orçamento atual</button>
    <button class="bt sec" data-a="bibNovo">＋ Começar um novo</button></div>
   ${l.length?l.map(r=>`<div class="sv" style="border-left-color:var(--ci)">
     <div class="hd"><span class="nm" style="background:var(--ci)">📄</span>
      <div style="flex:1;min-width:0"><b style="font-size:14px">${esc(r.nome)}</b>
       <div style="font-size:12px;color:var(--mu)">${esc(r.cliente)} · ${esc(r.data)} · ${r.itens} serviços</div>
       <div style="font-size:12px;color:var(--mu)">${esc((r.objeto||'').slice(0,80))}</div></div>
      <div style="text-align:right"><div style="font-size:17px;font-weight:800;color:var(--az)">${brl(r.valor)}</div>
       <div style="font-size:11px;color:var(--mu)">salvo em ${new Date(r.quando).toLocaleDateString('pt-BR')}</div></div></div>
     <div style="display:flex;gap:7px;flex-wrap:wrap">
      <button class="bt sec" style="padding:8px 13px;font-size:13px" data-a="bibAbrir" data-v="${r.id}">Abrir</button>
      <button class="bt sec" style="padding:8px 13px;font-size:13px" data-a="bibDup" data-v="${r.id}">Duplicar</button>
      <button class="bt sec" style="padding:8px 13px;font-size:13px;color:var(--vm)" data-a="bibDel" data-v="${r.id}">Excluir</button>
     </div></div>`).join('')
    :`<div class="al y">Nenhum orçamento salvo ainda. Monte um e clique em <b>Salvar o orçamento atual</b> — ele fica guardado neste navegador e você pode abrir, duplicar ou excluir quando quiser.</div>`}
  </div></div></div>`}

/* ===== eventos (delegação — funciona em iframe e com CSP) ===== */
const root=$('#ob');
root.addEventListener('click',ev=>{
 const el=ev.target.closest('[data-a]');if(!el)return;
 const a=el.dataset.a,i=+el.dataset.i,v=el.dataset.v;
 if(a==='tip'){el.classList.toggle('on');return}
 ev.preventDefault();
 switch(a){
  case'abrir':OB.abrir();break; case'fechar':OB.fechar();break;
  case'ir':OB.ir(+v);break; case'vai':OB.vai(+v);break;
  case'add':OB.add();break; case'addHora':OB.addHora();break;
  case'del':OB.del(i);break; case'dup':OB.dup(i);break; case'mov':OB.mov(i,+v);break;
  case'limpar':OB.limpar();break; case'pac':OB.pacote(v);break;
  case'modo':OB.modo(i,v);break;
  case'grp':S.itens[i]._g=v;OB.persist();OB.render();break;
  case'uni':S.itens[i]._u=v;OB.persist();OB.render();break;
  case'niv':S.nivel=+v;OB.persist();OB.render();break;
  case'lod':S.lod=+v;OB.persist();OB.render();break;
  case'cmet':S.compMetodo=+v;OB.persist();OB.render();break;
  case'compZero':S.compPct=0;S.compM2=0;S.compHoras.forEach(x=>x[2]=0);
    OB.persist();OB.render();OB.toast('Compatibilização zerada nesta proposta');break;
  case'logo':OB.logo();break; case'tiraLogo':OB.tiraLogo();break;
  case'baixar':OB.baixar();break; case'abrirArq':OB.abrirArq();break;
  case'imprimir':OB.imprimir();break; case'word':OB.word();break;
  case'tipoCli':S.cli.tipo=v;S.cli.doc='';OB.persist();OB.render();break;
  case'tipoEmp':S.emp.tipo=v;S.emp.cnpj='';OB.persist();OB.render();break;
  case'tipoEdif':S.tipoEdif=v;OB.persist();OB.render();break;
  case'escopo':trocaEscopo(v);break;
  case'modoApp':trocaModo(v);break;
  case'regIn':S.obra.regime=+v;OB.persist();OB.render();break;
  case'precoBDI':S.obra.precoComBDI=(v==='1');OB.persist();OB.render();
    OB.toast(v==='1'?'O total não muda — BDI e encargo já estão no preço':'O total aumenta — BDI e encargo somados por cima');break;
  case'exAdd':S.obra.extras=S.obra.extras||[];S.obra.extras.push({nome:'',un:'un',qt:'',pu:'',mat:0.5,eq:0.08});
    OB.persist();OB.render();OB.toast('Item acrescentado — preencha a linha');break;
  case'exDel':{const x=S.obra.extras[i];
    pergunta('Excluir item','Remover "'+((x&&x.nome)||'este item')+'" da estimativa?',
     ()=>{S.obra.extras.splice(i,1);OB.persist();OB.render();OB.toast('Item removido')});break}
  case'tipoInfra':trocaTipoInfra(v);break;
  case'togg':S[v]=!S[v];OB.persist();OB.render();break;
  case'loteCond':S.lote.cond=(v==='1');OB.persist();OB.render();break;
  case'rodOpt':S.rod[v]=!S.rod[v];OB.persist();OB.render();break;
  case'querEstim':S.quer.estim=(v==='1');OB.persist();OB.render();break;
  case'recalcPrazo':S.etapasAuto=true;sincronizaEtapas();OB.persist();OB.render();
    OB.toast('Cronograma recalculado: '+prazoProjeto()+' dias');break;
  case'montar':OB.montarEscopo();break;
  case'excel':OB.excel();break;
  case'pad':S.cubPadrao=+v;OB.persist();OB.render();break;
  case'infraPad':S.infraPadrao=+v;S.infraVal=0;OB.persist();OB.render();break;
  case'rodPad':S.rodPadrao=+v;S.rodVal=0;OB.persist();OB.render();break;
  case'mdCfg':$('#obMdl').innerHTML=telaConfig();break;
  case'mdBib':$('#obMdl').innerHTML=telaBib();break;
  case'fecharMdl':$('#obMdl').innerHTML='';break;
  case'bibSalvar':BIB.salvar();if($('#obMdl').innerHTML)$('#obMdl').innerHTML=telaBib();break;
  case'bibNovo':BIB.novo();$('#obMdl').innerHTML='';break;
  case'novoTudo':pergunta('Começar do zero',
    'Isso apaga TUDO deste orçamento: módulo, cliente, áreas, serviços e valores. Seus dados de emissor e as configurações do escritório continuam salvos.\n\nSe quiser guardar o orçamento atual antes, cancele e use 📁 Orçamentos → Salvar.',
    ()=>{const emp=JSON.parse(JSON.stringify(S.emp));
     const cfg={mult:S.mult,horaModo:S.horaModo,encargos:S.encargos,horasPessoa:S.horasPessoa,
      imposto:S.imposto,retencao:S.retencao,margemAlvo:S.margemAlvo,fixoMes:S.fixoMes,horasMes:S.horasMes,
      cubUF:S.cubUF,cubExtra:S.cubExtra,obra:{...S.obra,extras:[]}};
     try{localStorage.removeItem('ob_orc_v3')}catch(e){}
     location.reload()},'Apagar e começar');break;
  case'bibAbrir':BIB.carregar(v);$('#obMdl').innerHTML='';break;
  case'bibDup':BIB.dup(v);$('#obMdl').innerHTML=telaBib();break;
  case'bibDel':BIB.excluir(v);$('#obMdl').innerHTML=telaBib();break;
  case'horaModo':{const novo=v;
    if(novo===S.horaModo)break;
    /* converte os valores para não bagunçar o que já estava preenchido */
    if(novo==='direto')FUNCOES.forEach((f,j)=>f[1]=Math.round(precoHora(j)));
    else FUNCOES.forEach((f,j)=>{const preco=num(f[1]);
      f[1]=Math.round((preco/(num(S.mult)||3))*(num(S.horasPessoa)||150)/(num(S.encargos)||1.6)/10)*10});
    S.horaModo=novo;
    try{localStorage.setItem('ob_fn_v2',JSON.stringify(FUNCOES.map(f=>f[1])))}catch(e){}
    OB.persist();OB.render();$('#obMdl').innerHTML=telaConfig();
    OB.toast(novo==='direto'?'Agora você digita o preço da hora':'Agora você digita o salário mensal');break}
  case'stepFn':{let n=num(FUNCOES[i][1])+parseFloat(v);if(n<0)n=0;FUNCOES[i][1]=n;
    try{localStorage.setItem('ob_fn_v2',JSON.stringify(FUNCOES.map(f=>f[1])))}catch(e){}
    OB.persist();OB.render();$('#obMdl').innerHTML=telaConfig();break}
  case'resetTudo':pergunta('Apagar tudo','Isso remove as configurações, o orçamento atual e toda a biblioteca deste navegador.',
    ()=>{try{localStorage.removeItem('ob_orc_v2');localStorage.removeItem('ob_orc_v3');localStorage.removeItem('ob_bib');localStorage.removeItem('ob_fn');localStorage.removeItem('ob_fn_v2')}catch(e){}
    location.reload()},'Apagar tudo');break;
  case'confSim':{const f=_conf;_conf=null;$('#obMdl').innerHTML='';if(f)f();break}
  case'confNao':_conf=null;$('#obMdl').innerHTML='';break;
  case'step':{const p=el.dataset.p;
    if(el.dataset.it!=null){const j=+el.dataset.it,k=el.dataset.k;
      let n=num(S.itens[j][k])+parseFloat(v);if(n<0)n=0;
      OB.upd(j,k,k==='ajuste'?String(n):String(n));break}
    aplicaPath(p,num(getPath(p))+parseFloat(v));OB.persist();OB.render();break}
  case'stepCh':{let n=num(S.compHoras[i][2])+parseFloat(v);if(n<0)n=0;S.compHoras[i][2]=n;OB.persist();OB.render();break}
  case'stepCu':{let n=num(S.custos[i][1])+parseFloat(v);if(n<0)n=0;S.custos[i][1]=n;OB.persist();OB.render();break}
  case'stepEt':{const k=+el.dataset.k;let n=num(S.etapas[i][k])+parseFloat(v);if(n<0)n=0;
    S.etapasAuto=false;S.etapas[i][k]=k===1?n/100:n;OB.persist();OB.render();break}
 }
});
function getPath(p){if(p.endsWith('%'))return(get(p.slice(0,-1))*100).toFixed(2);return get(p)}
function aplicaPath(p,n){if(n<0)n=0;
 if(p.endsWith('%')){set(p.slice(0,-1),n/100)}else set(p,n)}

root.addEventListener('input',ev=>{
 const t=ev.target;
 if(t.dataset.in!=null&&!t.dataset.num){
  let v=t.value,p=t.dataset.in;
  if(p==='cli.doc')v=S.cli.tipo==='PF'?mascaraCPF(v):mascaraCNPJ(v);
  if(p==='emp.cnpj')v=S.emp.tipo==='PF'?mascaraCPF(v):mascaraCNPJ(v);
  if(p==='emp.fone'||p==='cli.fone')v=mascaraFone(v);
  if(v!==t.value){const pos=t.selectionStart;t.value=v;try{t.setSelectionRange(pos+1,pos+1)}catch(e){}}
  set(p,v);OB.persist();
  /* CNPJ completo e válido: busca os dados na Receita uma única vez */
  if((p==='cli.doc'&&S.cli.tipo==='PJ')||(p==='emp.cnpj'&&S.emp.tipo==='PJ')){
   const d=soDig(v), alvo=(p==='emp.cnpj')?'emp':'cli';
   if(d.length===14&&validaCNPJ(v)&&OB['_cnpj_'+alvo]!==d){
    OB['_cnpj_'+alvo]=d; OB.toast('Consultando o CNPJ na Receita…');
    buscaCNPJ(v).then(r=>{ if(!r){OB.toast('CNPJ não encontrado na consulta pública — preencha à mão');return}
     aplicaCNPJ(alvo,r)})}
   if(d.length<14)OB['_cnpj_'+alvo]=null;
  }
  if(p==='cli.doc'||p==='emp.cnpj'||p==='cli.uf'||p==='emp.nome')OB.renderLeve(t);
  return}
 if(t.dataset.cep){
  const v=mascaraCEP(t.value);
  if(v!==t.value){const pos=t.selectionStart;t.value=v;try{t.setSelectionRange(pos+1,pos+1)}catch(e){}}
  S.cli.cep=v;OB.persist();
  t.classList.remove('bad','good');
  if(soDig(v).length!==8){OB._cep=null;return}
  if(OB._cep===soDig(v))return;          /* já buscou este CEP */
  OB._cep=soDig(v);
  OB.toast('Buscando o endereço…');
  buscaCEP(v).then(r=>{
   if(!r){t.classList.add('bad');
    OB.toast('CEP não encontrado ou sem internet — preencha à mão');return}
   S.cli.uf=r.uf; S.cli.cid=r.cid;
   if(r.bairro)S.cli.bairro=r.bairro;
   if(r.end)S.cli.end=r.end;
   OB.persist();OB.render();
   OB.toast(r.end?(r.end+' — '+r.cid+'/'+r.uf):(r.cid+'/'+r.uf+' preenchido'))});
  return}
 if(t.dataset.ex!=null&&(t.dataset.k==='nome'||t.dataset.k==='un')){
  S.obra.extras[+t.dataset.ex][t.dataset.k]=t.value;OB.persist();return}
 if(t.dataset.it!=null&&t.dataset.k&&t.dataset.k!=='qtd'&&t.dataset.k!=='ajuste'){
  S.itens[+t.dataset.it][t.dataset.k]=t.value;OB.persist();return}
});
OB.renderLeve=function(focado){
 const p=focado&&focado.dataset.in,pos=focado&&focado.selectionStart;
 OB.render();
 if(p){const n=document.querySelector(`[data-in="${p}"]`);
  if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}}};

root.addEventListener('change',ev=>{
 const t=ev.target;
 if(t.dataset.cep){root.dispatchEvent(new Event('x'));
  const ev2={target:t}; OB._cep=null; root['on_input']?root['on_input'](ev2):t.dispatchEvent(new Event('input',{bubbles:true}));return}
 if(t.dataset.chk){S[t.dataset.chk]=t.checked;OB.persist();OB.render();return}
 if(t.dataset.a2==='cubUF'){S.cubUF=t.value;S.cubVal=0;OB.persist();OB.render();return}
 if(t.dataset.fn!=null){FUNCOES[+t.dataset.fn][1]=num(t.value);
  try{localStorage.setItem('ob_fn_v2',JSON.stringify(FUNCOES.map(f=>f[1])))}catch(e){}
  OB.persist();OB.render();$('#obMdl').innerHTML=telaConfig();return}
 if(t.dataset.in==='cli.uf'){S.cli.uf=t.value;S.cli.cid='';OB.persist();OB.render();return}
 if(t.dataset.in!=null&&t.dataset.num){aplicaPath(t.dataset.in,num(t.value));OB.persist();OB.render();return}
 if(t.dataset.it!=null&&t.dataset.k){OB.upd(+t.dataset.it,t.dataset.k,t.value);return}
 if(t.dataset.ch!=null){const i=+t.dataset.ch,k=+t.dataset.k;
  S.compHoras[i][k]=k===2?num(t.value):t.value;OB.persist();OB.render();return}
 if(t.dataset.cu!=null){S.custos[+t.dataset.cu][1]=num(t.value);OB.persist();OB.render();return}
 if(t.dataset.pu!=null){S.obra.puTP=S.obra.puTP||[];S.obra.puTP[+t.dataset.pu]=num(t.value);OB.persist();OB.render();return}
 if(t.dataset.ex!=null){const i=+t.dataset.ex,k=t.dataset.k;
  if(k==='matpc'){S.obra.extras[i].mat=Math.min(1,Math.max(0,num(t.value)/100))}
  else if(k==='eqpc'){S.obra.extras[i].eq=Math.min(1,Math.max(0,num(t.value)/100))}
  else S.obra.extras[i][k]=(k==='qt'||k==='pu')?num(t.value):t.value;
  OB.persist();OB.render();return}
 if(t.dataset.et!=null){const i=+t.dataset.et,k=+t.dataset.k;
  S.etapasAuto=false;S.etapas[i][k]=k===1?num(t.value)/100:num(t.value);OB.persist();OB.render();return}
 if(t.dataset.in!=null){set(t.dataset.in,t.value);OB.persist();OB.render()}
});

root.addEventListener('mousedown',e=>{if(e.target.classList&&e.target.classList.contains('mdl'))$('#obMdl').innerHTML=''});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#obMdl').innerHTML){$('#obMdl').innerHTML='';return}
 if(e.key==='Escape'&&$('#obApp').classList.contains('on'))OB.fechar()});
/* Só restaura se o modo salvo combinar com os números salvos — evita herdar
   custo-hora de uma versão antiga no campo que agora é preço de venda. */
try{const f=JSON.parse(localStorage.getItem('ob_fn_v2')||'null');
 if(f&&f.length===FUNCOES.length&&f.every(v=>typeof v==='number'&&v>0))f.forEach((v,i)=>FUNCOES[i][1]=v)}catch(e){}
OB.restore();