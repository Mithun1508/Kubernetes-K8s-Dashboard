{
  const k8Template = document.getElementById("template-svg");
  const clone = document.importNode(k8Template.content, true);
  clone.firstElementChild.classList.add("k8-svg");
  document.querySelector(".k8-svg-outer").appendChild(clone);
  document.querySelector("main").classList.add("k8-svg-inserted");
}

{
  /* browser glitch causing elements to flash on initial render even though they have opacity of 0. hide them and unhide them after a few hundres 🅱️illiseconds */
  const s = document.querySelectorAll("section");
  s.forEach(node => {
    node.classList.add("bravo-hide"); /* redundant */
  });

  const h = document.querySelector("header");
  h.classList.add("bravo-hide"); /* redundant */
  window.requestAnimationFrame(() => {
    window.setTimeout(() => {
      h.classList.remove("bravo-hide");
    }, 100);

    window.setTimeout(() => {
      s.forEach(node => {
        node.classList.remove("bravo-hide"); /* redundant */
      });
    }, 250);
  });
}

const backgroundColor = [
  "#ff8c94",
  "#ffaaa6",
  "#ffd3b5",
  "#dcedc2"
];
const labels = [
  "d",
  "c",
  "b",
  "a"
];
const options = {
  // animation: true, /* enabling this breaks the animation */
  animationEasing: "easeOutQuint",
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
};

const doughnutCharts = [
  {
    name: "replica-sets",
    data: {
      datasets: [{
        data: [0, 0, 10, 90],
        backgroundColor,
      }],
      labels
    },
    options: {
      ...options
    }
  },
  {
    name: "deployments",
    data: {
      datasets: [{
        data: [0, 0, 0, 100],
        backgroundColor,
      }],
      labels
    },
    options
  },
  {
    name: "pods",
    data: {
      datasets: [{
        data: [0, 0, 5, 100],
        backgroundColor,
      }],
      labels
    },
    options
  }
];


let vvv = [];
doughnutCharts.forEach(chart => {
  let ctx = document.getElementById(chart.name).getContext("2d");
  vvv.push(new Chart(ctx, {
    type: "doughnut",
    data: chart.data,
    options: chart.options
  }));
});
window.setTimeout(() => {
  window.setInterval(() => {
    if(Math.random() < 0.5) return;
    vvv[0].data.datasets.forEach(foxtrot => {
      let [ l1, l2, l3, l4 ] = foxtrot.data;
      foxtrot.data = [
        l1 + Math.round(Math.random() * 5 - Math.random() * 5),
        l2 + Math.round(Math.random() * 5 - Math.random() * 5),
        l3 + Math.round(Math.random() * 5 - Math.random() * 5),
        l4 + Math.round(Math.random() * 5 - Math.random() * 5)
      ];
    });
    vvv[0].update();
  }, 2000);

  window.setInterval(() => {
    if(Math.random() < 0.2) return;
    vvv[1].data.datasets.forEach(foxtrot => {
      let [ l1, l2, l3, l4 ] = foxtrot.data;
      foxtrot.data = [
        l1 + Math.round(Math.random() * 5 - Math.random() * 5),
        l2 + Math.round(Math.random() * 5 - Math.random() * 5),
        l3 + Math.round(Math.random() * 5 - Math.random() * 5),
        l4 + Math.round(Math.random() * 10 - Math.random() * 10)
      ];
    });
    vvv[1].update();
  }, 2000);

  window.setInterval(() => {
    if(Math.random() < 0.1) return;
    vvv[2].data.datasets.forEach(foxtrot => {
      let [ l1, l2, l3, l4 ] = foxtrot.data;
      foxtrot.data = [
        l1 + Math.round(Math.random() * 5 - Math.random() * 5),
        l2 + Math.round(Math.random() * 5 - Math.random() * 5),
        l3 + Math.round(Math.random() * 10 - Math.random() * 10),
        l4 + Math.round(Math.random() * 10 - Math.random() * 10)
      ];
    });
    vvv[2].update();
  }, 1000);

}, 1000);
const d1 = [40, 50, 20, 60];
const d2 = [50, 30, 25, 40];
const cx = document.getElementById("traffic").getContext("2d");
let t = new Chart(cx, {
  type: "line",
  data: {
    datasets: [{
      tension: 0.4,
      fill: false,
      backgroundColor: "#dcedc2",
      borderColor: "#dcedc2",
      data: d1
    },
    {
      tension: 0.4,
      fill: false,
      backgroundColor: "#c2dced",
      borderColor: "#c2dced",
      data: d2
    }],
    labels: ["a", "b", "c", "d"]
  },
  options: {
    ...options,
    scales: {
      yAxes: [{
        ticks: {
          max: 80,
          min: 0,
          stepSize: 20
        },
      }],
      xAxes: [{
        display: false
      }]
    }
  }
});

