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
  // 2. Architecture Diagram View Toggle (Visual Graph vs ASCII Spec)
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
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
