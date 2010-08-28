/*jslint laxbreak: true, onevar: true, undef: true, nomen: true, eqeqeq: true,
  bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxlen: 90 */
/*global document*/

"use strict";

(function (doc) {
	var
		  download = doc.createElement("a")
		, favePanel = doc.getElementById("fave-panel")
		, updateDownloadLink = function () {
			var audio = doc.getElementById("jqjp_audio_0");
			if (audio && audio.currentSrc) {
				download.href = audio.currentSrc;
			}
		}
	;
	download.appendChild(doc.createTextNode("\u2B07"));
	favePanel.appendChild(download);
	download.addEventListener("mouseover", updateDownloadLink, false);
	download.addEventListener("focus", updateDownloadLink, false);
	updateDownloadLink();
}(document));