let di = length => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
let status = "good";
let goodThingToChooseFrom = () => ([
  `no problems found for node ${Math.floor(Math.random() * 48)}`,
  `health check for pod ${di(5)} 👌`,
  `💻 provisioning ${"n2-" + Math.round(Math.random() + 0.5) === 0 ? "standard" : "highcpu" /* lmao */ + "-" + ((Math.round(Math.random() + 0.5) === 0 ? 2 : 4) * (Math.round(Math.random() + 0.5) === 0 ? 2 : 4) * (Math.round(Math.random() + 0.5) === 0 ? 3 : 4))}`,
  `autoscaling ReplicationController ${di(2)}`,
  `🚑 restarting pod ${di(7)}`
]);
let getRandom = () => (goodThingToChooseFrom())[Math.floor(Math.random() * goodThingToChooseFrom().length)];
// animates the bottom right boxes
window.setInterval(() => {
  const n = document.querySelector(".notices");
  for (let i = 0; i < n.children.length; i++) {
    const e = n.children[i];
    if (e.classList.contains("from-gone")) {
      e.classList.replace("from-gone", "third");
    }
    else if (e.classList.contains("third")) {
      e.classList.replace("third", "second");
    }
    else if (e.classList.contains("second")) {
      e.classList.replace("second", "first");
    }
    else if (e.classList.contains("first")) {
      e.classList.replace("first", "zero");
    }
    else if (e.classList.contains("zero")) {
      e.classList.replace("zero", "to-gone");
    }
  }

  let f = document.createElement("span")
  f.className = "notice-span from-gone";
  let p = getRandom();
  f.innerHTML = p;
  n.appendChild(f);

  window.requestAnimationFrame(() => {
    const j = document.querySelector(".to-gone");
    if (j) j.remove();
  });
}, 3000);

window.setTimeout(() => {
  let gu = t.data.datasets;
  console.log(gu[0]);
  let bb = () => Math.floor(Math.random() * 60);
  gu[0].data = [bb(), bb(), bb(), bb()];
  gu[1].data = [bb(), bb(), bb(), bb()];
  t.update();
  window.setInterval(() => {
    let gu = t.data.datasets;
    console.log(gu[0]);
    let bb = () => Math.floor(Math.random() * 60);
    gu[0].data = [bb(), bb(), bb(), bb()];
    let [ aa1, bb1, cc1, dd1 ] = gu[1].data;

    if(dd1 < 20) {
       gu[1].data = [bb1, cc1, dd1, (dd1 + Math.floor(Math.random() * 30) + 20)];
       t.update();
       return;
    }
    if(dd1 > 70) {
       gu[1].data = [bb1, cc1, dd1, (dd1 - Math.floor(Math.random() * 20) - 20)];
       t.update();
       return;
    }
    if(Math.random < .5) {
       gu[1].data = [bb1, cc1, dd1, (dd1 + Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10))];
    }
    else {
    gu[1].data = [bb1, cc1, dd1, (dd1 - Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10))]; }
    t.update();
  }, 1500);

  // t.data.datasets.forEach(s => {
    // s.data.shift();
    // let last = s.data[s.data.length - 1];
    // s.data.push(3);
    // if (last > 65) s.data.push(last - Math.floor(Math.random(15))); return;
    // if (last < 15) s.data.push(last + Math.floor(Math.random(15))); return;
    // s.data.push(last + Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10));
    // t.update();
    // s.data = [50, 30, 25, 40]
  // });
    // t.update();
  // t.data.datasets.forEach(s => {
  //   s.data.pop();
  //   t.update();
  // });
}, 2500);
// todo make credits
// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
// colors at https://colorhunt.co/palette/78712

new Audio("welcome-stats.mp3").play();
