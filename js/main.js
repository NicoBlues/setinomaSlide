  function initFullPage() {
                    if (typeof fullpage_api !== "undefined") {
                        fullpage_api.destroy('all'); // Destroza fullPage si ya estaba activo
                    }

                    new fullpage('#fullpage', {
                        autoScrolling: true,
                        navigation: true,
                        anchors: ['inicio', 'musica', 'videos', 'tocatas', 'fotos', 'contacto'],
                        navigationTooltips: ['Inicio', 'Música', 'Videos', 'Tocatas', 'Fotos', 'contacto'],
                        showActiveTooltip: true,
                        responsiveWidth: 768
                    });
                }

                // Llama la función en la primera carga
                window.addEventListener('DOMContentLoaded', () => {
                    initFullPage();
                });

                barba.init({
                    transitions: [{
                        name: 'fade',
                        leave(data) {
                            return gsap.to(data.current.container, {
                                opacity: 0,
                                duration: 0.5
                            });
                        },
                        enter(data) {
                            return gsap.from(data.next.container, {
                                opacity: 0,
                                duration: 0.5
                            });
                        }
                    }],
                    views: [
                        {
                            namespace: 'inicio',
                            afterEnter(data) {
                                initFullPage();
                            }
                        }
                    ]
                });
  barba.init({
                    transitions: [
                        {
                            name: 'fade',
                            leave(data) {
                                return gsap.to(data.current.container, {
                                    opacity: 0,
                                    duration: 0.5
                                });
                            },
                            enter(data) {
                                return gsap.from(data.next.container, {
                                    opacity: 0,
                                    duration: 0.5
                                });
                            }
                        }
                    ]
                });

                   function loadYoutubeVideo(el) {
                    const videoId = el.getAttribute("data-video-id");
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                    iframe.setAttribute("allowfullscreen", "true");
                    iframe.className = "absolute top-0 left-0 w-full h-full rounded-lg shadow-lg";

                    el.parentNode.replaceChild(iframe, el);
                }