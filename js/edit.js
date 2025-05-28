$(function () {
  $("#menu").slicknav({
    label: "",
    brand:
      '<img src="./img/brand/original.png" alt="Brand Logo" style="height:37px;">',
  });
});
$(document).ready(function () {
  $(".skitter-large").skitter({
    dots: false,
    navigation: true,
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    navigation: false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  });
});
$(document).ready(() => {
  $(".progress-html")
    .css({ "text-align": "center", "background-color": "#e44d26" })
    .animate(
      {
        width: "70%",
        height: "20px",
        "text-align": "center",
      },
      1000, // 1 second
      () => {
        $(".progress-css3")
          .css({ "text-align": "center", "background-color": "#264de4" })
          .animate(
            {
              width: "70%",
              height: "20px",
            },
            1000,
            () => {
              $(".progress-js")
                .css({ "text-align": "center", "background-color": "#f0db4f" })
                .animate(
                  {
                    width: "70%",
                    height: "20px",
                  },
                  1000,
                  () => {
                    $(".progress-jquery")
                      .css({
                        "text-align": "center",
                        "background-color": "#0769ad",
                      })
                      .animate(
                        {
                          width: "90%",
                          height: "20px",
                        },
                        1000,
                        () => {
                          $(".progress-bs5")
                            .css({
                              "text-align": "center",
                              "background-color": "#563d7c",
                            })
                            .animate(
                              {
                                width: "85%",
                                height: "20px",
                              },
                              1000,
                              () => {
                                $(".progress-mern")
                                  .css({
                                    "text-align": "center",
                                    background:
                                      "linear-gradient(90deg, #3fa037, #61dafb, #20232a)",
                                  })
                                  .animate(
                                    {
                                      width: "80%",
                                      height: "20px",
                                    },
                                    1000,
                                    () => {
                                      $(".progress-expo")
                                        .css({
                                          "text-align": "center",
                                          "background-color": "#000020",
                                        })
                                        .animate(
                                          {
                                            width: "80%",
                                            height: "20px",
                                          },
                                          1000,
                                          () => {
                                            $(".progress-php")
                                              .css({
                                                "text-align": "center",
                                                "background-color": "#8993be",
                                              })
                                              .animate(
                                                {
                                                  width: "85%",
                                                  height: "20px",
                                                },
                                                1000,
                                                () => {
                                                  $(".progress-sql")
                                                    .css({
                                                      "text-align": "center",
                                                      "background-color":
                                                        "#00758f",
                                                    })
                                                    .animate(
                                                      {
                                                        width: "69%",
                                                        height: "20px",
                                                      },
                                                      1000,
                                                      () => {
                                                        $(".progress-mongodb")
                                                          .css({
                                                            "text-align":
                                                              "center",
                                                            "background-color":
                                                              "#47a248",
                                                          })
                                                          .animate({
                                                            width: "80%",
                                                            height: "20px",
                                                          });
                                                      }
                                                    );
                                                }
                                              );
                                          }
                                        );
                                    }
                                  );
                              }
                            );
                        }
                      );
                  }
                );
            }
          );
      }
    );
});
