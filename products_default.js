export const PRODUCTS_DEFAULT = [

  // ── PROTEINE ──────────────────────────────────────────────────────────────
  // Petto di pollo: si pesa sempre in grammi
  { id: 'p1',  name: 'Petto di Pollo',           brand: 'Generico',            category: 'Proteine',    emoji: '🍗', unit: 'g',   kcal: 165, prot: 31,   carb: 0,    fat: 3.6  },
  // Tonno in scatola: venduto a lattine (~80g sgocciolato)
  { id: 'p2',  name: 'Tonno al Naturale',         brand: 'Rio Mare',            category: 'Proteine',    emoji: '🐟', unit: 'pcs', pieceWeight: 80,  kcal: 103, prot: 23,   carb: 0,    fat: 1.2  },
  // Uova: si contano sempre a pezzi (~60g cad.)
  { id: 'p3',  name: 'Uova Intere',               brand: 'Generico',            category: 'Proteine',    emoji: '🥚', unit: 'pcs', pieceWeight: 60,  kcal: 155, prot: 13,   carb: 1.1,  fat: 10.6 },
  // Albumi liquidi: si versano in ml/g
  { id: 'p4',  name: 'Albumi Liquidi',            brand: 'Eurovo',              category: 'Proteine',    emoji: '🥛', unit: 'g',   kcal: 47,  prot: 10.8, carb: 0.4,  fat: 0.2  },
  { id: 'p5',  name: 'Salmone Fresco',            brand: 'Generico',            category: 'Proteine',    emoji: '🐠', unit: 'g',   kcal: 208, prot: 20,   carb: 0,    fat: 13.4 },
  { id: 'p6',  name: 'Manzo Macinato 5%',         brand: 'Generico',            category: 'Proteine',    emoji: '🥩', unit: 'g',   kcal: 137, prot: 21,   carb: 0,    fat: 5    },
  { id: 'p7',  name: 'Merluzzo',                  brand: 'Generico',            category: 'Proteine',    emoji: '🐟', unit: 'g',   kcal: 82,  prot: 18,   carb: 0,    fat: 0.7  },
  // Whey: si misura in grammi (scoop)
  { id: 'p8',  name: 'Whey Protein',              brand: 'Optimum Nutrition',   category: 'Integratori', emoji: '💪', unit: 'g',   kcal: 376, prot: 80,   carb: 6,    fat: 4    },
  { id: 'p9',  name: 'Whey Isolate',              brand: 'MyProtein',           category: 'Integratori', emoji: '⚗️', unit: 'g',   kcal: 371, prot: 83,   carb: 4,    fat: 2.4  },
  { id: 'p10', name: 'Prosciutto Crudo',          brand: 'San Daniele',         category: 'Proteine',    emoji: '🍖', unit: 'g',   kcal: 242, prot: 26,   carb: 0,    fat: 14   },
  { id: 'p11', name: 'Bresaola della Valtellina', brand: 'Rigamonti',           category: 'Proteine',    emoji: '🥩', unit: 'g',   kcal: 151, prot: 33,   carb: 0.5,  fat: 2    },
  { id: 'p12', name: 'Tacchino Arrosto',          brand: 'Aia',                 category: 'Proteine',    emoji: '🥪', unit: 'g',   kcal: 100, prot: 20,   carb: 1,    fat: 2    },
  { id: 'p13', name: 'Fesa di Tacchino',          brand: 'Aia / Negroni',       category: 'Proteine',    emoji: '🍗', unit: 'g',   kcal: 104, prot: 24,   carb: 1,    fat: 1    },
  { id: 'p14', name: 'Seitan Naturale',           brand: 'Compagnia Italiana',  category: 'Proteine',    emoji: '🌾', unit: 'g',   kcal: 120, prot: 25,   carb: 4,    fat: 0.5  },
  // Hamburger: si contano a pezzi (~130g cad.)
  { id: 'p15', name: 'Hamburger di Vitello',      brand: 'Generico',            category: 'Proteine',    emoji: '🍔', unit: 'pcs', pieceWeight: 130, kcal: 150, prot: 20,   carb: 0,    fat: 8    },
  { id: 'p16', name: 'Hamburger di Scottona',     brand: 'Fiorani / Coop',      category: 'Proteine',    emoji: '🥩', unit: 'pcs', pieceWeight: 130, kcal: 180, prot: 21,   carb: 0,    fat: 11   },
  { id: 'p17', name: 'Hamburger di Pollo',        brand: 'Amadori',             category: 'Proteine',    emoji: '🍗', unit: 'pcs', pieceWeight: 120, kcal: 130, prot: 19,   carb: 1,    fat: 5.5  },
  { id: 'p18', name: 'Hamburger di Tacchino',     brand: 'Aia',                 category: 'Proteine',    emoji: '🍔', unit: 'pcs', pieceWeight: 120, kcal: 125, prot: 20,   carb: 1,    fat: 4.5  },
  { id: 'p19', name: 'Battuta di Fassona',        brand: 'Generico',            category: 'Proteine',    emoji: '🥩', unit: 'g',   kcal: 120, prot: 22,   carb: 0,    fat: 3.5  },
  { id: 'p20', name: 'Straccetti di Manzo',       brand: 'Generico',            category: 'Proteine',    emoji: '🍖', unit: 'g',   kcal: 145, prot: 22,   carb: 0,    fat: 6    },
  { id: 'p21', name: 'Tagliata di Manzo',         brand: 'Generico',            category: 'Proteine',    emoji: '🥩', unit: 'g',   kcal: 160, prot: 24,   carb: 0,    fat: 7    },
  { id: 'p22', name: 'Lupini Sgusciati',          brand: 'Madama Oliva',        category: 'Proteine',    emoji: '🟡', unit: 'g',   kcal: 115, prot: 15,   carb: 7,    fat: 3    },
  { id: 'p23', name: 'Sgombro al Naturale',       brand: 'Delicius',            category: 'Proteine',    emoji: '🐟', unit: 'pcs', pieceWeight: 125, kcal: 160, prot: 22,   carb: 0,    fat: 8    },
  { id: 'p24', name: 'Edamame',                   brand: 'Bonduelle',           category: 'Proteine',    emoji: '🫛', unit: 'g',   kcal: 122, prot: 11,   carb: 10,   fat: 5    },

  // ── CARBOIDRATI ───────────────────────────────────────────────────────────
  { id: 'c1',  name: 'Riso Bianco (cotto)',        brand: 'Generico',            category: 'Carboidrati', emoji: '🍚', unit: 'g',   kcal: 130, prot: 2.7,  carb: 28,   fat: 0.3  },
  { id: 'c2',  name: 'Pasta (cruda)',              brand: 'Barilla',             category: 'Carboidrati', emoji: '🍝', unit: 'g',   kcal: 352, prot: 12.5, carb: 71,   fat: 1.5  },
  { id: 'c3',  name: 'Avena',                     brand: 'Quaker',              category: 'Carboidrati', emoji: '🌾', unit: 'g',   kcal: 389, prot: 17,   carb: 66,   fat: 7    },
  { id: 'c4',  name: 'Patate Dolci',              brand: 'Generico',            category: 'Carboidrati', emoji: '🍠', unit: 'g',   kcal: 86,  prot: 1.6,  carb: 20,   fat: 0.1  },
  // Pane in cassetta: a fette (~30g cad.)
  { id: 'c5',  name: 'Pane Integrale',            brand: 'Generico',            category: 'Carboidrati', emoji: '🍞', unit: 'pcs', pieceWeight: 30,  kcal: 247, prot: 9,    carb: 41,   fat: 3.5  },
  { id: 'c6',  name: 'Quinoa (cotta)',            brand: 'Generico',            category: 'Carboidrati', emoji: '🌿', unit: 'g',   kcal: 120, prot: 4.4,  carb: 21,   fat: 1.9  },
  { id: 'c7',  name: 'Muesli Cameo',             brand: 'Cameo',               category: 'Carboidrati', emoji: '🥣', unit: 'g',   kcal: 350, prot: 7,    carb: 60,   fat: 8    },
  // Pane bauletto: a fette (~25g cad.)
  { id: 'c8',  name: 'Pane Bauletto Integrale',  brand: 'Mulino Bianco',       category: 'Carboidrati', emoji: '🍞', unit: 'pcs', pieceWeight: 25,  kcal: 250, prot: 9,    carb: 45,   fat: 3.7  },
  { id: 'c9',  name: 'Fette Biscottate',         brand: 'Mulino Bianco',       category: 'Carboidrati', emoji: '🍞', unit: 'pcs', pieceWeight: 10,  kcal: 426, prot: 12,   carb: 72,   fat: 8    },
  { id: 'c10', name: 'Gnocchi di Patate',        brand: 'Giovanni Rana',       category: 'Carboidrati', emoji: '🥔', unit: 'g',   kcal: 160, prot: 3.5,  carb: 35,   fat: 0.5  },
  { id: 'c11', name: 'Gallette di Mais',         brand: 'Fiorentini',          category: 'Carboidrati', emoji: '🥯', unit: 'pcs', pieceWeight: 9,   kcal: 385, prot: 7,    carb: 82,   fat: 2.5  },
  { id: 'c12', name: 'Farro Perlato (crudo)',    brand: 'Poggio del Farro',    category: 'Carboidrati', emoji: '🌾', unit: 'g',   kcal: 340, prot: 14,   carb: 65,   fat: 2.5  },
  { id: 'c13', name: 'Riso Venere (nero)',       brand: 'Riso Scotti',         category: 'Carboidrati', emoji: '🍚', unit: 'g',   kcal: 345, prot: 8,    carb: 64,   fat: 2    },
  { id: 'c14', name: 'Pane di Segale',           brand: 'Pema',                category: 'Carboidrati', emoji: '🍞', unit: 'pcs', pieceWeight: 35,  kcal: 193, prot: 5,    carb: 36,   fat: 1.2  },
  { id: 'c15', name: 'Pasta Integrale',          brand: 'La Molisana',         category: 'Carboidrati', emoji: '🍝', unit: 'g',   kcal: 350, prot: 14,   carb: 65,   fat: 2.5  },
  { id: 'c16', name: 'Cous Cous (crudo)',        brand: 'Barilla',             category: 'Carboidrati', emoji: '🥣', unit: 'g',   kcal: 356, prot: 12,   carb: 72,   fat: 1.5  },
  { id: 'c17', name: 'Purè di Patate (con latte)',          brand: 'Generico',        category: 'Carboidrati', emoji: '🥣', unit: 'g',   kcal: 90,  prot: 2,    carb: 15,   fat: 2.5  },
  { id: 'c18', name: 'Purè di Patate (busta)',              brand: 'Pfanni / Maggi',  category: 'Carboidrati', emoji: '📦', unit: 'g',   kcal: 350, prot: 7,    carb: 75,   fat: 1    },
  { id: 'c19', name: 'Purè di Patate Fit (acqua/latte sc.)', brand: 'Generico',       category: 'Carboidrati', emoji: '🥔', unit: 'g',   kcal: 75,  prot: 2,    carb: 16,   fat: 0.2  },
  { id: 'c20', name: 'Polenta (cotta)',          brand: 'Generico',            category: 'Carboidrati', emoji: '🌽', unit: 'g',   kcal: 85,  prot: 2,    carb: 18,   fat: 0.5  },

  // ── LATTICINI ─────────────────────────────────────────────────────────────
  { id: 'l1',  name: 'Ricotta Magra',            brand: 'Granarolo',           category: 'Latticini',   emoji: '🧀', unit: 'g',   kcal: 138, prot: 11,   carb: 3,    fat: 9    },
  { id: 'l2',  name: 'Yogurt Greco 0%',          brand: 'Fage',                category: 'Latticini',   emoji: '🥛', unit: 'g',   kcal: 59,  prot: 10,   carb: 3.6,  fat: 0.3  },
  { id: 'l3',  name: 'Fiocchi di Latte',         brand: 'Latti Vivi',          category: 'Latticini',   emoji: '🧀', unit: 'g',   kcal: 98,  prot: 11,   carb: 3.4,  fat: 4.3  },
  { id: 'l4',  name: 'Latte Scremato',           brand: 'Parmalat',            category: 'Latticini',   emoji: '🥛', unit: 'g',   kcal: 35,  prot: 3.4,  carb: 5,    fat: 0.1  },
  { id: 'l5',  name: 'Parmigiano Reggiano',      brand: 'Parmareggio',         category: 'Latticini',   emoji: '🧀', unit: 'g',   kcal: 431, prot: 38,   carb: 4.1,  fat: 29   },
  // Mozzarella di bufala: venduta a pezzi (~125g cad.)
  { id: 'l6',  name: 'Mozzarella di Bufala',     brand: 'Garofalo',            category: 'Latticini',   emoji: '⚪', unit: 'pcs', pieceWeight: 125, kcal: 288, prot: 14,   carb: 1.5,  fat: 25   },
  // Burrata: venduta a pezzi (~125g cad.)
  { id: 'l7',  name: 'Burrata',                  brand: 'Generico',            category: 'Latticini',   emoji: '🧀', unit: 'pcs', pieceWeight: 125, kcal: 254, prot: 12,   carb: 2,    fat: 22   },
  { id: 'l8',  name: 'Skyr Bianco',              brand: 'Lidl (Milbona)',      category: 'Latticini',   emoji: '🥣', unit: 'g',   kcal: 63,  prot: 11,   carb: 4,    fat: 0.2  },
  { id: 'l9',  name: 'Fiocchi di Latte Light',   brand: 'Jocca',               category: 'Latticini',   emoji: '🥣', unit: 'g',   kcal: 66,  prot: 10,   carb: 1.5,  fat: 2    },
  { id: 'l10', name: 'Quark Magro',              brand: 'Exquisa',             category: 'Latticini',   emoji: '🥛', unit: 'g',   kcal: 48,  prot: 8.5,  carb: 3.5,  fat: 0.2  },

  // ── FRUTTA ────────────────────────────────────────────────────────────────
  // Banana: si conta a pezzi (~120g cad. senza buccia)
  { id: 'f1',  name: 'Banana',                   brand: 'Generico',            category: 'Frutta',      emoji: '🍌', unit: 'pcs', pieceWeight: 120, kcal: 89,  prot: 1.1,  carb: 23,   fat: 0.3  },
  // Mela: si conta a pezzi (~150g cad.)
  { id: 'f2',  name: 'Mela',                     brand: 'Generico',            category: 'Frutta',      emoji: '🍎', unit: 'pcs', pieceWeight: 150, kcal: 52,  prot: 0.3,  carb: 14,   fat: 0.2  },
  { id: 'f3',  name: 'Frutti di Bosco',          brand: 'Generico',            category: 'Frutta',      emoji: '🍇', unit: 'g',   kcal: 57,  prot: 0.7,  carb: 13,   fat: 0.3  },
  // Kiwi: si conta a pezzi (~80g cad. senza buccia)
  { id: 'f4',  name: 'Kiwi',                     brand: 'Generico',            category: 'Frutta',      emoji: '🥝', unit: 'pcs', pieceWeight: 80,  kcal: 61,  prot: 1.1,  carb: 15,   fat: 0.5  },
  // Arancia: si conta a pezzi (~160g cad. senza buccia)
  { id: 'f5',  name: 'Arancia',                  brand: 'Generico',            category: 'Frutta',      emoji: '🍊', unit: 'pcs', pieceWeight: 160, kcal: 47,  prot: 0.9,  carb: 12,   fat: 0.1  },
  // Avocado: si conta a pezzi (~150g cad. senza nocciolo)
  { id: 'f6',  name: 'Avocado',                  brand: 'Generico',            category: 'Frutta',      emoji: '🥑', unit: 'pcs', pieceWeight: 150, kcal: 160, prot: 2,    carb: 9,    fat: 15   },
  // Pompelmo: si conta a pezzi (~200g cad. senza buccia)
  { id: 'f7',  name: 'Pompelmo',                 brand: 'Generico',            category: 'Frutta',      emoji: '🍊', unit: 'pcs', pieceWeight: 200, kcal: 42,  prot: 0.8,  carb: 11,   fat: 0.1  },

  // ── VERDURA ───────────────────────────────────────────────────────────────
  { id: 'v1',  name: 'Broccoli',                 brand: 'Generico',            category: 'Verdura',     emoji: '🥦', unit: 'g',   kcal: 34,  prot: 2.8,  carb: 7,    fat: 0.4  },
  { id: 'v2',  name: 'Spinaci',                  brand: 'Generico',            category: 'Verdura',     emoji: '🥬', unit: 'g',   kcal: 23,  prot: 2.9,  carb: 3.6,  fat: 0.4  },
  { id: 'v3',  name: 'Zucchine',                 brand: 'Generico',            category: 'Verdura',     emoji: '🥒', unit: 'g',   kcal: 17,  prot: 1.2,  carb: 3.1,  fat: 0.3  },
  // Pomodoro: si conta a pezzi (~150g cad.)
  { id: 'v4',  name: 'Pomodoro',                 brand: 'Generico',            category: 'Verdura',     emoji: '🍅', unit: 'pcs', pieceWeight: 150, kcal: 18,  prot: 0.9,  carb: 3.9,  fat: 0.2  },
  { id: 'v5',  name: 'Passata di Pomodoro',      brand: 'Mutti',               category: 'Verdura',     emoji: '🍅', unit: 'g',   kcal: 36,  prot: 1.6,  carb: 5.1,  fat: 0.2  },

  // ── SNACK ─────────────────────────────────────────────────────────────────
  { id: 's1',  name: 'Mandorle',                 brand: 'Generico',            category: 'Snack',       emoji: '🥜', unit: 'g',   kcal: 579, prot: 21,   carb: 22,   fat: 50   },
  { id: 's2',  name: 'Burro di Arachidi',        brand: 'Biopratico',          category: 'Snack',       emoji: '🥜', unit: 'g',   kcal: 588, prot: 25,   carb: 20,   fat: 50   },
  { id: 's3',  name: 'Noci Sgusciate',           brand: 'Generico',            category: 'Snack',       emoji: '🥜', unit: 'g',   kcal: 654, prot: 15,   carb: 14,   fat: 65   },
  { id: 's4',  name: 'Pistacchi Tostati',        brand: 'Generico',            category: 'Snack',       emoji: '🟢', unit: 'g',   kcal: 562, prot: 20,   carb: 27,   fat: 45   },
  { id: 's5',  name: 'Nocciole Piemonte',        brand: 'Generico',            category: 'Snack',       emoji: '🌰', unit: 'g',   kcal: 628, prot: 15,   carb: 17,   fat: 61   },
  { id: 's6',  name: "Burro d'Arachidi 100%",    brand: 'Prozis / MyProtein',  category: 'Snack',       emoji: '🥜', unit: 'g',   kcal: 588, prot: 28,   carb: 12,   fat: 49   },
  { id: 's7',  name: 'Semi di Zucca',            brand: 'Generico',            category: 'Snack',       emoji: '🎃', unit: 'g',   kcal: 559, prot: 30,   carb: 11,   fat: 49   },
  { id: 's8',  name: 'Nutella',                  brand: 'Ferrero',             category: 'Snack',       emoji: '🍫', unit: 'g',   kcal: 539, prot: 6.3,  carb: 57.5, fat: 30.9 },
  { id: 's9',  name: 'Hummus di Ceci',           brand: 'Noa / Esselunga',     category: 'Snack',       emoji: '🥙', unit: 'g',   kcal: 166, prot: 5,    carb: 8,    fat: 12   },
  // Biscotti: si contano a pezzi
  { id: 's10', name: 'Biscotti Plasmon',         brand: 'Plasmon',             category: 'Snack',       emoji: '🍪', unit: 'pcs', pieceWeight: 8,   kcal: 450, prot: 7,    carb: 75,   fat: 15   },
  { id: 's11', name: 'Taralli Pugliesi',         brand: 'Generico',            category: 'Snack',       emoji: '🥨', unit: 'g',   kcal: 460, prot: 9,    carb: 65,   fat: 18   },
  // Pavesini: si contano a pezzi (~5g cad.)
  { id: 's12', name: 'Pavesini',                 brand: 'Pavesi',              category: 'Snack',       emoji: '🍪', unit: 'pcs', pieceWeight: 5,   kcal: 395, prot: 7.5,  carb: 83,   fat: 3.5  },
  { id: 's13', name: 'Biscotti Gocciole',        brand: 'Pavesi',              category: 'Snack',       emoji: '🍪', unit: 'pcs', pieceWeight: 12,  kcal: 480, prot: 6.5,  carb: 67,   fat: 20   },

  // ── INTEGRATORI ───────────────────────────────────────────────────────────
  { id: 'i1',  name: 'Creatina Monoidrato',      brand: 'Creapure',            category: 'Integratori', emoji: '⚡', unit: 'g',   kcal: 0,   prot: 0,    carb: 0,    fat: 0    },
  // Barrette: si contano a pezzi (~60g cad.)
  { id: 'i2',  name: 'Barretta Proteica',        brand: 'Fulfil',              category: 'Integratori', emoji: '🍫', unit: 'pcs', pieceWeight: 55,  kcal: 210, prot: 20,   carb: 18,   fat: 5    },
  { id: 'i3',  name: 'Barretta Granola',         brand: "Kellogg's",           category: 'Integratori', emoji: '🍫', unit: 'pcs', pieceWeight: 40,  kcal: 190, prot: 4,    carb: 28,   fat: 7    },

  // ── ALTRO ─────────────────────────────────────────────────────────────────
  { id: 'a1',  name: 'Olio EVO',                 brand: 'Monini',              category: 'Altro',       emoji: '🫒', unit: 'g',   kcal: 884, prot: 0,    carb: 0,    fat: 100  },
  { id: 'a2',  name: 'Olio di Oliva',            brand: 'Bertolli',            category: 'Altro',       emoji: '🫒', unit: 'g',   kcal: 884, prot: 0,    carb: 0,    fat: 100  },
  { id: 'a3',  name: 'Miele Millefiori',         brand: 'Rigoni di Asiago',    category: 'Altro',       emoji: '🍯', unit: 'g',   kcal: 304, prot: 0.3,  carb: 82,   fat: 0    },
  { id: 'a4',  name: 'Semi di Chia',             brand: 'Generico',            category: 'Altro',       emoji: '🧉', unit: 'g',   kcal: 486, prot: 17,   carb: 42,   fat: 31   },

  // ── PASTI ─────────────────────────────────────────────────────────────────
  { id: 'd1',  name: 'Spaghetti Carbonara',      brand: 'Generico',            category: 'Pasti',       emoji: '🍝', unit: 'g',   kcal: 400, prot: 15,   carb: 50,   fat: 18   },
  { id: 'd2',  name: "Pasta all'Amatriciana",    brand: 'Generico',            category: 'Pasti',       emoji: '🍝', unit: 'g',   kcal: 380, prot: 12,   carb: 48,   fat: 16   },
  { id: 'd3',  name: 'Lasagna alla Bolognese',   brand: 'Generico',            category: 'Pasti',       emoji: '🍲', unit: 'g',   kcal: 300, prot: 15,   carb: 20,   fat: 18   },
  // Pizza: si conta a fette (~100g cad.)
  { id: 'd4',  name: 'Pizza Margherita',         brand: 'Generico',            category: 'Pasti',       emoji: '🍕', unit: 'pcs', pieceWeight: 100, kcal: 270, prot: 10,   carb: 33,   fat: 10   },
  { id: 'd5',  name: 'Risotto ai Funghi',        brand: 'Generico',            category: 'Pasti',       emoji: '🥘', unit: 'g',   kcal: 150, prot: 3,    carb: 25,   fat: 4    },
  { id: 'd6',  name: 'Parmigiana di Melanzane',  brand: 'Generico',            category: 'Pasti',       emoji: '🍆', unit: 'g',   kcal: 180, prot: 7,    carb: 8,    fat: 14   },

  // ── DOLCI ─────────────────────────────────────────────────────────────────
  { id: 'sw1', name: 'Pastiera Napoletana',      brand: 'Generico',            category: 'Dolci',       emoji: '🥧', unit: 'g',   kcal: 380, prot: 7,    carb: 45,   fat: 18   },
  // Cannolo: si conta a pezzi (~80g cad.)
  { id: 'sw2', name: 'Cannolo Siciliano',        brand: 'Generico',            category: 'Dolci',       emoji: '🥐', unit: 'pcs', pieceWeight: 80,  kcal: 350, prot: 6,    carb: 40,   fat: 18   },
  { id: 'sw3', name: 'Tiramisù',                 brand: 'Generico',            category: 'Dolci',       emoji: '🍰', unit: 'g',   kcal: 300, prot: 5,    carb: 35,   fat: 15   },

];

export default PRODUCTS_DEFAULT;

