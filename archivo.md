---
layout: default
title: Archivo
---

<section class="archive">
  <h1 class="section-title">Últimos Escritos</h1>

  <div class="archive-grid">
    {% for post in site.posts %}
    <article class="archive-card">
      <div class="archive-image">
        <img src="/assets/images/post.jpg" alt="{{ post.title }}">
      </div>

      <div class="archive-content">
        <h3>{{ post.title }}</h3>
        <p class="archive-meta">
          {{ post.date | date: "%d de %B, %Y" }}
        </p>
        <p class="archive-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 20 }}
        </p>
        <a href="{{ post.url }}" class="btn-small">Leer</a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
