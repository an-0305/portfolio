<template>
<main class="p-top">
  <div class="mainvisual">
  </div>
  <div class="o-container">
    <section class="content about">
      <h2 class="title">about</h2>
      <div>
        <p>福岡出身の24歳。</p>
        <p>新卒で入社した会社でアパレル系ECサイトの構築やWebコンサルティングを担当。</p>
        <p>一番の強みは開発からマーケティングまで短期間で様々な領域の業務を経験したこと。</p>
        <p>そのため開発する際も作って終わるだけでなく、その後の運用のことまであらかじめ考えた設計や提案ができます。</p>
        <p>マーケティングにおいても、開発の経験を活かしてプログラミングによってタスクを自動化したり、スクレイピングによるデータ収集を行うことができます。</p>
      </div>
      <div class="button-wrap">
        <nuxt-link to="/about" class="c-button">View More</nuxt-link>
      </div>
    </section>
    <section class="content skill">
      <h2 class="title">skill</h2>
      <div class="skill-wrap">
        <div class="skill-item">
          <h3 class="head">フロントエンド</h3>
          <div class="icon"><img src="../assets/images/develop.svg" alt=""></div>
          <p>デザインを元にHTML/CSS/Javascriptの設計・実装。特に共通機能はコンポーネント化するなど、保守性に気をつけた設計・実装を行っています。</p>
        </div>
        <div class="skill-item">
          <h3 class="head">マーケティング</h3>
          <div class="icon"><img src="../assets/images/marketing.svg" alt=""></div>
          <p>Google Analyticsを用いてサイト内分析を行うことができます。
    Google Analyticsだけでは追えないデータはスクレイピングによりデータ収集したり、受注データなどの各種データベースからSQLにより抽出・集計しています。</p>
        </div>
        <div class="skill-item">
          <h3 class="head">ツール</h3>
          <div class="icon"><img src="../assets/images/tool.svg" alt=""></div>
          <p>開発はバージョン管理ツールとしてGitを利用、通常業務にはSpreadSheet(GAS含む)などG Suite製品をよく利用しています。マーケティングにおいてはGoogle Data Portalでレポーティングを行なっています。</p>
        </div>
      </div>
      <div class="button-wrap">
        <nuxt-link to="/skill" class="c-button">View More</nuxt-link>
      </div>
    </section>
    <section class="content work">
      <h2 class="title">work</h2>
      <div class="work-wrap">
        <h3 class="head">アパレル系ECサイトの構築・保守</h3>
        <p>デザインを元にアパレル系ECサイトのコーディングを行いました。CSSフレームワークはITCSSをベースとし、最小限の工数で多数のECサイトをオープンさせるため共通機能をコンポーネント化しました。</p>
      </div>
      <div class="work-wrap">
        <h3 class="head">アパレル系ECサイトのコンサルティング</h3>
        <p>月に一度、アパレル系ECサイトのコンサルティングを行いました。Google Analyticsや受注データから売上分析を行いました。</p>
      </div>
      <div class="button-wrap">
        <nuxt-link to="/work" class="c-button">View More</nuxt-link>
      </div>
    </section>
  </div>
</main>
</template>
