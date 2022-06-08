// ------ Memoria Total 
function getMemoriaRamTotal() {
    fetch("/usuarios/getMemoriaRamTotal").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamTotal()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramTotal.RamTotalbd);
                sessionStorage.RAMTOTAL = ramTotal.RamTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

// ------------------ Ram Total totem 2 ------------------------------------------------

function getMemoriaRamTotalTot2() {
    fetch("/usuarios/getMemoriaRamTotalTot2").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamTotalTot2()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramTotal.RamTotalbd);
                sessionStorage.RAMTOTALTOT2 = ramTotal.RamTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

// ------------------ Ram Total totem 3 ------------------------------------------------

function getMemoriaRamTotalTot3() {
    fetch("/usuarios/getMemoriaRamTotalTot3").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamTotalTot3()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramTotal.RamTotalbd);
                sessionStorage.RAMTOTALTOT3 = ramTotal.RamTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
// ============================================================================================

// ------------------ Ram Total totem 4 ------------------------------------------------

function getMemoriaRamTotalTot4() {
    fetch("/usuarios/getMemoriaRamTotalTot4").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamTotalTot4()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramTotal.RamTotalbd);
                sessionStorage.RAMTOTALTOT4 = ramTotal.RamTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
// ============================================================================================

// ------------------ Ram Total totem 5 ------------------------------------------------

function getMemoriaRamTotalTot5() {
    fetch("/usuarios/getMemoriaRamTotalTot5").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamTotalTot5()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramTotal.RamTotalbd);
                sessionStorage.RAMTOTALTOT5 = ramTotal.RamTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
// ============================================================================================

//------------------------------------ RAM EM USO TOTEM 1---------------------------------------- 

// function getMemoriaRamEmUso() {
//     fetch("/usuarios/getMemoriaRamEmUso").then(function (resposta) {
//         console.log("ESTOU NO THEN DO getMemoriaRamEmUso()!")
//         if (resposta.ok) {
//             resposta.json().then(function (resposta) {
//                 console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

//                 ramEmuso = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
//                 console.log(ramEmuso.RamEmUsobd);
//                 sessionStorage.RAMEMUSO = ramEmuso.RamEmUsobd;

//             });
//         } else {
//             console.log("Dados recebidos: ", JSON.stringify(resposta));
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//     })
//     return false;
// };

//------------------------------------------------------------------------------

// ------------------------------------- RAM EM USO TITEM 2------------------------------------------
function getMemoriaRamEmUsoTot2() {
    fetch("/usuarios/getMemoriaRamEmUsoTot2").then(function (resposta) {
        //console.log("ESTOU NO THEN DO getMemoriaRamEmUsoTot2()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                //console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramEmuso = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                //console.log(ramEmuso.RamEmUsobd);
                sessionStorage.RAMEMUSOTOT2 = ramEmuso.RamEmUsobd;

            });
        } else {
            //console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};
//------------------------------------------------------------------------------



//------------------------------------------ RAM USO TOTEM 3 ----------------------------------------
function getMemoriaRamEmUsoTot3() {
    fetch("/usuarios/getMemoriaRamEmUsoTot3").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamEmUsoTot3()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramEmuso = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramEmuso.RamEmUsobd);
                sessionStorage.RAMEMUSOTOT3 = ramEmuso.RamEmUsobd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};
//------------------------------------------------------------------------------

//------------------------------------------ RAM USO TOTEM 4 ----------------------------------------
function getMemoriaRamEmUsoTot4() {
    fetch("/usuarios/getMemoriaRamEmUsoTot4").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamEmUsoTot4()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramEmuso = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramEmuso.RamEmUsobd);
                sessionStorage.RAMEMUSOTOT4 = ramEmuso.RamEmUsobd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};
//------------------------------------------------------------------------------

//------------------------------------------ RAM USO TOTEM 4 ----------------------------------------
function getMemoriaRamEmUsoTot5() {
    fetch("/usuarios/getMemoriaRamEmUsoTot5").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaRamEmUsoTot5()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                ramEmuso = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(ramEmuso.RamEmUsobd5);
                sessionStorage.RAMEMUSOTOT5 = ramEmuso.RamEmUsobd5;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};
//------------------------------------------------------------------------------


// Memoria  
function getMemoriaTotal() {
    fetch("/usuarios/getMemoriaTotal").then(function (resposta) {
        console.log("ESTOU NO THEN DO getMemoriaTotal()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                memoriaTotal = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(memoriaTotal.MemoriaTotalbd);
                sessionStorage.MEMORIATOTAL = memoriaTotal.MemoriaTotalbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

// Memoria  



// Sistema Op  
function getSistemaOp() {
    fetch("/usuarios/getSistemaOp").then(function (resposta) {
        console.log("ESTOU NO THEN DO getSistemaOp()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                sistemaop = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(sistemaop.Sistemaopbd);
                sessionStorage.SISTEMAOP = sistemaop.Sistemaopbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};

// Processador 
function getProcessador() {
    fetch("/usuarios/getProcessador").then(function (resposta) {
        console.log("ESTOU NO THEN DO getProcessador()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                processador = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(processador.Processadorbd);
                sessionStorage.PROCESSADOR = processador.Processadorbd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};

// Arquitetura 
function getArquitetura() {
    fetch("/usuarios/getArquitetura").then(function (resposta) {
        console.log("ESTOU NO THEN DO getArquitetura()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usuario: ", JSON.stringify(resposta));

                arquitetura = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(arquitetura.Arquiteturabd);
                sessionStorage.ARQUITETURA = arquitetura.Arquiteturabd;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
};


// setInterval(() =>{
//     getMemoriaRamEmUso();
//     getMemoriaEmUso();
//     getMemoriaRamEmUsoTot2();
//     getMemoriaRamEmUsoTot3();
//     getMemoriaRamEmUsoTot4();
//     getMemoriaRamEmUsoTot5();
//     getMemoriaRamTotalTot2();
//     getMemoriaRamTotalTot3();
//     getMemoriaRamTotalTot4();
//     getMemoriaRamTotalTot5();
// }, 1000)