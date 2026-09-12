/**
 * I18N SYSTEM // BILINGUAL RUNTIME (ENGLISH LTR <-> PERSIAN RTL)
 * Authentic Persian technical localization with native RTL layout support,
 * state persistence, seamless switching, and typography scaling.
 */

(function () {
  'use strict';

  const translations = {
    en: {
      // Document metadata
      site_title: 'Artin Abbasi // AI Systems Engineer',
      site_desc: 'Personal technical environment and portfolio of Artin Abbasi — AI Systems Engineer specializing in Autonomous Agents, LLM Pipelines, Neural Search, and RAG Architectures.',

      // Header & Navigation
      brand_role: '// AI Systems Engineer',
      nav_init: '// 00. INIT',
      nav_capabilities: '// 01. CAPABILITIES',
      nav_projects: '// 02. PROJECTS',
      nav_stack: '// 03. STACK',
      nav_experience: '// 04. EXPERIENCE',
      nav_contact: '// 05. CONTACT',
      sys_operational: 'SYS: OPERATIONAL',
      contact_btn: 'Contact',

      // Hero Section
      hero_badge_status: 'AGENT RUNTIME: ACTIVE',
      hero_meta_agents: 'AUTONOMOUS AGENTS',
      hero_meta_rag: 'HYBRID RAG',
      hero_meta_search: 'NEURAL SEARCH',
      hero_meta_inference: 'DISTRIBUTED INFERENCE',
      hero_title_lead: 'Engineering Autonomous AI Agents & Production-Grade LLM Systems.',
      hero_desc: 'Specializing in agentic state workflows, dense-sparse neural retrieval, cross-encoder reranking, and deterministic tool execution. Transforming probabilistic language models into deterministic enterprise engines.',
      hero_cta_projects: 'Explore Systems',
      hero_cta_contact: 'Initialize Contact',
      hero_spec_chip_label: 'CORE RUNTIME:',
      btn_copy_email: 'Copy Email',

      // Hero Telemetry Console
      telemetry_title: 'sys://agent.runtime.monitor',
      telemetry_status: 'LIVE &bull; 14ms',
      telemetry_engine_name: 'RAYAN-ORCHESTRATOR',
      telemetry_engine_sub: 'Autonomous Multi-Agent StateGraph &bull; Active Loop',
      telemetry_pipeline_label: 'ACTIVE EXECUTION PIPELINE',
      t_step1_name: 'Intent Decomp',
      t_step1_meta: 'LangGraph Node &bull; Sub-queries',
      t_step2_name: 'Hybrid Retrieval',
      t_step2_meta: 'BM25 + Qdrant Dense &bull; Top-50',
      t_step3_name: 'Cross-Encoder',
      t_step3_meta: 'Rerank Top-10 &bull; 12ms',
      t_step4_name: 'Sandboxed Action',
      t_step4_meta: 'Deterministic JSON Dispatch',
      t_lbl_throughput: 'THROUGHPUT',
      t_lbl_guardrails: 'GUARDRAILS',
      t_val_guardrails: 'VERIFIED',
      t_lbl_checkpoint: 'CHECKPOINT',
      t_val_checkpoint: 'StateGraph',
      telemetry_simulate_btn: 'Simulate Pipeline Step',

      // System Stats Bar
      stat1_label: 'Years of Engineering Experience',
      stat2_label: 'Projects & Repositories Completed',
      stat3_label: 'Average Pipeline Overhead',
      stat4_label: 'Open Architecture & Python Standards',

      // Section 1: Capabilities
      sec1_tag: '01 // CORE ARCHITECTURES',
      sec1_title: 'Technical Disciplines & System Capabilities',
      sec1_subtitle: 'Delivering production-grade AI infrastructure with deterministic execution guarantees, verifiable reasoning loops, and high-performance backend pipelines.',

      cap1_num: '01.0 // AGENTS',
      cap1_title: 'Autonomous AI Agents & Multi-Agent Workflows',
      cap1_desc: 'Architecting stateful agent loops using LangGraph, ReAct frameworks, and state machines. Implementing persistent memory stores, deterministic JSON tool calling, context compression, and automatic error self-correction.',

      cap2_num: '02.0 // RETRIEVAL',
      cap2_title: 'Neural Information Retrieval & Hybrid RAG',
      cap2_desc: 'Engineering enterprise retrieval pipelines combining sparse BM25 indices with dense vector embeddings (Chroma, Qdrant, pgvector). Applying cross-encoder rerankers, contextual query routing, and hallucination guardrails.',

      cap3_num: '03.0 // BACKEND',
      cap3_title: 'High-Performance AI Backends & APIs',
      cap3_desc: 'Building async Python microservices with FastAPI and Django. Implementing real-time SSE token streaming, rate-limited model gateways, worker queues, and PostgreSQL transaction integrity within secure Linux containers.',

      cap4_num: '04.0 // PREDICTION',
      cap4_title: 'Applied ML, Embeddings & Predictive Modeling',
      cap4_desc: 'Developing custom feature engineering, time-series forecasting, and classification models using TensorFlow, PyTorch, and Scikit-Learn. Transforming unstructured telemetry and market feeds into actionable intelligence.',

      // Section 2: Projects
      sec2_tag: '02 // ARCHITECTURE & REPOSITORIES',
      sec2_title: 'Featured AI Systems & Technical Projects',
      sec2_subtitle: 'In-depth architectural documentation of autonomous systems, web research engines, and quantitative machine learning pipelines.',

      // Project badges & labels
      prod_system_badge: 'PRODUCTION SYSTEM',
      deep_research_badge: 'DEEP RESEARCH ENGINE',
      lbl_what_it_is: 'WHAT IT IS',
      lbl_why_it_exists: 'WHY IT EXISTS',
      lbl_how_it_works: 'HOW IT WORKS',
      lbl_what_makes_special: 'WHAT MAKES IT SPECIAL',
      arch_spec_title: 'SYSTEM ARCHITECTURE SPECIFICATION',
      btn_node_flow: 'Node Flow',
      btn_ascii_spec: 'ASCII Spec',
      inspect_repo_btn: 'Inspect Repo',
      repo_btn: 'Repo',

      // Rayan
      rayan_badge: 'PRODUCTION SYSTEM',
      rayan_title: 'RAYAN &mdash; Enterprise Autonomous AI Agent &amp; Systems Architecture',
      rayan_brief: 'A mission-critical autonomous agent system built for enterprise intelligence operations. Orchestrates multi-modal user queries through strict identity verification, stateful working memory, dense vector retrieval, and deterministic tool execution with full auditability.',
      rayan_what: 'An enterprise-grade autonomous reasoning agent that converts high-level objectives into verified, multi-step system actions.',
      rayan_why: 'Standard LLM chats lack long-term memory, deterministic safety guarantees, and auditable enterprise tool invocation.',
      rayan_how: 'LangGraph state machine routing requests through identity filters, semantic retrieval, and sandboxed JSON function executors.',
      rayan_special: 'Zero-hallucination guardrails with fallback recovery loops and comprehensive provenance logging for every tool invocation.',
      node_user: 'USER',
      node_identity: 'IDENTITY & RBAC',
      node_orchestrator: 'ORCHESTRATOR AGENT',
      node_memory_tools: '[MEMORY + TOOLS + DATA]',
      node_verified: 'VERIFIED ACTION & AUDIT',

      // WIE
      wie_badge: 'DEEP RESEARCH ENGINE',
      wie_title: 'WIE &mdash; Web Intelligence Engine (Deep Research Pipeline)',
      wie_brief: 'An autonomous research system that takes complex open-ended hypotheses, deconstructs them into atomic search queries, executes parallel web discovery, scrapes and extracts semantic content, reranks findings, and synthesizes citation-grounded reports.',
      wie_what: 'An automated multi-agent deep research pipeline simulating the workflow of human investigative research analysts.',
      wie_why: 'Single-prompt LLM web searches suffer from shallow crawling, noisy ad-infested DOMs, and unsourced statements.',
      wie_how: 'Planner decomposes hypotheses → crawler fans out → cross-encoder reranks top paragraphs → evaluator synthesizes report.',
      wie_special: 'Recursive citation tracking with automatic corroboration scoring and headless scraper resilience against anti-bot challenges.',
      node_query: 'QUERY',
      node_planner: 'PLANNER (FANOUT)',
      node_search_crawl: 'SEARCH & CRAWL',
      node_extract_rerank: 'EXTRACT & RERANK',
      node_synthesized: 'SYNTHESIZED REPORT',

      // Dorrex
      dorrex_badge: 'ML ENGINE',
      dorrex_title: 'Dorrex &mdash; Market Predictive ML Engine',
      dorrex_brief: 'Quantitative financial predictive system combining recurrent neural networks (LSTM) with multi-source market sentiment signals for cryptocurrency trend probability modeling.',
      data_pipeline_label: 'DATA PIPELINE:',
      dorrex_pipeline: 'Exchange WebSocket &rarr; Rolling Window Normalization &rarr; Multi-Layer LSTM &rarr; Confidence Intervals',

      // Section 3: Tech Stack Matrix
      sec3_tag: '03 // SYSTEM MATRIX',
      sec3_title: 'Technical Dependencies & Stack Architecture',
      sec3_subtitle: 'Structured technical tooling organized by architectural layer. Focused on deterministic execution, high retrieval accuracy, and backend reliability.',
      
      stack_grp1_title: 'LLM Engineering',
      role_primary_runtime: 'Primary Runtime',
      role_stateful_agents: 'Stateful Agents',
      role_local_inference: 'Local Inference',
      role_frontier_models: 'Frontier Models',

      stack_grp2_title: 'AI Systems & RAG',
      role_dense_bm25: 'Dense + BM25',
      role_reranker: 'Semantic Reranker',
      role_vector_wrangling: 'Vector Wrangling',
      role_vector_indexing: 'Vector Indexing',

      stack_grp3_title: 'Applied ML & Data',
      role_neural_modeling: 'Neural Modeling',
      role_classification: 'Classification / Reg',
      role_data_extraction: 'Data Extraction',
      role_interactive_web: 'Interactive Web',

      stack_grp4_title: 'Backend & Infrastructure',
      role_fastapi: 'Async REST / SSE',
      role_django: 'Enterprise Backend',
      role_linux: 'Host Environment',
      role_git: 'CI/CD & Versioning',

      // Section 4: Provenance & Experience
      sec4_tag: '04 // PROVENANCE & TIMELINE',
      sec4_title: 'Engineering Provenance & Academic Background',
      sec4_subtitle: 'Chronological record of software development responsibilities, international competition placements, and system foundations.',
      
      exp_col1_title: 'Engineering Experience & Competitions',
      commit_9a4f: 'COMMIT: 9a4f21e',
      job1_title: 'Backend Developer & Technical Systems',
      job1_institute: 'Elecomp 28',
      job1_desc: 'Engineered backend services, optimized database queries, and collaborated on technical presentation systems for Iran\'s premier electronics & computer exhibition.',

      commit_7b31: 'COMMIT: 7b31c90',
      job2_title: 'AI Systems Engineer &amp; Developer &mdash; Project RAYAN',
      job2_institute: 'Elecomp 29',
      job2_desc: 'Architected and deployed autonomous multi-agent systems and real-time backend intelligence workflows showcasing the RAYAN enterprise agent at Iran\'s premier technology exhibition.',

      commit_3d18: 'COMMIT: 3d18e24',
      job3_title: 'Junior Technical & Digital Designer',
      job3_institute: 'Independent Contracts',
      job3_desc: 'Developed custom digital identities, user interfaces, and structured layout systems, establishing strong aesthetic foundations that inform current AI UX design.',

      exp_col2_title: 'Technical Education & Foundations',
      meta_coursework: 'COURSEWORK',
      edu1_title: 'Advanced Programming & Computer Systems',
      edu1_institute: 'Mojtamae Fani (Tehran Institute of Technology)',
      edu1_desc: 'In-depth computer science foundations covering object-oriented programming, data structures, algorithms, and backend web frameworks.',

      meta_specialization: 'SPECIALIZATION',
      edu2_title: 'Design & Technology Systems',
      edu2_institute: 'Advanced Applied Academy',
      edu2_desc: 'Rigorous training combining technical web architecture, responsive layout engineering, and user interaction mechanics.',

      meta_research: 'SPECIALIZATION',
      edu3_title: 'Applied Machine Learning & Neural Retraining',
      edu3_institute: 'Autonomous Research & Self-Directed Projects',
      edu3_desc: 'Continuous self-directed research into transformer architectures, LangGraph state machines, vector embeddings, and autonomous agent loops.',

      // Section 5: Contact
      sec5_tag: '05 // DISPATCH & CONTACT',
      sec5_title: 'Initialize Direct Communication',
      sec5_subtitle: 'Available for autonomous AI agent architectures, neural retrieval systems engineering, and contract research collaborations.',
      sec6_tag: '05 // DISPATCH & CONTACT',
      sec6_title: 'Initialize Direct Communication',
      sec6_subtitle: 'Available for autonomous AI agent architectures, neural retrieval systems engineering, and contract research collaborations.',
      contact_card_title: '// DIRECT CHANNELS',
      contact_email_label: 'Direct Email',
      copy_email_btn: 'Copy Email Address',
      contact_phone_label: 'Telephone',
      contact_linkedin_label: 'LinkedIn Network',
      contact_github_label: 'GitHub Repositories',
      avail_label: 'AVAILABILITY STATUS:',
      avail_status: 'Open for AI Systems Architecture & RAG Contracts',

      contact_form_title: '// TRANSMIT DISPATCH',
      form_name_label: 'Full Name / Identity',
      form_name_ph: 'Jane Doe',
      form_email_label: 'Email Address',
      form_email_ph: 'jane@organization.com',
      form_service_label: 'Project Subject / Focus',
      form_service_ph: 'e.g. Multi-Agent System Architecture / RAG Consultation',
      form_msg_label: 'System Requirements / Message',
      form_msg_ph: 'Describe the scope, objectives, or technical challenges...',
      form_submit_btn: 'Transmit Message →',

      // Modals
      modal_success_title: 'Transmission Received',
      modal_success_desc: 'Thank you for initiating communication. Your dispatch has been logged in the system and I will respond to your provided email address shortly.',
      modal_success_close: 'Acknowledge & Close',

      modal_fail_title: 'Transmission Notice',
      modal_fail_desc: 'Transmission could not be dispatched automatically. Please transmit directly via email to: <strong style="color: var(--text-primary);">aabbassin@gmail.com</strong>.',
      modal_fail_close: 'Close',

      // Footer
      brand_role_footer: '// AI Systems Engineer',
      footer_tagline: 'Autonomous Agents • Hybrid RAG • Neural Retrieval • Production Async Backends',
      footer_sys_status: 'SYS: ALL SYSTEMS OPERATIONAL',
      footer_meta_copyright: '© Artin Abbasi. Engineered with classical editorial principles & open standards.',
      copy_toast: 'Copied to clipboard'
    },

    fa: {
      // Document metadata
      site_title: 'آرتین عباسی // مهندس سیستم‌های هوش مصنوعی',
      site_desc: 'محیط فنی و پورتفولیوی تخصصی آرتین عباسی — مهندس سیستم‌های هوش مصنوعی، متخصص ایجنت‌های خودکار، پایپ‌لاین‌های LLM، جست‌وجوی عصبی و معماری‌های RAG.',

      // Header & Navigation
      brand_role: '// مهندس سیستم‌های هوش مصنوعی',
      nav_init: '// ۰۰. شروع',
      nav_capabilities: '// ۰۱. توانمندی‌ها',
      nav_projects: '// ۰۲. پروژه‌ها',
      nav_stack: '// ۰۳. استک فنی',
      nav_experience: '// ۰۴. سوابق',
      nav_contact: '// ۰۵. ارتباط',
      sys_operational: 'سیستم: فعال و پایدار',
      contact_btn: 'تماس مستقیم',

      // Hero Section
      hero_badge_status: 'محیط اجرای ایجنت: فعال',
      hero_meta_agents: 'AGENTهای خودمختار',
      hero_meta_rag: 'سیستم‌های RAG ترکیبی',
      hero_meta_search: 'جست‌وجوی عصبی و معنایی',
      hero_meta_inference: 'پردازش توزیع‌شده LLM',
      hero_title_lead: 'مهندسی سیستم‌های هوشمند، ایجنت‌های خودمختار و پایپ‌لاین‌های عملیاتی LLM.',
      hero_desc: 'تمرکز من روی طراحی معماری‌های چندعامله (Multi-Agent)، بازیابی اطلاعات ترکیبی (Dense & Sparse Retrieval)، بازرتبه‌بندی عصبی با Cross-Encoder و اجرای قطعی ابزارها است؛ تبدیل مدل‌های زبانی احتمالی به سیستم‌های نرم‌افزاری پایدار و پیش‌بینی‌پذیر.',
      hero_cta_projects: 'بررسی پروژه‌ها و معماری',
      hero_cta_contact: 'ارتباط مستقیم',
      hero_spec_chip_label: 'استک اجرایی:',
      btn_copy_email: 'کپی ایمیل',

      // Hero Telemetry Console
      telemetry_title: 'sys://agent.runtime.monitor',
      telemetry_status: 'زنده • ۱۴ میلی‌ثانیه',
      telemetry_engine_name: 'RAYAN-ORCHESTRATOR',
      telemetry_engine_sub: 'گراف حالت چندعامله خودکار • پایپ‌لاین فعال',
      telemetry_pipeline_label: 'مراحل اجرای زنده پایپ‌لاین',
      t_step1_name: 'تحلیل و شکست پرسش',
      t_step1_meta: 'گره تصمیم LangGraph • تولید زیرپرسش‌ها',
      t_step2_name: 'بازیابی ترکیبی RAG',
      t_step2_meta: 'ترکیب BM25 و برداری Qdrant • ۵۰ سند برتر',
      t_step3_name: 'بازرتبه‌بندی Cross-Encoder',
      t_step3_meta: 'انتخاب ۱۰ مستند نهایی • ۱۲ میلی‌ثانیه',
      t_step4_name: 'اجرای ایزوله ابزار',
      t_step4_meta: 'ارسال خروجی ساخت‌یافته و قطعی JSON',
      t_lbl_throughput: 'نرخ پردازش',
      t_lbl_guardrails: 'اعتبارسنجی',
      t_val_guardrails: 'تأییدشده',
      t_lbl_checkpoint: 'نقطه بازگشت',
      t_val_checkpoint: 'StateGraph',
      telemetry_simulate_btn: 'شبیه‌سازی گام پایپ‌لاین',

      // System Stats Bar
      stat1_label: 'سال سابقه توسعه مهندسی نرم‌افزار',
      stat2_label: 'پروژه و ریپازیتوری فنی تکمیل‌شده',
      stat3_label: 'میانگین تاخیر پایپ‌لاین در محیط عملیاتی',
      stat4_label: 'معماری باز و استانداردهای پیشرفته پایتون',

      // Section 1: Capabilities
      sec1_tag: '۰۱ // معماری‌های اصلی',
      sec1_title: 'تخصص‌های مهندسی و توانمندی‌های سیستمی',
      sec1_subtitle: 'پیاده‌سازی زیرساخت‌های هوش مصنوعی سازمانی با تضمین اجرای قطعی، چرخه‌های استدلال شفاف و سرویس‌های بک‌اند با کارایی بالا.',

      cap1_num: '۰۱.۰ // ایجنت‌های خودکار',
      cap1_title: 'سیستم‌های چندعامله خودکار (Multi-Agent Workflows)',
      cap1_desc: 'طراحی چرخه‌های تصمیم‌گیری با LangGraph، چارچوب‌های ReAct و ماشین‌های حالت. پیاده‌سازی حافظه پایدار، فراخوانی قطعی ابزارها با ساختار JSON، فشرده‌سازی پرامپت و خودترمیمی خودکار خطاها.',

      cap2_num: '۰۲.۰ // بازیابی اطلاعات',
      cap2_title: 'بازیابی عصبی اطلاعات و سیستم‌های RAG ترکیبی',
      cap2_desc: 'مهندسی پایپ‌لاین‌های بازیابی سازمانی با ادغام نمایه‌های متنی BM25 و تعبیه‌های برداری متراکم (Qdrant، Chroma و pgvector)، به‌همراه مدل‌های بازرتبه‌بندی Cross-Encoder و فیلترهای ضدتوهم.',

      cap3_num: '۰۳.۰ // توسعه بک‌اند',
      cap3_title: 'بک‌اند‌های پرسرعت و APIهای مقیاس‌پذیر هوش مصنوعی',
      cap3_desc: 'توسعه مایکروسرویس‌های ناهمگام پایتون با FastAPI و Django، استریم بلادرنگ توکن‌ها با پروتکل SSE، مدیریت صف‌های سنگین پردازشی و تضمین تراکنش‌های پایگاه داده PostgreSQL در کانتینرهای لینوکس.',

      cap4_num: '۰۴.۰ // یادگیری ماشین',
      cap4_title: 'یادگیری ماشین کاربردی و مدل‌سازی پیش‌بینانه',
      cap4_desc: 'مهندسی ویژگی‌ها، پیش‌بینی سری‌های زمانی و مدل‌های دسته‌بندی با PyTorch، TensorFlow و Scikit-Learn. تبدیل داده‌های خام تلمتری و بازارهای مالی به بینش‌های آماری قابل‌اتکا.',

      // Section 2: Projects
      sec2_tag: '۰۲ // پروژه‌ها و معماری سیستم‌ها',
      sec2_title: 'سیستم‌های هوش مصنوعی عملیاتی و پروژه‌های شاخص',
      sec2_subtitle: 'مستندات معماری و تفکیک فنی سیستم‌های خودکار، موتورهای پژوهش عمیق وب و پایپ‌لاین‌های محاسباتی یادگیری ماشین.',

      // Project badges & labels
      prod_system_badge: 'سیستم عملیاتی',
      deep_research_badge: 'موتور پژوهش عمیق',
      lbl_what_it_is: 'ماهیت سیستم',
      lbl_why_it_exists: 'دلیل توسعه',
      lbl_how_it_works: 'مکانیزم کارکرد',
      lbl_what_makes_special: 'تمایز مهندسی',
      arch_spec_title: 'مشخصات معماری و دیاگرام سیستم',
      btn_node_flow: 'جریان گره‌ها',
      btn_ascii_spec: 'بلوپرینت متنی',
      inspect_repo_btn: 'مشاهده ریپازیتوری',
      repo_btn: 'سورس‌کد',

      // Rayan
      rayan_badge: 'سیستم عملیاتی',
      rayan_title: 'رایان (RAYAN) &mdash; سیستم ایجنت خودکار سازمانی و معماری چندعامله',
      rayan_brief: 'سیستم پیشرفته ایجنت خودمختار طراحی‌شده برای تحلیل و اتوماسیون داده‌های سازمانی. پردازش پرسش‌های چندوجهی از طریق احراز هویت دقیق، حافظه کاری پایدار، بازیابی برداری متراکم و اجرای ایمن و ثبت‌شده ابزارها.',
      rayan_what: 'یک ایجنت هوشمند استدلال‌گر که اهداف سطح بالای کاربر را به گام‌های عملیاتی اعتبارسنجی‌شده در سیستم تبدیل می‌کند.',
      rayan_why: 'چت‌بات‌های متداول فاقد حافظه بلندمدت، تضمین‌های ایمنی قطعی و قابلیت اتصال مستقیم و ایمن به ابزارهای سازمانی هستند.',
      rayan_how: 'ماشین حالت LangGraph که پرسش‌ها را از لایه‌های احراز هویت، بازیابی معنایی و مجریان ایزوله توابع JSON عبور می‌دهد.',
      rayan_special: 'گاردریل‌های ضدتوهم با چرخه‌های بازیابی خطای خودکار و ثبت لاگ ردپای تمام ابزارهای فراخوانی‌شده.',
      node_user: 'کاربر (USER)',
      node_identity: 'احراز هویت و RBAC',
      node_orchestrator: 'ایجنت هماهنگ‌کننده',
      node_memory_tools: '[حافظه + ابزارها + داده]',
      node_verified: 'اقدام تاییدشده و ثبت لاگ',

      // WIE
      wie_badge: 'موتور پژوهش عمیق',
      wie_title: 'موتور هوشمند پژوهش و کاوش وب (WIE &mdash; Deep Research)',
      wie_brief: 'یک سیستم چندعامله خودکار که فرضیه‌های پیچیده پژوهشی را دریافت کرده، آن‌ها را به زیرپرسش‌های اتمیک تفکیک می‌کند، کاوش موازی وب را انجام داده و با ارزیابی متقابل منابع، گزارش مستند تولید می‌نماید.',
      wie_what: 'پایپ‌لاین اتوماتیک تحقیق عمیق با شبیه‌سازی فرایند کاری تحلیلگران اطلاعاتی و کارشناسان پژوهش.',
      wie_why: 'جست‌وجوی ساده وب در چت‌بات‌ها سطحی بوده و مستعد داده‌های تبلیغاتی و ادعاهای بدون ارجاع دقیق است.',
      wie_how: 'برنامه‌ریز فرضیه را می‌شکند ← خزنده‌ها محتوا را استخراج می‌کنند ← بازرتبه‌بندی Cross-Encoder پاراگراف‌ها را اعتبارسنجی می‌کند ← تلفیق گزارش نهایی.',
      wie_special: 'ردیابی بازگشتی ارجاعات با امتیازدهی به اعتبار منابع و مقاومت خزنده‌های بدون‌سر در برابر موانع ضدربات.',
      node_query: 'پرسش پژوهشی',
      node_planner: 'برنامه‌ریز چندمرحله‌ای',
      node_search_crawl: 'جست‌وجو و خزش وب',
      node_extract_rerank: 'استخراج و بازرتبه‌بندی',
      node_synthesized: 'گزارش مستند تحلیلی',

      // Dorrex
      dorrex_badge: 'موتور ML',
      dorrex_title: 'دورکس (Dorrex) &mdash; موتور پیش‌بینی سری‌زمانی و داده‌های مالی',
      dorrex_brief: 'سیستم محاسباتی پیش‌بینی بازارهای مالی با ترکیب شبکه‌های عصبی بازگشتی (LSTM) و سیگنال‌های روان‌شناسی بازار جهت مدل‌سازی احتمالی روندهای قیمتی.',
      data_pipeline_label: 'پایپ‌لاین داده:',
      dorrex_pipeline: 'Exchange WebSocket &larr; نرمال‌سازی پنجره متحرک &larr; مدل LSTM چندلایه &larr; محاسبه فواصل اطمینان',

      // Section 3: Tech Stack Matrix
      sec3_tag: '۰۳ // ماتریس تکنولوژی‌ها',
      sec3_title: 'جعبه‌ابزار فنی و لایه‌های معماری سیستم',
      sec3_subtitle: 'فهرست تفکیک‌شده ابزارها، مدل‌ها، دیتابیس‌ها و زیرساخت‌های عملیاتی مورد استفاده در پیاده‌سازی سیستم‌های هوشمند.',

      stack_grp1_title: 'مهندسی LLM و مدل‌ها',
      role_primary_runtime: 'زبان اصلی توسعه',
      role_stateful_agents: 'ایجنت‌های حالت‌دار',
      role_local_inference: 'استنتاج محلی مدل‌ها',
      role_frontier_models: 'مدل‌های زبانی پیشرو',

      stack_grp2_title: 'سیستم‌های هوش مصنوعی و RAG',
      role_dense_bm25: 'بازیابی متراکم + BM25',
      role_reranker: 'بازرتبه‌بندی معنایی',
      role_vector_wrangling: 'پردازش داده و بردارها',
      role_vector_indexing: 'پایگاه داده برداری',

      stack_grp3_title: 'یادگیری ماشین و داده',
      role_neural_modeling: 'مدل‌سازی شبکه‌های عصبی',
      role_classification: 'الگوریتم‌های رگرسیون/کلاس',
      role_data_extraction: 'خزش و استخراج وب',
      role_interactive_web: 'واسط‌های تعاملی وب',

      stack_grp4_title: 'بک‌اند و زیرساخت لینوکس',
      role_fastapi: 'سرویس‌های ناهمگام REST / SSE',
      role_django: 'فریم‌ورک جامع سازمانی',
      role_linux: 'محیط هاست و سرور',
      role_git: 'ورژن‌کنترل و استقرار مداوم',

      // Section 4: Provenance & Experience
      sec4_tag: '۰۴ // سوابق و فعالیت‌ها',
      sec4_title: 'پیشینه مهندسی و تجارب عملی',
      sec4_subtitle: 'گاه‌شمار فعالیت‌های عملیاتی، ارائه‌های تخصصی در نمایشگاه‌های بین‌المللی و پایه‌های علوم کامپیوتر.',

      exp_col1_title: 'تجارب مهندسی و مسابقات',
      commit_9a4f: 'کامیت: 9a4f21e',
      job1_title: 'توسعه‌دهنده بک‌اند و سیستم‌های فنی',
      job1_institute: 'بیست و هشتمین دوره نمایشگاه الکامپ (Elecomp 28)',
      job1_desc: 'توسعه سرویس‌های بک‌اند، بهینه‌سازی کوئری‌های دیتابیس و مشارکت در ارائه زنده سیستم‌های فنی در بزرگ‌ترین رویداد فناوری و الکترونیک کشور.',

      commit_7b31: 'کامیت: 7b31c90',
      job2_title: 'مهندس سیستم‌های هوش مصنوعی و توسعه‌دهنده &mdash; پروژه RAYAN',
      job2_institute: 'بیست و نهمین دوره نمایشگاه الکامپ (Elecomp 29)',
      job2_desc: 'معماری و استقرار سیستم‌های چندعامله خودکار و زیرساخت‌های استدلال هوشمند سازمانی در قالب پروژه RAYAN در نمایشگاه الکامپ ۲۹.',

      commit_3d18: 'کامیت: 3d18e24',
      job3_title: 'توسعه‌دهنده جونیور و طراح دیجیتال',
      job3_institute: 'پروژه‌های قراردادی مستقل',
      job3_desc: 'طراحی و پیاده‌سازی واسط‌های کاربری و سیستم‌های طرح‌بندی ساختاریافته که پایه‌های بصری قدرتمندی برای تجربه کاربری سیستم‌های هوش مصنوعی ایجاد کرد.',

      exp_col2_title: 'آموزش فنی و مبانی علوم کامپیوتر',
      meta_coursework: 'دوره‌های تخصصی',
      edu1_title: 'برنامه‌نویسی پیشرفته و سیستم‌های کامپیوتر',
      edu1_institute: 'مجتمع فنی تهران (Mojtamae Fani)',
      edu1_desc: 'تسلط بر مبانی عمیق علوم کامپیوتر شامل برنامه‌نویسی شی‌گرا، ساختمان داده‌ها، الگوریتم‌ها و فریم‌ورک‌های توسعه بک‌اند.',

      meta_specialization: 'گرایش تخصصی',
      edu2_title: 'طراحی معماری سیستم‌ها و تعامل دیجیتال',
      edu2_institute: 'آکادمی کاربردی پیشرفته',
      edu2_desc: 'آموزش فشرده ترکیب معماری فنی وب، مهندسی طرح‌بندی واکنش‌گرا و مکانیک تعاملی کاربر با سیستم‌های نرم‌افزاری.',

      meta_research: 'گرایش تخصصی',
      edu3_title: 'یادگیری ماشین کاربردی و ایجنت‌های هوشمند',
      edu3_institute: 'پژوهش‌های مستقل و توسعه فردی',
      edu3_desc: 'تحقیق و پیاده‌سازی مستمر در زمینه معماری ترنسفورمرها، گراف‌های وضعیت LangGraph، تعبیه بردارهای معنایی و حلقه‌های عاملی خودکار.',

      // Section 5: Contact
      sec5_tag: '۰۵ // ارتباط مستقیم و ارسال پیام',
      sec5_title: 'شروع همکاری و گفت‌وگوی فنی',
      sec5_subtitle: 'آماده همکاری در موقعیت‌های شغلی مهندسی هوش مصنوعی، مشاوره معماری سیستم‌های چندعامله و قراردادهای تخصصی RAG.',
      sec6_tag: '۰۵ // ارتباط مستقیم و ارسال پیام',
      sec6_title: 'شروع همکاری و گفت‌وگوی فنی',
      sec6_subtitle: 'آماده همکاری در موقعیت‌های شغلی مهندسی هوش مصنوعی، مشاوره معماری سیستم‌های چندعامله و قراردادهای تخصصی RAG.',
      contact_card_title: '// کانال‌های ارتباط مستقیم',
      contact_email_label: 'ایمیل مستقیم',
      copy_email_btn: 'کپی آدرس ایمیل',
      contact_phone_label: 'تلفن تماس',
      contact_linkedin_label: 'پروفایل لینکدین',
      contact_github_label: 'مخازن گیت‌هاب',
      avail_label: 'وضعیت در دسترس بودن:',
      avail_status: 'آماده همکاری در معماری سیستم‌های هوش مصنوعی و RAG',

      contact_form_title: '// ارسال پیام به سیستم',
      form_name_label: 'نام و نام خانوادگی / سازمان',
      form_name_ph: 'نام شما یا شرکت',
      form_email_label: 'آدرس ایمیل معتبر',
      form_email_ph: 'you@organization.com',
      form_service_label: 'موضوع پروژه یا حیطه همکاری',
      form_service_ph: 'مثلاً: معماری سیستم چندعامله / مشاوره RAG سازمانی',
      form_msg_label: 'شرح نیازهای فنی / پیام پروژه',
      form_msg_ph: 'ابعاد پروژه، اهداف یا چالش‌های فنی مورد نظر خود را شرح دهید...',
      form_submit_btn: 'ارسال پیام ←',

      // Modals
      modal_success_title: 'پیام با موفقیت دریافت شد',
      modal_success_desc: 'با تشکر از ارتباط شما. پیام شما در سیستم ثبت شد و در اسرع وقت به آدرس ایمیل اعلام‌شده پاسخ داده خواهد شد.',
      modal_success_close: 'متوجه شدم و بستن',

      modal_fail_title: 'اطلاعیه ارسال پیام',
      modal_fail_desc: 'ارسال خودکار پیام با مشکل مواجه شد. لطفاً مستقیماً از طریق ایمیل پیام دهید: <strong style="color: var(--text-primary);">aabbassin@gmail.com</strong>.',
      modal_fail_close: 'بستن',

      // Footer
      brand_role_footer: '// مهندس سیستم‌های هوش مصنوعی',
      footer_tagline: 'سیستم‌های چندعامله خودکار • RAG ترکیبی • جست‌وجوی عصبی • بک‌اند‌های ناهمگام عملیاتی',
      footer_sys_status: 'سیستم: تمامی سرویس‌ها پایدار و فعال هستند',
      footer_meta_copyright: '© کلیه حقوق برای آرتین عباسی محفوظ است. طراحی‌شده بر اساس اصول ادیتوریال و استانداردهای باز وب.',
      copy_toast: 'در کلیپ‌بورد کپی شد'
    }
  };

  /**
   * Updates all DOM elements bound with data-i18n attributes
   */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    const isRtl = (lang === 'fa');

    // 1. Root and document direction
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    if (isRtl) {
      document.body.classList.add('rtl-mode');
      document.body.classList.remove('ltr-mode');
    } else {
      document.body.classList.remove('rtl-mode');
      document.body.classList.add('ltr-mode');
    }

    // 2. Document Title and Meta Description
    document.title = dict.site_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.site_desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.site_title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.site_desc);

    // 3. Update Text Content
    const textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        node.textContent = dict[key];
      }
    });

    // 4. Update HTML Content (where tags, formatting or markup are preserved)
    const htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach((node) => {
      const key = node.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        node.innerHTML = dict[key];
      }
    });

    // 5. Update Placeholders
    const placeholderNodes = document.querySelectorAll('[data-i18n-ph]');
    placeholderNodes.forEach((node) => {
      const key = node.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) {
        node.setAttribute('placeholder', dict[key]);
      }
    });

    // 6. Update Active State on Switcher Buttons
    document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 7. Dispatch languagechange event for canvas/interactive components
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang, isRtl } }));

    // 8. Persist preference
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      // Storage unavailable in private browsing
    }
  }

  /**
   * Initializes language state based on URL param, pathname, localStorage, or browser default
   */
  function initLanguage() {
    let initialLang = 'en';

    // Check URL parameters: e.g., ?lang=fa
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang === 'fa' || paramLang === 'en') {
      initialLang = paramLang;
    } else if (window.location.pathname.startsWith('/fa')) {
      initialLang = 'fa';
    } else {
      // Check stored preference
      try {
        const storedLang = localStorage.getItem('portfolio_lang');
        if (storedLang === 'fa' || storedLang === 'en') {
          initialLang = storedLang;
        }
      } catch (e) {
        // ignore
      }
    }

    applyLanguage(initialLang);

    // Bind switcher click listeners
    document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        if (selectedLang && translations[selectedLang]) {
          applyLanguage(selectedLang);

          // Update URL query cleanly without page reload
          const currentUrl = new URL(window.location.href);
          if (selectedLang === 'fa') {
            currentUrl.searchParams.set('lang', 'fa');
          } else {
            currentUrl.searchParams.delete('lang');
          }
          window.history.replaceState(null, '', currentUrl.toString());
        }
      });
    });
  }

  // Export globally so other modules can query current language
  window.PortfolioI18n = {
    getLanguage: () => document.documentElement.lang || 'en',
    isRtl: () => document.documentElement.dir === 'rtl',
    setLanguage: applyLanguage,
    translations: translations
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
