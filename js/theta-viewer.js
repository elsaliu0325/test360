! function ($) {
    "use strict";

    function createCubeMapTexture(image_url, onload, onerror) {
        function buildCubeMapTextures(img) {
            var dest, canvas, context, x, y, phi, theta, u, v, dloc, sloc, sW, sH, cW, cH, dy, srcCanvas, srcContext, dW, dH, R, src, i, megaPixImage;
            for (sW = img.width, sH = img.height, 2048 >= sW ? (cW = sW, cH = Math.floor(cW / 2), dy = -Math.floor((cH - sH) / 2)) : (cW = 2048, cH = 1024, dy = -Math.floor((cH - 2048 * sH / sW) / 2)), srcCanvas = $("<canvas>").attr({
                    width: cW,
                    height: cH
                }), srcContext = srcCanvas.get(0).getContext("2d"), megaPixImage = new MegaPixImage(img), megaPixImage.render(srcCanvas.get(0), {
                    maxWidth: cW,
                    maxHeight: cH
                }), src = srcContext.getImageData(0, dy, cW, cH), dW = cW, dH = cH, R = Math.floor(dW / 8), dest = [], canvas = [], context = [], i = 0; 6 > i; i += 1) canvas[i] = $("<canvas>").attr({
                width: 2 * R,
                height: 2 * R
            }), context[i] = canvas[i].get(0).getContext("2d");
            for (i = 0; 6 > i; i += 1) dest[i] = context[i].createImageData(2 * R, 2 * R);
            for (y = 0; R > y; y += 1)
                for (x = 0; R > x; x += 1) phi = Math.atan(x / R), theta = Math.atan(Math.sqrt(x * x + R * R) / (R - y)), u = Math.floor(dW * phi / Math.PI / 2), v = Math.floor(dH * theta / Math.PI), dloc = R + x + 2 * y * R, sloc = u + 8 * v * R, dest[2].data[4 * dloc] = src.data[4 * sloc], dest[2].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[2].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[2].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (2 * R - y - 1) * R, sloc = u + 8 * (4 * R - v - 1) * R, dest[2].data[4 * dloc] = src.data[4 * sloc], dest[2].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[2].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[2].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * y * R, sloc = 2 * R - u - 1 + 8 * v * R, dest[3].data[4 * dloc] = src.data[4 * sloc], dest[3].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[3].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[3].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (2 * R - y - 1) * R, sloc = 2 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[3].data[4 * dloc] = src.data[4 * sloc], dest[3].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[3].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[3].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * y * R, sloc = 2 * R + u + 8 * v * R, dest[3].data[4 * dloc] = src.data[4 * sloc], dest[3].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[3].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[3].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (2 * R - y - 1) * R, sloc = 2 * R + u + 8 * (4 * R - v - 1) * R, dest[3].data[4 * dloc] = src.data[4 * sloc], dest[3].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[3].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[3].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * y * R, sloc = 4 * R - u - 1 + 8 * v * R, dest[0].data[4 * dloc] = src.data[4 * sloc], dest[0].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[0].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[0].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (2 * R - y - 1) * R, sloc = 4 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[0].data[4 * dloc] = src.data[4 * sloc], dest[0].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[0].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[0].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * y * R, sloc = 4 * R + u + 8 * v * R, dest[0].data[4 * dloc] = src.data[4 * sloc], dest[0].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[0].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[0].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (2 * R - y - 1) * R, sloc = 4 * R + u + 8 * (4 * R - v - 1) * R, dest[0].data[4 * dloc] = src.data[4 * sloc], dest[0].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[0].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[0].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * y * R, sloc = 6 * R - u - 1 + 8 * v * R, dest[1].data[4 * dloc] = src.data[4 * sloc], dest[1].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[1].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[1].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (2 * R - y - 1) * R, sloc = 6 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[1].data[4 * dloc] = src.data[4 * sloc], dest[1].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[1].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[1].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * y * R, sloc = 6 * R + u + 8 * v * R, dest[1].data[4 * dloc] = src.data[4 * sloc], dest[1].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[1].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[1].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (2 * R - y - 1) * R, sloc = 6 * R + u + 8 * (4 * R - v - 1) * R, dest[1].data[4 * dloc] = src.data[4 * sloc], dest[1].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[1].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[1].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * y * R, sloc = 8 * R - u - 1 + 8 * v * R, dest[2].data[4 * dloc] = src.data[4 * sloc], dest[2].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[2].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[2].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (2 * R - y - 1) * R, sloc = 8 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[2].data[4 * dloc] = src.data[4 * sloc], dest[2].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[2].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[2].data[4 * dloc + 3] = src.data[4 * sloc + 3];
            for (y = 0; R > y; y += 1)
                for (x = 0; y >= x; x += 1) phi = Math.atan(x / y), theta = Math.atan(Math.sqrt(x * x + y * y) / R), u = Math.floor(dW * phi / Math.PI / 2), v = Math.floor(dH * theta / Math.PI), dloc = R - y - 1 + 2 * (R + x) * R, sloc = u + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - y - 1 + 2 * (R - x - 1) * R, sloc = u + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (R + y) * R, sloc = 2 * R - u - 1 + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (R - y - 1) * R, sloc = 2 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (R + y) * R, sloc = 2 * R + u + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (R - y - 1) * R, sloc = 2 * R + u + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + y + 2 * (R + x) * R, sloc = 4 * R - u - 1 + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + y + 2 * (R - x - 1) * R, sloc = 4 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + y + 2 * (R - x - 1) * R, sloc = 4 * R + u + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + y + 2 * (R + x) * R, sloc = 4 * R + u + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (R - y - 1) * R, sloc = 6 * R - u - 1 + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R + x + 2 * (R + y) * R, sloc = 6 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (R - y - 1) * R, sloc = 6 * R + u + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - x - 1 + 2 * (R + y) * R, sloc = 6 * R + u + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - y - 1 + 2 * (R - x - 1) * R, sloc = 8 * R - u - 1 + 8 * v * R, dest[4].data[4 * dloc] = src.data[4 * sloc], dest[4].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[4].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[4].data[4 * dloc + 3] = src.data[4 * sloc + 3], dloc = R - y - 1 + 2 * (R + x) * R, sloc = 8 * R - u - 1 + 8 * (4 * R - v - 1) * R, dest[5].data[4 * dloc] = src.data[4 * sloc], dest[5].data[4 * dloc + 1] = src.data[4 * sloc + 1], dest[5].data[4 * dloc + 2] = src.data[4 * sloc + 2], dest[5].data[4 * dloc + 3] = src.data[4 * sloc + 3];
            for (i = 0; 6 > i; i += 1) context[i].putImageData(dest[i], 0, 0);
            return texture = [canvas[2], canvas[0], canvas[4], canvas[5], canvas[1], canvas[3]]
        }
        var img, texture;
        return img = new Image, img.src = image_url, img.onload = function () {
            texture = buildCubeMapTextures(this), onload(texture)
        }, img.onerror = function () {
            onerror()
        }, texture
    }

    function activateThetaViewer(that, texture, mode) {
        var thetaViewer = new ThetaViewer(that, texture, mode);
        thetaViewer.render()
    }

    function imageLoadError(image_url) {
        alert("loading error: " + image_url)
    }

    function rendererModeSelector() {
        var mode;
        if (null !== Detector.webgl) mode = "WebGL";
        else if (Modernizr.csstransforms3d === !0 && Modernizr.canvas === !0) mode = "CSS3D";
        else {
            if (Modernizr.canvas !== !0) throw alert("WebGL, CSS3 and Canvas Renderer are not available!"), "rendererNotAvailable";
            mode = "Canvas"
        }
        return mode
    }
    var ThetaViewer = function (element, texture, mode) {
        function createRenderer(that, element, mode) {
            "WebGL" === mode ? (that.renderer = new THREE.WebGLRenderer({
                antialias: !0
            }), that.renderer.setClearColor(0, 1)) : "CSS3D" === mode ? that.renderer = new THREE.CSS3DRenderer : "Canvas" === mode && (that.renderer = new THREE.CanvasRenderer, that.renderer.setClearColor(0, 1)), that.renderer.setSize(element.width(), element.height()), $(element).append(that.renderer.domElement)
        }

        function buildScene(that) {
            that.scene = new THREE.Scene
        }

        function createCamera(that) {
            var fov = 72,
                aspect = element.width() / element.height(),
                near = .1,
                far = 1e3;
            that.camera = new THREE.PerspectiveCamera(fov, aspect, near, far), that.camera.lookAt({
                x: 1,
                y: 0,
                z: 0
            }), that.scene.add(that.camera)
        }

        function buildSphere(that, texture) {
            var thetaStart, thetaLength, matrix, radius = 1,
                widthSegments = 32,
                heightSegments = 16,
                phiStart = 0,
                phiLength = 2 * Math.PI;
            thetaLength = 2 * Math.PI * texture.image.height / texture.image.width, thetaLength > Math.PI && (thetaLength = Math.PI), thetaStart = (Math.PI - thetaLength) / 2, that.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), matrix = (new THREE.Matrix4).makeScale(1, 1, -1), that.geometry.applyMatrix(matrix)
        }

        function buildMaterial(that, texture) {
            that.material = new THREE.MeshBasicMaterial({
                overdraw: !0,
                map: texture,
                side: THREE.FrontSide
            })
        }

        function createMesh(that) {
            that.mesh = new THREE.Mesh(that.geometry, that.material), that.scene.add(that.mesh)
        }

        function createCube(that, texture) {
            var sides, R, dR, i, side, ele, object;
            for (R = $(texture[0]).get(0).width, dR = (R - 2) / 2, sides = [{
                    position: [-dR, 0, 0],
                    rotation: [0, Math.PI / 2, 0]
                }, {
                    position: [dR, 0, 0],
                    rotation: [0, -Math.PI / 2, 0]
                }, {
                    position: [0, dR, 0],
                    rotation: [Math.PI / 2, 0, 0]
                }, {
                    position: [0, -dR, 0],
                    rotation: [-Math.PI / 2, 0, 0]
                }, {
                    position: [0, 0, dR],
                    rotation: [0, Math.PI, 0]
                }, {
                    position: [0, 0, -dR],
                    rotation: [0, 0, 0]
                }], i = 0; i < sides.length; i += 1) side = sides[i], ele = $(texture[i]).get(0), object = new THREE.CSS3DObject(ele), object.position.fromArray(side.position), object.rotation.fromArray(side.rotation), that.scene.add(object)
        }

        function addEventListeners(that, element) {
            function onResize() {
                camera.aspect = element.width() / element.height(), camera.updateProjectionMatrix(), renderer.setSize(element.width(), element.height())
            }

            function onMouseDown(event) {
                event.preventDefault(), isRotating = !0, onMouseDownLat = lat, onMouseDownLng = lng, onMouseDownX = event.clientX, onMouseDownY = event.clientY
            }

            function onMouseMove(event) {
                var phi, theta;
                event.preventDefault(), isRotating === !0 && (lat = .1 * (event.clientY - onMouseDownY) + onMouseDownLat, lat = Math.max(-85, Math.min(85, lat)), lng = .1 * (onMouseDownX - event.clientX) + onMouseDownLng, phi = (90 - lat) * Math.PI / 180, theta = lng * Math.PI / 180, camera.lookAt({
                    x: Math.sin(phi) * Math.cos(theta),
                    y: Math.cos(phi),
                    z: Math.sin(phi) * Math.sin(theta)
                }))
            }

            function onMouseUp() {
                isRotating = !1
            }

            function onTouchStart(event) {
                var touch;
                event.preventDefault(), touch = event.touches[0], onTouchX = touch.screenX, onTouchY = touch.screenY
            }

            function onTouchMove(event) {
                var touch, phi, theta;
                event.preventDefault(), touch = event.touches[0], lat += .2 * (touch.screenY - onTouchY), lng -= .2 * (touch.screenX - onTouchX), onTouchX = touch.screenX, onTouchY = touch.screenY, phi = (90 - lat) * Math.PI / 180, theta = lng * Math.PI / 180, camera.lookAt({
                    x: Math.sin(phi) * Math.cos(theta),
                    y: Math.cos(phi),
                    z: Math.sin(phi) * Math.sin(theta)
                })
            }

            function onMouseWheel(event) {
                var fov = camera.fov,
                    fovMin = 20,
                    fovMax = 150;
                event.preventDefault(), event.wheelDeltaY ? fov -= .05 * event.wheelDeltaY : event.wheelDelta ? fov -= .05 * event.wheelDelta : event.detail && (fov += event.detail), fovMin > fov && (fov = fovMin), fov > fovMax && (fov = fovMax), camera.fov = fov, camera.updateProjectionMatrix()
            }
            var isRotating = !1,
                onMouseDownLat = 0,
                onMouseDownLng = 0,
                onMouseDownX = 0,
                onMouseDownY = 0,
                lat = 0,
                lng = 0,
                onTouchX = 0,
                onTouchY = 0,
                camera = that.camera,
                renderer = that.renderer;
            $(element).on("mousedown", onMouseDown).on("mousemove", onMouseMove).on("mouseup", onMouseUp).on("mouseout", onMouseUp).on("resize", onResize), Modernizr.touch === !0 && ($(element).get(0).addEventListener("touchstart", onTouchStart, !1), $(element).get(0).addEventListener("touchmove", onTouchMove, !1)), $(element).get(0).addEventListener("mousewheel", onMouseWheel, !1), $(element).get(0).addEventListener("DOMMouseScroll", onMouseWheel, !1)
        }
        createRenderer(this, element, mode), buildScene(this), createCamera(this), "WebGL" === mode || "Canvas" === mode ? (buildSphere(this, texture), buildMaterial(this, texture), createMesh(this)) : "CSS3D" === mode && createCube(this, texture), addEventListeners(this, element), this.render = function (that) {
            return function () {
                requestAnimationFrame(that.render), that.renderer.render(that.scene, that.camera)
            }
        }(this)
    };
    $.fn.createThetaViewerWithTexture = function (texture) {
        return activateThetaViewer(this, texture, rendererModeSelector()), this
    }, $.fn.createThetaViewer = function (image_url) {
        var onload, onerror, loadTexture, that, mode;
        return onload = function (texture) {
            activateThetaViewer(that, texture, mode)
        }, onerror = function () {
            imageLoadError(image_url)
        }, loadTexture = function (mode) {
            var texture = null;
            return "WebGL" === mode || "Canvas" === mode ? texture = THREE.ImageUtils.loadTexture(image_url, new THREE.UVMapping, onload, onerror) : "CSS3D" === mode && (texture = createCubeMapTexture(image_url, onload, onerror)), texture
        }, that = this, mode = rendererModeSelector(), loadTexture(mode), this
    }
}(jQuery);