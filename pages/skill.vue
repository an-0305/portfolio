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
                    <span v-if="item.level >= num"><img src="../assets/images/star.svg" class="skill-level-icon"></span>
                    <span v-else><img src="../assets/images/star-edge.svg" class="skill-level-icon"></span>
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              デザインを元にHTML/CSS/Javascriptの設計・実装。特に共通機能はコンポーネント化するなど、保守性に気をつけた設計・実装を行っています。
              CSS設計については、ITCSS(SMACSSの派生)を参考にして、目的別にCSSをいくつかのレイヤーに分け、詳細度が徐々に高く明示的になるようにして、style定義の無駄な重複や詳細度の衝突が発生しづらい設計とするよう心がけています。
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
              <tr v-for="item in marketingSkill" :key="item.type">
                <th>
                  {{ item.type }}
                </th>
                <td>
                  <span v-for="num of maxLevel" :key="num">
                    <span v-if="item.level >= num"><img src="../assets/images/star.svg" class="skill-level-icon"></span>
                    <span v-else><img src="../assets/images/star-edge.svg" class="skill-level-icon"></span>
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              Google Analyticsを用いてサイト内分析を行うことができます。 Google Analyticsだけでは追えないデータはスクレイピングによりデータ収集したり、受注データなどの各種データベースからSQLにより抽出・集計しています。
              Google Tag Managerは広告タグの管理やカスタムJavascriptを書いて必要とするイベントを取得することが可能です。
              SQLはデータ抽出業務で利用していたため、SELECT文でテーブル結合や集計関数、サブクエリを用いてクエリを書くことができます。
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
              <tr v-for="item in Tool" :key="item.type">
                <th>
                  {{ item.type }}
                </th>
                <td>
                  <span v-for="num of maxLevel" :key="num">
                    <span v-if="item.level >= num"><img src="../assets/images/star.svg" class="skill-level-icon"></span>
                    <span v-else><img src="../assets/images/star-edge.svg" class="skill-level-icon"></span>
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div class="skill-wrap-description">
            <p class="skill-description">
              開発はバージョン管理ツールとしてGitを利用しています。開発を行う際は機能ごとにブランチを切って作業し、基本的にはGit-flowに基づいたブランチ運用を行なっています。
              デザインや素材書き出しにはSketchの利用が可能です。
              通常業務にはGoogleスプレッドシート(GAS含む)などG Suite製品をよく利用しています。自動化できる作業はGASを書き、業務効率化を行います。マーケティングにおいてはGoogleデータポータルでレポーティングを行なっています。
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
      ],
      marketingSkill: [
        { type: 'Google Analytics', level: 2 },
        { type: 'Google Tag Manager', level: 2 },
        { type: 'SQL', level: 2 },
        { type: 'Python', level: 1 }
      ],
      Tool: [
        { type: 'Googleスプレッドシート(GAS)', level: 2 },
        { type: 'Googleデータポータル', level: 2 },
        { type: 'Backlog', level: 2 },
        { type: 'Git', level: 2 },
        { type: 'Sketch', level: 1 }
      ]
    }
  }
}
</script>
