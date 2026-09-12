/**
 * AI SYSTEMS ENGINEERING // INTERACTIVE CANVAS & SYSTEM CONTROLS
 * Subtle neural network graph, architecture nodes & engineering terminal
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Subtle Neural / System Architecture Background Canvas
  // --------------------------------------------------------------------------
  const canvas = document.createElement('canvas');
  canvas.id = 'network-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    active: false,
    radius: 120,
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Responsive node count: fewer on mobile to avoid noise & preserve battery
  const isMobile = window.innerWidth < 768;
  const NODE_COUNT = isMobile ? 22 : 45;
  const CONNECT_DIST = isMobile ? 90 : 135;

  let nodes = [];
  let packets = [];

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.8 + 1.2;
      this.baseAlpha = Math.random() * 0.35 + 0.2;
      this.isHub = Math.random() > 0.85; // Special hub node
      if (this.isHub) {
        this.radius = 2.8;
        this.baseAlpha = 0.55;
      }
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse soft influence
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.02;
          this.x -= dx * force;
          this.y -= dy * force;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isHub ? 'rgba(143, 115, 88, ' + this.baseAlpha + ')' : 'rgba(238, 231, 218, ' + this.baseAlpha + ')';
      ctx.fill();

      // Hub node subtle ring
      if (this.isHub) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(143, 115, 88, 0.18)';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }
    }
  }

  // Data packet traveling across nodes
  class DataPacket {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0;
      this.speed = Math.random() * 0.008 + 0.004;
      this.dead = false;
    }

    update() {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.dead = true;
      }
    }

    draw() {
      const curX = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const curY = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;
      ctx.beginPath();
      ctx.arc(curX, curY, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(238, 231, 218, 0.7)';
      ctx.fill();
    }
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(new Node());
    }
  }

  initNodes();

  let packetTimer = 0;

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw();

      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          // Subtle bronze tint if either is a hub
          if (nodes[i].isHub || nodes[j].isHub) {
            ctx.strokeStyle = `rgba(143, 115, 88, ${alpha * 1.5})`;
          } else {
            ctx.strokeStyle = `rgba(238, 231, 218, ${alpha})`;
          }
          ctx.lineWidth = 0.65;
          ctx.stroke();

          // Occasionally spawn data packet between connected nodes
          packetTimer++;
          if (packetTimer > 280 && packets.length < 6) {
            packets.push(new DataPacket(nodes[i], nodes[j]));
            packetTimer = 0;
          }
        }
      }
    }

    // Update & draw data packets
    for (let p = packets.length - 1; p >= 0; p--) {
      packets[p].update();
      packets[p].draw();
      if (packets[p].dead) {
        packets.splice(p, 1);
      }
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);

  // --------------------------------------------------------------------------
  // 2. Interactive Terminal Commands Emulator
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    const termInput = document.getElementById('term-cmd-input');
    const termOutput = document.getElementById('term-logs');
    const termBtns = document.querySelectorAll('.term-btn');

    const commands = {
      help: `AVAILABLE COMMANDS:
  status        Check AI Systems runtime status & health metrics
  cat rayan.arch Print architectural specification for RAYAN Agent
  cat wie.spec   Print dataflow for Web Intelligence Engine (WIE)
  stack         Inspect active technical dependencies & models
  contact       Display encrypted communication channels
  clear         Flush terminal screen output`,

      status: `[SYS_HEALTH]
● Runtime: Operational (Python 3.12 / LangGraph 0.2 / FastAPI)
● Host: 0.0.0.0:3000 // Container: Linux Debian
● Active Pipelines: 4 autonomous agent clusters initialized
● Retrieval Index: BM25 + Cross-Encoder Reranker active
● Latency: ~14ms avg inference overhead`,

      'cat rayan.arch': `[SYSTEM SPECIFICATION: RAYAN]
Type: Enterprise Autonomous AI Agent
Architecture Flow:
  USER
   │
   ▼
  IDENTITY & RBAC
   │
   ▼
  AGENT ORCHESTRATOR
   ├── [1] WORKING MEMORY (StateGraph / Context Windows)
   ├── [2] DENSE RETRIEVAL / RAG (Enterprise Vector Embeddings)
   ├── [3] TOOL DISPATCHER (Deterministic JSON Function Execution)
   └── [4] DATA STORE AUDITOR (PostgreSQL / SQLite)
   │
   ▼
  AUDITED ACTION & STRUCTURED OUTPUT`,

      'cat wie.spec': `[SYSTEM SPECIFICATION: WIE]
Type: Web Intelligence Engine (Autonomous Multi-Agent Deep Research)
Architecture Flow:
  RESEARCH HYPOTHESIS / QUERY
   │
   ▼
  MULTI-STEP PLANNER
   ├── SUB-QUERY FANOUT (Iterative decomposition)
   │
   ▼
  NEURAL SEARCH & HEADLESS CRAWLER
   │
   ▼
  SEMANTIC EXTRACTION & DEDUPLICATION
   │
   ▼
  CROSS-ENCODER RERANKING & EVALUATION
   │
   ▼
  SYNTHESIS & GROUNDED RESEARCH REPORT`,

      stack: `[TECHNOLOGY MATRIX]
1. LLM ENGINEERING: Python, DeepSeek, LLaMA-3, Claude, LangGraph, Ollama, vLLM
2. AI SYSTEMS: Multi-Agent Workflows, RAG, Semantic Memory, Tool Calling
3. SEARCH: Neural Retrieval, BM25, Cross-Encoders, Web Scraping, Grounding
4. BACKEND: FastAPI, Django, PostgreSQL, SQLite, Docker, Linux (Debian/Kali)`,

      contact: `[COMMUNICATION CHANNELS]
● Primary Email: aabbassin@gmail.com
● Direct Phone: +98 937 417 673 1
● LinkedIn: linkedin.com/in/artin-abbasi-69714a384
● GitHub: github.com/dXRtinXb`,
    };

    function appendTermLog(cmd, res) {
      if (!termOutput) return;
      const cmdLine = document.createElement('div');
      cmdLine.style.color = 'var(--text-muted)';
      cmdLine.style.marginTop = '8px';
      cmdLine.innerHTML = `<span style="color:var(--accent-bronze-light);font-weight:600;">artin@ai-systems:~$</span> ${escapeHtml(cmd)}`;

      const resLine = document.createElement('div');
      resLine.style.whiteSpace = 'pre-wrap';
      resLine.style.color = 'var(--text-cream)';
      resLine.style.marginTop = '4px';
      resLine.textContent = res;

      termOutput.appendChild(cmdLine);
      termOutput.appendChild(resLine);
      termOutput.scrollTop = termOutput.scrollHeight;
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function executeCommand(rawCmd) {
      const cleanCmd = rawCmd.trim();
      if (!cleanCmd) return;

      if (cleanCmd.toLowerCase() === 'clear') {
        if (termOutput) termOutput.innerHTML = '';
        return;
      }

      const match = commands[cleanCmd.toLowerCase()] || commands[cleanCmd];
      if (match) {
        appendTermLog(cleanCmd, match);
      } else {
        appendTermLog(cleanCmd, `zsh: command not found: ${cleanCmd}. Type "help" for available system commands.`);
      }
    }

    if (termInput) {
      termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          executeCommand(termInput.value);
          termInput.value = '';
        }
      });
    }

    termBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) executeCommand(cmd);
      });
    });

    // --------------------------------------------------------------------------
    // 3. Architecture Diagram View Toggle (Visual Graph vs ASCII Spec)
    // --------------------------------------------------------------------------
    const toggleButtons = document.querySelectorAll('.diagram-toggle-btn');
    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const mode = this.getAttribute('data-mode');
        const container = document.getElementById(targetId);
        if (!container) return;

        // Toggle button active state within the same group
        const groupBtns = this.parentElement.querySelectorAll('.diagram-toggle-btn');
        groupBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        const asciiBlock = container.querySelector('.architecture-ascii-block');
        const visualBlock = container.querySelector('.flow-node-track');

        if (mode === 'ascii') {
          if (asciiBlock) asciiBlock.style.display = 'block';
          if (visualBlock) visualBlock.style.display = 'none';
        } else {
          if (asciiBlock) asciiBlock.style.display = 'none';
          if (visualBlock) visualBlock.style.display = 'flex';
        }
      });
    });

    // --------------------------------------------------------------------------
    // 4. One-Click Copy Email with Instant Feedback
    // --------------------------------------------------------------------------
    const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
    const toast = document.getElementById('copy-toast');

    copyEmailBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'aabbassin@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email address copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Contact: ' + email);
        });
      });
    });

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 3500);
    }
  });
})();
