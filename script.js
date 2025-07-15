const ramos = {
  "Cálculo Diferencial": ["Cálculo Integral", "Física"],
  "Botánica general Y taxonómica": [],
  "Química general": ["Química inorgánica", "Química orgánica I", "Fisicoquímica"],
  "Biología general": ["Biología molecular"],
  "Historia de la farmacia": ["Legislación Farmacéutica"],
  "Comunicación": ["Metodología de la investigación"],

  "Cálculo Integral": ["Fisicoquímica", "Bioestadística"],
  "Física": [],
  "Química inorgánica": ["Química analítica"],
  "Química orgánica I": ["Química orgánica II", "Bioquímica"],
  "Biología molecular": ["Microbiología y parasitología"],
  "Desarrollo humano": ["Ética farmacéutica y bioética"],

  "Fisicoquímica": ["Operaciones unitarias"],
  "Química analítica": ["Análisis instrumental"],
  "Química orgánica II": ["Química farmacéutica"],
  "Bioquímica": ["Inmunología", "Morfofisiología"],
  "Microbiología y parasitología": [],
  "Ética farmacéutica y bioética": [],

  "Operaciones unitarias": ["Tecnología farmacéutica de medicamentos solidos"],
  "Análisis instrumental": ["Farmacognosia y fitoquímica", "Nutrición y bromatología", "Análisis y control de medicamentos y otros productos"],
  "Química farmacéutica": ["Biofarmacia y farmacocinética"],
  "Inmunología": ["Biotecnología"],
  "Morfofisiología": ["Farmacología I", "Fisiopatología"],
  "Educación en salud": [],
  "Electiva de contexto I": ["Electiva de contexto II"],

  "Tecnología farmacéutica de medicamentos solidos": ["Tecnología farmacéutica de medicamentos líquidos"],
  "Farmacognosia y fitoquímica": [],
  "Biofarmacia y farmacocinética": [],
  "Farmacología I": ["Farmacología II", "Toxicología"],
  "Fisiopatología": [],
  "Metodología de la investigación": ["Diseño y proyecto de investigación"],
  "Electiva de contexto II": ["Electiva de profundización III"],

  "Tecnología farmacéutica de medicamentos líquidos": ["Tecnología farmacéutica de semisólidos y magistrales"],
  "Bioestadística": ["Análisis y control de medicamentos y otros productos"],
  "Biotecnología": [],
  "Farmacología II": ["Farmacia clínica", "Farmacoterapéutica"],
  "Toxicología": ["Salud ocupacional"],
  "Diseño y proyecto de investigación": ["Trabajo de grado"],
  "Electiva de profundización III": ["Electiva de profundización IV"],

  "Tecnología farmacéutica de semisólidos y magistrales": ["Tecnología de cosméticos"],
  "Nutrición y bromatología": ["Tecnología de alimentos"],
  "Farmacia clínica": ["Farmacia hospitalaria y comunitaria"],
  "Farmacoterapéutica": [],
  "Salud ocupacional": ["Salud pública"],
  "Legislación Farmacéutica": ["Sistema de gestión de calidad", "Administración y gestión farmacéutica industrial", "Administración y gestión de servicios farmacéuticos"],
  "Electiva de profundización IV": ["Electiva de profundización V"],

  "Tecnología de cosméticos": ["Diseño y formulación de medicamentos y productos sanitarios", "Tecnología de productos naturales y medicamentos homeopáticos"],
  "Tecnología de alimentos": [],
  "Análisis y control de medicamentos y otros productos": ["Sistema de gestión de calidad"],
  "Farmacia hospitalaria y comunitaria": ["Administración y gestión de servicios farmacéuticos"],
  "Salud pública": [],
  "Electiva de profundización V": ["Electiva de profundización VI"],

  "Diseño y formulación de medicamentos y productos sanitarios": [],
  "Tecnología de productos naturales y medicamentos homeopáticos": [],
  "Sistema de gestión de calidad": [],
  "Administración y gestión farmacéutica industrial": [],
  "Administración y gestión de servicios farmacéuticos": [],
  "Electiva de profundización VI": ["Electiva de profundización VII", "Electiva de profundización VIII", "Electiva de profundización IX"],

  "Prácticas académicas": [],
  "Trabajo de grado": [],
  "Electiva de profundización VII": [],
  "Electiva de profundización VIII": [],
  "Electiva de profundización IX": []
};

const estructura = {
  "Primer semestre": ["Cálculo Diferencial", "Botánica general Y taxonómica", "Química general", "Biología general", "Historia de la farmacia", "Comunicación"],
  "Segundo semestre": ["Cálculo Integral", "Física", "Química inorgánica", "Química orgánica I", "Biología molecular", "Desarrollo humano"],
  "Tercer semestre": ["Fisicoquímica", "Química analítica", "Química orgánica II", "Bioquímica", "Microbiología y parasitología", "Ética farmacéutica y bioética"],
  "Cuarto semestre": ["Operaciones unitarias", "Análisis instrumental", "Química farmacéutica", "Inmunología", "Morfofisiología", "Educación en salud", "Electiva de contexto I"],
  "Quinto semestre": ["Tecnología farmacéutica de medicamentos solidos", "Farmacognosia y fitoquímica", "Biofarmacia y farmacocinética", "Farmacología I", "Fisiopatología", "Metodología de la investigación", "Electiva de contexto II"],
  "Sexto semestre": ["Tecnología farmacéutica de medicamentos líquidos", "Bioestadística", "Biotecnología", "Farmacología II", "Toxicología", "Diseño y proyecto de investigación", "Electiva de profundización III"],
  "Séptimo semestre": ["Tecnología farmacéutica de semisólidos y magistrales", "Nutrición y bromatología", "Farmacia clínica", "Farmacoterapéutica", "Salud ocupacional", "Legislación Farmacéutica", "Electiva de profundización IV"],
  "Octavo semestre": ["Tecnología de cosméticos", "Tecnología de alimentos", "Análisis y control de medicamentos y otros productos", "Farmacia hospitalaria y comunitaria", "Salud pública", "Electiva de profundización V"],
  "Noveno semestre": ["Diseño y formulación de medicamentos y productos sanitarios", "Tecnología de productos naturales y medicamentos homeopáticos", "Sistema de gestión de calidad", "Administración y gestión farmacéutica industrial", "Administración y gestión de servicios farmacéuticos", "Electiva de profundización VI"],
  "Décimo semestre": ["Prácticas académicas", "Trabajo de grado", "Electiva de profundización VII", "Electiva de profundización VIII", "Electiva de profundización IX"]
};

const mallaContainer = document.getElementById("malla");
const estadoRamos = {};

function crearMalla() {
  for (const semestre in estructura) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    contenedor.appendChild(titulo);

    estructura[semestre].forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.textContent = ramo;
      div.onclick = () => aprobarRamo(ramo, div);
      div.id = ramo;

      estadoRamos[ramo] = false;

      if (ramos[ramo].length === 0) {
        div.classList.remove("bloqueado");
      }

      contenedor.appendChild(div);
    });

    mallaContainer.appendChild(contenedor);
  }
}

function aprobarRamo(ramo, div) {
  if (div.classList.contains("bloqueado")) return;
  if (estadoRamos[ramo]) return;

  estadoRamos[ramo] = true;
  div.classList.add("aprobado");

  for (const dependiente in ramos) {
    if (ramos[dependiente].includes(ramo)) {
      const requisitos = ramos[dependiente];
      if (requisitos.every((r) => estadoRamos[r])) {
        document.getElementById(dependiente)?.classList.remove("bloqueado");
      }
    }
  }
}

crearMalla();
