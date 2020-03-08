<template>
  <div class="p-skill o-container">
    <h2 class="title">
      skill
    </h2>
    <div class="content">
      <section class="content-section">
        <h3 class="head">
          フロントエンド
        </h3>
        <div class="skill-wrap">
          <div class="skill-wrap-table">
            <table class="skill-table">
              <tr v-for="item in frontendSkill" :key="item.type">
                <th>
                  {{ item.type }}
                </th>
                <td>
                  <span v-for="num of maxLevel" :key="num">
                    <span v-if="item.level >= num"><img src="../assets/images/star.svg"></span>
                    <span v-else><img src="../assets/images/star-edge.svg"></span>
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              デザインを元にHTML/CSS/Javascriptの設計・実装。特に共通機能はコンポーネント化するなど、保守性に気をつけた設計・実装を行っています。
            </p>
          </div>
        </div>
      </section>
      <section class="content-section">
        <h3 class="head">
          マーケティング
        </h3>
        <div class="skill-wrap">
          <div class="skill-wrap-table">
            <table class="skill-table">
              <tr>
                <th>Google Analytics</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Google Tag Manager</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>SQL</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Python</th>
                <td>★</td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              Google Analyticsを用いてサイト内分析を行うことができます。 Google Analyticsだけでは追えないデータはスクレイピングによりデータ収集したり、受注データなどの各種データベースからSQLにより抽出・集計しています。
            </p>
          </div>
        </div>
      </section>
      <section class="content-section">
        <h3 class="head">
          ツール
        </h3>
        <div class="skill-wrap">
          <div class="skill-wrap-table">
            <table class="skill-table">
              <tr>
                <th>Google Spreadsheet(GAS)</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Googleデータポータル</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Backlog</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Git</th>
                <td>★★</td>
              </tr>
              <tr>
                <th>Sketch</th>
                <td>★</td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              開発はバージョン管理ツールとしてGitを利用、通常業務にはSpreadSheet(GAS含む)などG Suite製品をよく利用しています。マーケティングにおいてはGoogle Data Portalでレポーティングを行なっています。
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxLevel: 3,
      frontendSkill: [
        { type: 'HTML', level: 3 },
        { type: 'CSS(SCSS)', level: 3 },
        { type: 'Javascript', level: 2 },
        { type: 'Vue.js', level: 1 },
        { type: 'Nuxt.js', level: 1 }
      ]
    }
  }
}
</script>
