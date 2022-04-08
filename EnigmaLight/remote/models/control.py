# -*- coding: utf-8 -*-

##############################################################################
#                        2011 E2OpenPlugins                                  #
#                                                                            #
#  This file is open source software; you can redistribute it and/or modify  #
#     it under the terms of the GNU General Public License version 2 as      #
#               published by the Free Software Foundation.                   #
#                                                                            #
##############################################################################
from Components.config import config
from enigma import eServiceReference, eActionMap, eServiceCenter
from urllib import unquote

from Plugins.Extensions.EnigmaLight.__common__ import EnigmaLight_log as log, rgbToHex, showMessage, showError


def setLightOn(session, controller):
	log("",None,"models.control::setLightOn()")
	controller.Control("start","dynamic")
	
def setDynamicOn(session, controller):
	log("",None,"models.control::setDynamicOn()")
	controller.Control("start", "dynamic")

def setMoodlampOn(session, controller):
	log("",None,"models.control::setMoodlampOn()")
	controller.Control("grabber", "moodlamp")

def setLightOff(session, controller):
	log("",None,"models.control::setLightOff()")
	controller.Control("grabber","stop")

def setOption(session, request, controller):
	log("",None,"models.control::setOption(" + request.args["set"][0] + ")")
	
	#if request.args["set"][0] == "presets":
	#	return controller.handleWebRemote("presets", request.args["v"][0])
	if request.args["set"][0] == "brightness":
		return controller.handleWebRemote("brightness", request.args["v"][0])
	if request.args["set"][0] == "brightnessmin":
		return controller.handleWebRemote("brightnessmin", request.args["v"][0])
	if request.args["set"][0] == "brightnessmax":
		return controller.handleWebRemote("brightnessmax", request.args["v"][0])
	if request.args["set"][0] == "saturation":
		return controller.handleWebRemote("saturation", request.args["v"][0])
	if request.args["set"][0] == "saturationmin":
		return controller.handleWebRemote("saturationmin", request.args["v"][0])
	if request.args["set"][0] == "saturationmax":
		return controller.handleWebRemote("saturationmax", request.args["v"][0])
	if request.args["set"][0] == "speed":
		return controller.handleWebRemote("speed", request.args["v"][0])
	if request.args["set"][0] == "gamma":
		return controller.handleWebRemote("gamma", request.args["v"][0])
	if request.args["set"][0] == "adjustr":
		return controller.handleWebRemote("adjustr", request.args["v"][0])
	if request.args["set"][0] == "adjustg":
		return controller.handleWebRemote("adjustg", request.args["v"][0])
	if request.args["set"][0] == "adjustb":
		return controller.handleWebRemote("adjustb", request.args["v"][0])
	if request.args["set"][0] == "moodlamp_brightness":
		return controller.handleWebRemote("moodlamp_brightness", request.args["v"][0])
	if request.args["set"][0] == "moodlamp_mode":
		return controller.handleWebRemote("moodlamp_mode", request.args["v"][0])
	if request.args["set"][0] == "moodlamp_static_color_r":
		return controller.handleWebRemote("moodlamp_static_color_r", request.args["v"][0])
	if request.args["set"][0] == "moodlamp_static_color_g":
		return controller.handleWebRemote("moodlamp_static_color_g", request.args["v"][0])
	if request.args["set"][0] == "moodlamp_static_color_b":
		return controller.handleWebRemote("moodlamp_static_color_b", request.args["v"][0])
		

def getLightState(session, controller):
	log("",None,"models.control::getLightState()")

	return {
		"result": True,
		"lightsEnabled": controller.lightsEnabled
	}

def getOptionValue(session, request, controller):
	log("",None,"models.control::getOptionValue() return = "+ ret)

	ret = controller.getOptionValue(request.args["get"][0])

	return {
		"result": True,
		"value": ret
	}

