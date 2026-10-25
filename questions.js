const QUESTION_BANK = [

  // ============================================
  // CHM 101 — ATOMIC STRUCTURE (QUESTIONS 1–14)
  // ============================================

  {
    subject: "CHM 101",
    question: 'Who proposed the atomic nature of matter around 400 B.C. and coined the term "atomos"?',
    options: ["John Dalton", "Democritus", "J.J. Thomson", "Ernest Rutherford"],
    answer: 1,
    explanation: 'Democritus proposed that matter consists of indivisible particles called "atomos".'
  },
  {
    subject: "CHM 101",
    question: "Which postulate of Dalton's Atomic Theory is contradicted by the existence of isotopes?",
    options: [
      "All matter consists of tiny indivisible particles called atoms.",
      "Atoms can neither be created nor destroyed.",
      "Atoms of the same element are identical and have the same mass and chemical properties.",
      "Atoms combine in small whole-number ratios to form compounds."
    ],
    answer: 2,
    explanation: "Isotopes of an element have the same number of protons but different numbers of neutrons and therefore different masses."
  },
  {
    subject: "CHM 101",
    question: "William Crookes discovered cathode rays by passing a high-voltage electrical discharge through gases under what condition?",
    options: [
      "High pressure",
      "Low pressure",
      "Standard atmospheric pressure",
      "Extreme vacuum with no gas present"
    ],
    answer: 1,
    explanation: "Cathode rays were studied in discharge tubes containing gas at low pressure."
  },
  {
    subject: "CHM 101",
    question: "What is the specific charge (e/m) of an electron determined by J.J. Thomson?",
    options: [
      "1.602 × 10⁻¹⁹ C/kg",
      "9.11 × 10⁻³¹ C/kg",
      "1.7586 × 10¹¹ C/kg",
      "1.672 × 10⁻²⁷ C/kg"
    ],
    answer: 2,
    explanation: "The magnitude of the electron's charge-to-mass ratio is approximately 1.7586 × 10¹¹ C/kg."
  },
  {
    subject: "CHM 101",
    question: "R.A. Millikan measured the charge of an electron using which experimental setup?",
    options: [
      "Gold foil experiment",
      "Gas discharge tube with perforated cathode",
      "Oil droplet experiment",
      "Mass spectrometer"
    ],
    answer: 2,
    explanation: "Millikan's oil-drop experiment enabled the determination of the elementary electric charge."
  },
  {
    subject: "CHM 101",
    question: "Which characteristic distinguishes canal rays from cathode rays?",
    options: [
      "They are negatively charged.",
      "They have much lower charge-to-mass ratios.",
      "Their charge-to-mass ratio remains constant regardless of the gas used.",
      "They are lighter than electrons."
    ],
    answer: 1,
    explanation: "Canal rays are positively charged particles with much smaller charge-to-mass ratios than electrons. Their properties depend on the gas used."
  },
  {
    subject: "CHM 101",
    question: "What was the primary conclusion of Rutherford's gold foil scattering experiment?",
    options: [
      "Electrons are embedded uniformly in a positive sea.",
      "The atom has a small, dense, positively charged nucleus and is mostly empty space.",
      "Neutrons are located outside the nucleus.",
      "Atoms are completely solid and impenetrable."
    ],
    answer: 1,
    explanation: "The scattering of alpha particles revealed a small, dense, positively charged nucleus surrounded by mostly empty space."
  },
  {
    subject: "CHM 101",
    question: "Henry Moseley used X-rays to determine which fundamental property of elements?",
    options: [
      "Mass number",
      "Atomic number",
      "Number of neutrons",
      "Isotopic abundance"
    ],
    answer: 1,
    explanation: "Moseley established the relationship between an element's characteristic X-ray frequencies and its atomic number."
  },
  {
    subject: "CHM 101",
    question: "What is the function of the magnetic field in a mass spectrometer?",
    options: [
      "To vaporize the solid sample",
      "To ionize neutral atoms by stripping electrons",
      "To deflect ions according to their mass-to-charge ratios",
      "To convert ion beams directly into percentages"
    ],
    answer: 2,
    explanation: "A magnetic field deflects moving ions. Their paths depend on their mass-to-charge ratios, their velocities, and the field strength."
  },
  {
    subject: "CHM 101",
    question: "What is the difference between the sum of the masses of individual nucleons and the actual mass of a nucleus called?",
    options: [
      "Ionization energy",
      "Mass defect",
      "Nuclear binding energy",
      "Atomic weight"
    ],
    answer: 1,
    explanation: "Mass defect is the difference between the total mass of separate nucleons and the mass of the bound nucleus."
  },
  {
    subject: "CHM 101",
    question: "According to Bohr's theory, when does an atom emit electromagnetic radiation?",
    options: [
      "When an electron absorbs a quantum of energy",
      "When an electron moves from a lower to a higher energy level",
      "When an electron moves from a higher to a lower energy level",
      "When an electron remains in its ground state"
    ],
    answer: 2,
    explanation: "An electron emits a photon when it transitions from a higher energy level to a lower energy level."
  },
  {
    subject: "CHM 101",
    question: "Which quantum number describes the shape of an atomic orbital?",
    options: [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "Magnetic quantum number (mₗ)",
      "Spin quantum number (mₛ)"
    ],
    answer: 1,
    explanation: "The azimuthal quantum number determines the subshell and orbital shape, such as s, p, d, or f."
  },
  {
    subject: "CHM 101",
    question: "What is the maximum number of electrons in a principal shell where n = 3?",
    options: ["8", "18", "32", "6"],
    answer: 1,
    explanation: "The maximum number of electrons in a principal shell is 2n². For n = 3, 2 × 3² = 18."
  },
  {
    subject: "CHM 101",
    question: "What does the Pauli Exclusion Principle state?",
    options: [
      "Electrons fill orbitals in order of increasing energy.",
      "No two electrons in the same atom can have the same set of all four quantum numbers.",
      "Orbitals are filled singly before pairing.",
      "The energy of an electron in an atom is continuous."
    ],
    answer: 1,
    explanation: "No two electrons in an atom can possess identical values for all four quantum numbers."
  },

  // ============================================
  // PHY 101 — DIMENSIONS AND SI UNITS (15–20)
  // ============================================

  {
    subject: "PHY 101",
    question: "Which list contains the seven fundamental SI quantities?",
    options: [
      "Force, velocity, acceleration, mass",
      "Mass, time, length, temperature, electric current, amount of substance, luminous intensity",
      "Energy, power, work, momentum",
      "Density, pressure, frequency, volume"
    ],
    answer: 1,
    explanation: "The seven base quantities are length, mass, time, electric current, thermodynamic temperature, amount of substance, and luminous intensity."
  },
  {
    subject: "PHY 101",
    question: "What is the dimensional formula for force?",
    options: [
      "LT⁻¹",
      "MLT⁻²",
      "ML⁻¹T⁻²",
      "ML²T⁻²"
    ],
    answer: 1,
    explanation: "Force = mass × acceleration. Since acceleration has dimensions LT⁻², force has dimensions MLT⁻²."
  },
  {
    subject: "PHY 101",
    question: "Dimensional analysis checks the validity of physical equations using which principle?",
    options: [
      "Homogeneity of dimensions",
      "Conservation of energy",
      "Vector addition",
      "Proportional scaling"
    ],
    answer: 0,
    explanation: "For a dimensionally consistent equation, all additive terms must have the same dimensions."
  },
  {
    subject: "PHY 101",
    question: "What is the dimension of the derivative of velocity with respect to time, dv/dt?",
    options: [
      "LT⁻¹",
      "LT⁻²",
      "MLT⁻²",
      "L²T⁻²"
    ],
    answer: 1,
    explanation: "Acceleration is the rate of change of velocity with time. Its dimensions are (LT⁻¹)/T = LT⁻²."
  },
  {
    subject: "PHY 101",
    question: "Which SI prefix represents a factor of 10⁻⁹?",
    options: [
      "Micro (μ)",
      "Nano (n)",
      "Pico (p)",
      "Femto (f)"
    ],
    answer: 1,
    explanation: "Nano represents 10⁻⁹, micro represents 10⁻⁶, pico represents 10⁻¹², and femto represents 10⁻¹⁵."
  },
  {
    subject: "PHY 101",
    question: "A physical quantity whose dimensional exponents are all zero is called:",
    options: [
      "A derived quantity",
      "A fundamental quantity",
      "A dimensionless quantity",
      "A vector quantity"
    ],
    answer: 2,
    explanation: "A dimensionless quantity has no net dimensions of the fundamental quantities."
  },

  // ============================================
  // MATH 101 — POLYNOMIALS (QUESTIONS 1–20)
  // ============================================

  {
    subject: "MATH 101",
    question: "Add the polynomials: (3x² + 5x − 2) + (2x² − x + 4).",
    options: [
      "5x² + 4x + 2",
      "5x² + 6x + 2",
      "x² + 4x + 6",
      "5x² + 4x − 6"
    ],
    answer: 0,
    explanation: "Combine like terms: (3x² + 2x²) + (5x − x) + (−2 + 4) = 5x² + 4x + 2."
  },
  {
    subject: "MATH 101",
    question: "Subtract (x² − 4x + 6) from (4x² + 2x − 3).",
    options: [
      "3x² − 2x + 3",
      "3x² + 6x − 9",
      "5x² − 2x + 3",
      "3x² − 6x + 9"
    ],
    answer: 1,
    explanation: "Subtracting gives 4x² + 2x − 3 − x² + 4x − 6 = 3x² + 6x − 9."
  },
  {
    subject: "MATH 101",
    question: "Find the product of (x + 3) and (x − 5).",
    options: [
      "x² − 2x − 15",
      "x² + 2x − 15",
      "x² − 8x − 15",
      "x² + 8x + 15"
    ],
    answer: 0,
    explanation: "Expand: x² − 5x + 3x − 15 = x² − 2x − 15."
  },
  {
    subject: "MATH 101",
    question: "Multiply (2x − 1) by (3x² + x − 4).",
    options: [
      "6x³ − x² + 5x + 4",
      "6x³ + 5x² − x − 4",
      "6x³ − x² − 9x + 4",
      "6x³ + x² − 9x − 4"
    ],
    answer: 2,
    explanation: "Expand and combine like terms: 6x³ + 2x² − 8x − 3x² − x + 4 = 6x³ − x² − 9x + 4."
  },
  {
    subject: "MATH 101",
    question: "Divide x² + 5x + 6 by (x + 2).",
    options: [
      "x − 3",
      "x + 3",
      "x + 2",
      "x − 2"
    ],
    answer: 1,
    explanation: "Factorise x² + 5x + 6 = (x + 2)(x + 3). The quotient is x + 3."
  },
  {
    subject: "MATH 101",
    question: "Divide 2x³ + 3x² − 8x + 3 by (x − 1).",
    options: [
      "2x² + 5x − 3",
      "2x² − 5x + 3",
      "2x² + x − 4",
      "2x² + 5x + 3"
    ],
    answer: 0,
    explanation: "Polynomial long division gives quotient 2x² + 5x − 3 with remainder zero."
  },
  {
    subject: "MATH 101",
    question: "Find the remainder when P(x) = x³ − 2x² + x − 5 is divided by (x − 2).",
    options: ["3", "−3", "5", "−5"],
    answer: 1,
    explanation: "By the Remainder Theorem, the remainder is P(2) = 8 − 8 + 2 − 5 = −3."
  },
  {
    subject: "MATH 101",
    question: "Determine whether (x + 1) is a factor of P(x) = x³ + 2x² − x − 2.",
    options: [
      "No, the remainder is −2.",
      "No, the remainder is 1.",
      "Yes, the remainder is 0.",
      "Yes, the remainder is 2."
    ],
    answer: 2,
    explanation: "P(−1) = −1 + 2 + 1 − 2 = 0. Therefore, (x + 1) is a factor."
  },
  {
    subject: "MATH 101",
    question: "Find the sum of (4x³ − 2x² + x) and (−2x³ + 5x² − 3x + 7).",
    options: [
      "2x³ + 3x² − 2x + 7",
      "6x³ + 3x² − 4x + 7",
      "2x³ − 7x² + 2x − 7",
      "2x³ + 7x² − 2x + 7"
    ],
    answer: 0,
    explanation: "Combine like terms to obtain 2x³ + 3x² − 2x + 7."
  },
  {
    subject: "MATH 101",
    question: "Subtract (5x² − 3x + 1) from (2x² + x − 4).",
    options: [
      "3x² − 4x + 5",
      "−3x² + 4x − 5",
      "−3x² − 2x − 3",
      "3x² + 2x + 3"
    ],
    answer: 1,
    explanation: "The difference is 2x² + x − 4 − 5x² + 3x − 1 = −3x² + 4x − 5."
  },
  {
    subject: "MATH 101",
    question: "Expand and simplify (2x + 3)².",
    options: [
      "4x² + 9",
      "4x² + 6x + 9",
      "4x² + 12x + 9",
      "2x² + 12x + 9"
    ],
    answer: 2,
    explanation: "Using (a + b)² = a² + 2ab + b² gives 4x² + 12x + 9."
  },
  {
    subject: "MATH 101",
    question: "Find the product of (x − 4)(x² + 4x + 16).",
    options: [
      "x³ − 64",
      "x³ + 64",
      "x³ − 16x − 64",
      "x³ − 8x + 64"
    ],
    answer: 0,
    explanation: "Using the difference of cubes identity, (a − b)(a² + ab + b²) = a³ − b³, gives x³ − 64."
  },
  {
    subject: "MATH 101",
    question: "Divide x³ − 8 by (x − 2).",
    options: [
      "x² − 2x + 4",
      "x² + 2x + 4",
      "x² − 4x + 4",
      "x² + 4x + 4"
    ],
    answer: 1,
    explanation: "Since x³ − 8 = (x − 2)(x² + 2x + 4), the quotient is x² + 2x + 4."
  },
  {
    subject: "MATH 101",
    question: "Find the remainder when P(x) = 2x⁴ − 3x² + x − 1 is divided by (x + 1).",
    options: ["1", "0", "−3", "−1"],
    answer: 2,
    explanation: "The remainder is P(−1) = 2 − 3 − 1 − 1 = −3."
  },
  {
    subject: "MATH 101",
    question: "If (x − 3) is a factor of x³ − 4x² + kx − 6, find k.",
    options: ["3", "−5", "5", "−3"],
    answer: 2,
    explanation: "By the Factor Theorem, P(3) = 27 − 36 + 3k − 6 = 0. Therefore, 3k = 15 and k = 5."
  },
  {
    subject: "MATH 101",
    question: "Simplify (7x³ − 4x + 2) − (3x³ + 2x² − x − 5).",
    options: [
      "4x³ − 2x² − 5x − 3",
      "4x³ + 2x² − 3x + 7",
      "4x³ − 2x² − 3x + 7",
      "10x³ − 2x² − 5x + 7"
    ],
    answer: 2,
    explanation: "Distribute the minus sign and combine like terms to obtain 4x³ − 2x² − 3x + 7."
  },
  {
    subject: "MATH 101",
    question: "Multiply the monomials (−3x²y)(4xy³).",
    options: [
      "−12x³y⁴",
      "12x³y⁴",
      "−12x²y³",
      "7x³y⁴"
    ],
    answer: 0,
    explanation: "Multiply the coefficients and add exponents of like bases: −3 × 4 = −12, x² × x = x³, and y × y³ = y⁴."
  },
  {
    subject: "MATH 101",
    question: "Divide (6x⁴ − 9x³ + 12x²) by 3x².",
    options: [
      "2x² − 3x + 4",
      "3x² − 3x + 4",
      "2x² + 3x − 4",
      "2x² − 6x + 9"
    ],
    answer: 0,
    explanation: "Divide each term by 3x²: 6x⁴/(3x²) − 9x³/(3x²) + 12x²/(3x²) = 2x² − 3x + 4."
  },
  {
    subject: "MATH 101",
    question: "Using the Factor Theorem, determine whether (x − 2) is a factor of P(x) = x³ − 3x² + 4.",
    options: [
      "No, because P(2) = 4.",
      "Yes, because P(2) = 0.",
      "No, because P(2) = −4.",
      "Yes, because P(2) = 2."
    ],
    answer: 1,
    explanation: "P(2) = 8 − 12 + 4 = 0. Therefore, (x − 2) is a factor."
  },
  {
    subject: "MATH 101",
    question: "Find the quotient when x² + 7x + 10 is divided by (x + 5).",
    options: [
      "x + 5",
      "x − 2",
      "x + 2",
      "x − 5"
    ],
    answer: 2,
    explanation: "Factorise x² + 7x + 10 = (x + 5)(x + 2). The quotient is x + 2."
  },

  // ============================================
  // BIO 101 — CELL BIOLOGY (QUESTIONS 1–20)
  // ============================================

  {
    subject: "BIO 101",
    question: 'Which cell organelle is widely known as the "powerhouse of the cell"?',
    options: ["Ribosome", "Nucleus", "Mitochondrion", "Chloroplast"],
    answer: 2,
    explanation: "Mitochondria produce much of the ATP used to power cellular activities."
  },
  {
    subject: "BIO 101",
    question: "Which organelle is primarily responsible for protein synthesis?",
    options: ["Lysosome", "Ribosome", "Golgi apparatus", "Vacuole"],
    answer: 1,
    explanation: "Ribosomes translate messenger RNA into polypeptide chains."
  },
  {
    subject: "BIO 101",
    question: "What is a major difference between plant and animal cells regarding their outer boundaries?",
    options: [
      "Animal cells have a rigid cell wall, while plant cells do not.",
      "Plant cells have a cell wall outside the cell membrane, while animal cells lack a cell wall.",
      "Animal cells have a capsule, while plant cells have a cell wall.",
      "There is no difference in their outer boundaries."
    ],
    answer: 1,
    explanation: "Plant cells possess a cell wall outside the plasma membrane. Animal cells have a plasma membrane but no cell wall."
  },
  {
    subject: "BIO 101",
    question: "What is the primary function of the plasma membrane?",
    options: [
      "To synthesize proteins",
      "To generate ATP energy",
      "To regulate the movement of substances into and out of the cell",
      "To digest cellular waste"
    ],
    answer: 2,
    explanation: "The selectively permeable plasma membrane regulates the movement of substances between the cell and its environment."
  },
  {
    subject: "BIO 101",
    question: "Which organelle contains most of a eukaryotic cell's genetic material and coordinates cellular activities?",
    options: ["Nucleus", "Nucleolus", "Centriole", "Endoplasmic reticulum"],
    answer: 0,
    explanation: "The nucleus contains most of the cell's DNA and regulates gene expression and many cellular activities."
  },
  {
    subject: "BIO 101",
    question: "What is the jelly-like material enclosed by the cell membrane in which many metabolic reactions occur?",
    options: ["Nucleoplasm", "Cytoplasm", "Stroma", "Matrix"],
    answer: 1,
    explanation: "The cytoplasm includes the cytosol and cellular structures outside the nucleus."
  },
  {
    subject: "BIO 101",
    question: "Which plant cell organelle contains chlorophyll and is the main site of photosynthesis?",
    options: ["Mitochondrion", "Leucoplast", "Chloroplast", "Chromoplast"],
    answer: 2,
    explanation: "Chloroplasts contain chlorophyll and convert light energy into chemical energy during photosynthesis."
  },
  {
    subject: "BIO 101",
    question: "What is a primary function of the large central vacuole in a mature plant cell?",
    options: [
      "Generating cellular energy",
      "Storing water, nutrients, and waste while maintaining turgor pressure",
      "Synthesizing lipids",
      "Packaging proteins"
    ],
    answer: 1,
    explanation: "The central vacuole stores substances and helps maintain turgor pressure, which supports the plant cell."
  },
  {
    subject: "BIO 101",
    question: "Which organelle modifies, sorts, and packages proteins for secretion?",
    options: [
      "Rough endoplasmic reticulum",
      "Golgi apparatus",
      "Ribosome",
      "Smooth endoplasmic reticulum"
    ],
    answer: 1,
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins into vesicles for delivery to their destinations."
  },
  {
    subject: "BIO 101",
    question: "Which membrane network is studded with ribosomes and assists in protein synthesis and processing?",
    options: [
      "Smooth endoplasmic reticulum",
      "Rough endoplasmic reticulum",
      "Golgi apparatus",
      "Lysosome"
    ],
    answer: 1,
    explanation: "Ribosomes attached to the rough endoplasmic reticulum synthesise proteins destined for secretion, membranes, or certain organelles."
  },
  {
    subject: "BIO 101",
    question: "What is the primary distinguishing feature of prokaryotic cells compared with eukaryotic cells?",
    options: [
      "Prokaryotic cells are always larger.",
      "Prokaryotic cells lack a membrane-bound nucleus.",
      "Eukaryotic cells lack DNA.",
      "Prokaryotes contain membrane-bound organelles."
    ],
    answer: 1,
    explanation: "Prokaryotes lack a membrane-bound nucleus. Their genetic material is located in a region called the nucleoid."
  },
  {
    subject: "BIO 101",
    question: "Which structure provides rigid support and protection in plants, fungi, and bacteria?",
    options: [
      "Cell membrane",
      "Cytoskeleton",
      "Cell wall",
      "Nuclear envelope"
    ],
    answer: 2,
    explanation: "Cell walls provide structural support and protection. Their composition differs among plants, fungi, and bacteria."
  },
  {
    subject: "BIO 101",
    question: "Which cellular structure contains digestive enzymes that break down waste and cellular debris?",
    options: ["Lysosome", "Peroxisome", "Ribosome", "Centrosome"],
    answer: 0,
    explanation: "Lysosomes contain hydrolytic enzymes that digest cellular waste and worn-out components."
  },
  {
    subject: "BIO 101",
    question: "What are the thread-like structures made of DNA and proteins that become visible during cell division called?",
    options: ["Nucleotides", "Chromosomes", "Ribosomes", "Plasmids"],
    answer: 1,
    explanation: "Chromosomes consist of DNA associated with proteins. They become more condensed and visible during cell division."
  },
  {
    subject: "BIO 101",
    question: "What is the net movement of water across a selectively permeable membrane from higher water potential to lower water potential called?",
    options: ["Diffusion", "Active transport", "Osmosis", "Phagocytosis"],
    answer: 2,
    explanation: "Osmosis is the net movement of water across a selectively permeable membrane down its water-potential gradient."
  },
  {
    subject: "BIO 101",
    question: "Which transport mechanism uses metabolic energy to move substances against their concentration or electrochemical gradient?",
    options: [
      "Simple diffusion",
      "Osmosis",
      "Facilitated diffusion",
      "Active transport"
    ],
    answer: 3,
    explanation: "Active transport uses energy directly or indirectly to move substances against their gradients."
  },
  {
    subject: "BIO 101",
    question: "What are the short, hair-like projections used by some cells for movement or to move fluids across their surfaces?",
    options: ["Flagella", "Cilia", "Pseudopodia", "Microfilaments"],
    answer: 1,
    explanation: "Cilia are short cellular projections that can move cells or propel fluid and particles across a cell surface."
  },
  {
    subject: "BIO 101",
    question: "Which whip-like cellular structure is used by sperm cells for locomotion?",
    options: ["Cilia", "Pili", "Flagellum", "Microtubule"],
    answer: 2,
    explanation: "The flagellum of a sperm cell generates movement that enables the cell to swim."
  },
  {
    subject: "BIO 101",
    question: "What is a principal function of the smooth endoplasmic reticulum?",
    options: [
      "Synthesising proteins on attached ribosomes",
      "Synthesising lipids and participating in detoxification",
      "Storing most of the cell's genetic material",
      "Performing all cellular respiration"
    ],
    answer: 1,
    explanation: "The smooth endoplasmic reticulum participates in lipid synthesis and detoxification. In some cells, it also stores calcium ions."
  },
  {
    subject: "BIO 101",
    question: "Which dense, non-membrane-bound structure inside the nucleus produces ribosomal RNA and assembles ribosomal subunits?",
    options: ["Nucleolus", "Centromere", "Chromatin", "Nuclear pore"],
    answer: 0,
    explanation: "The nucleolus is the main site of ribosomal RNA production and ribosomal subunit assembly."
  }

];