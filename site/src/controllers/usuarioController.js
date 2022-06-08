var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    // console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                // console.log(erro);
                // console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    // console.log(`\nResultados encontrados: ${resultado.length}`);
                    // console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        // console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    // console.log(erro);
                    // console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function entrarEmpresa(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrarEmpresa(nome, senha)
            .then(
                function (resultado) {
                    // console.log(`\nResultados encontrados: ${resultado.length}`);
                    // console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        // console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    // console.log(erro);
                    // console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) { 
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.cpfServer;
    var cpf = req.body.senhaServer;
    var cargo = req.body.cargoServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, email, senha, cpf, cargo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    // console.log(erro);
                    // console.log(
                        // "\nHouve um erro ao realizar o cadastro! Erro: ",
                        // erro.sqlMessage
                    // );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEmpresa(req, res) { 
    var nomeEmp = req.body.nomeEmpServer;
    var senhaEmp = req.body.senhaEmpServer;
    var enderecoEmp = req.body.enderecoEmpServer;
    var cnpjEmp = req.body.cnpjEmpServer;

    if (nomeEmp == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senhaEmp == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrarEmpresa(nomeEmp, senhaEmp,enderecoEmp, cnpjEmp)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// ------------- AQUI FICA TODAS AS FUNÇÔES DA DASH ----------------------

// ----------------------- Memoria ram total ----------------
function getMemoriaRamTotal(req, res) {
    usuarioModel.getMemoriaRamTotal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// -------------------------- RAM TOTAL TOTEM 2 -----------------------------------------------
function getMemoriaRamTotalTot2(req, res) {
    usuarioModel.getMemoriaRamTotalTot2()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// ====================================================================================================

// -------------------------- RAM TOTAL TOTEM 3 -----------------------------------------------
function getMemoriaRamTotalTot3(req, res) {
    usuarioModel.getMemoriaRamTotalTot3()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// ====================================================================================================

// -------------------------- RAM TOTAL TOTEM 4 -----------------------------------------------
function getMemoriaRamTotalTot4(req, res) {
    usuarioModel.getMemoriaRamTotalTot4()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// ====================================================================================================

// -------------------------- RAM TOTAL TOTEM 5 -----------------------------------------------
function getMemoriaRamTotalTot5(req, res) {
    usuarioModel.getMemoriaRamTotalTot5()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// ====================================================================================================

// ---------- Memoria Ram em uso ---------------

//------------------------------------------ RAM USO TOTEM 2 ----------------------------------------

function getMemoriaRamEmUsoTot2(req, res) {
    var id = req.body.idMaqServer;

    console.log("TOMEEEEEEEEEE"+ id)

    usuarioModel.getMemoriaRamEmUsoTot2(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// ====================================================================================================

//------------------------------------------ RAM USO TOTEM 3 ----------------------------------------
function getMemoriaRamEmUsoTot3(req, res) {
    usuarioModel.getMemoriaRamEmUsoTot3()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ==========================================================================================

//------------------------------------------ RAM USO TOTEM 4 ----------------------------------------
function getMemoriaRamEmUsoTot4(req, res) {
    usuarioModel.getMemoriaRamEmUsoTot4()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ==========================================================================================

//------------------------------------------ RAM USO TOTEM 5 ----------------------------------------
function getMemoriaRamEmUsoTot5(req, res) {
    usuarioModel.getMemoriaRamEmUsoTot5()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ==========================================================================================

// Memoria Total
function getMemoriaTotal(req, res) {
    usuarioModel.getMemoriaTotal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// Memoria Total em uso
function getMemoriaEmUso(req, res) {

    id = req.body.idMaqServer

    usuarioModel.getMemoriaEmUso(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                //console.log(erro);
               // console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// Sistema Operacional
function getSistemaOp(req, res) {
    usuarioModel.getSistemaOp()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// Processador
function getProcessador(req, res) {
    usuarioModel.getProcessador()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// arquitetura
function getArquitetura(req, res) {
    usuarioModel.getArquitetura()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// cpu
function getCpu(req, res) {

    id = req.body.idMaqServer

    usuarioModel.getCpu(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function reiniciarmaq(req, res) {
    var id = req.params.idMaqServer;
    var reiniciarMaq = req.body.reiniciarMaqServer;
    
  
      usuarioModel
        .reiniciarmaq(reiniciarMaq, id)
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    
  }

  function listarUsuario(req, res) {
    usuarioModel
      .getUsuario()
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
        res.status(10).json(erro.sqlMessage);
  
      });
  }

  function listarUsuarioLogin(req, res) {
    usuarioModel
      .listarUsuario()
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
        res.status(10).json(erro.sqlMessage);
  
      });
  }

  function listarBotoes(req, res) {
    usuarioModel
      .getBotao()
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
        res.status(10).json(erro.sqlMessage);
  
      });
  }

// ===========================ADC TOTENS================================================

function listarTotem(req, res) {
    usuarioModel.listarTotem()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

//   var totemModel = require("../models/totemModel");

// function atualizarTotem(req, res) {
//     var id = req.params.idTotem;
//     var sistema = req.body.sistemaServer;
//     var fabricante = req.body.fabricanteServer;
//     var ipTotem = req.body.ipTotemServer;
  
//     console.log("CONTROLLER: ", id);
//     console.log("CONTROLLER: ", sistema);
//     console.log("CONTROLLER: ", fabricante);
//     console.log("CONTROLLER: ", ipTotem);
//       totemModel
//         .atualizarTotem(id, sistema, fabricante, ipTotem)
//         .then(function (resultado) {
//           res.json(resultado);
//         })
//         .catch(function (erro) {
//           console.log(erro);
//           console.log(
//             "\nHouve um erro ao atualizar usuario! Erro: ",
//             erro.sqlMessage
//           );
//           res.status(500).json(erro.sqlMessage);
//         });
//     }

//     function removerTotem(req, res) {
//       console.log(req.params);
//       totemModel
//         .deletarTotem(req.params.idTotem)
//         .then(function (resultado) {
//           res.json({ ok: true });
//         })
//         .catch(function (erro) {
//           console.log(erro);
//           console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
//           res.status(500).json(erro.sqlMessage);
//         });
//     }


function atualizarUsuario(req, res) {
    var id = req.params.idUsuario;
    var statusUser = req.body.statusUserServer;

    console.log("CONTROLLER: ", id);
    console.log("CONTROLLER: ", statusUser);

      usuarioModel
        .updateUsuario(id, statusUser)
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar usuario! Erro: ",
            erro.sqlMessage
          );
          res.status(10).json(erro.sqlMessage);
        });
    }

function reiniciarMaquina(req, res) {
    var id = req.body.idMaquinaServer;

    console.log("CONTROLLER: ", id);
    
      usuarioModel
        .reiniciarMaquina(id)
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar usuario! Erro: ",
            erro.sqlMessage
          );
          res.status(10).json(erro.sqlMessage);
        });
    }

function removerMaquina(req, res) {
    var id = req.body.idMaquinaServer;

    console.log("CONTROLLER: ", id);
    
      usuarioModel
        .removerMaquina(id)
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar usuario! Erro: ",
            erro.sqlMessage
          );
          res.status(10).json(erro.sqlMessage);
        });
    }

    function getMemoriaRamEmUso(req, res) {

        var id = req.body.idMaquinaServer;

        usuarioModel.getMemoriaRamEmUso(id)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
  
    
module.exports = {
    entrar,
    entrarEmpresa,
    cadastrar,
    listar,
    cadastrarEmpresa,
    testar,
    reiniciarmaq,
    //getMemoriaRamTotal,
    //getMemoriaRamEmUso,
    getMemoriaEmUso,
    getMemoriaTotal,
    getSistemaOp,
    getProcessador,
    getArquitetura,
    getCpu,
    listarUsuarioLogin,
    getMemoriaRamEmUsoTot2,
    //getMemoriaRamEmUsoTot3,
    //getMemoriaRamEmUsoTot4,
    //getMemoriaRamEmUsoTot5,
    //getMemoriaRamTotalTot2,
    //getMemoriaRamTotalTot3,
    //getMemoriaRamTotalTot4,
    //getMemoriaRamTotalTot5,
    listarTotem,
    listarUsuario,
    listarBotoes,
    atualizarUsuario,
    removerMaquina,
    reiniciarMaquina,
    // atualizarTotem,
    // removerTotem
}