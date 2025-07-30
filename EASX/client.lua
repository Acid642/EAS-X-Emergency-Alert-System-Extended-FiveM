RegisterNetEvent("eas:display")
AddEventHandler("eas:display", function(message, sound, authority, tts, repeatText, displayMode)
    local base = Config.BaseDuration
    local extra = math.max(0, #message - 200) * Config.ExtraPerChar
    local totalDuration = base + extra

    local scrollSpeed = math.min(24, math.max(8, math.floor(#message / 12))) -- slower if longer

    SendNUIMessage({
        action = "show",
        message = message,
        authority = authority,
        tts = tts,
        repeatText = repeatText,
        displayMode = displayMode,
        scrollSpeed = scrollSpeed
    })

    SendNUIMessage({
        action = "playSound",
        sound = Config.Sounds[sound] or Config.Sounds["eas"],
        volume = Config.Volume
    })

    Wait(totalDuration)
    SendNUIMessage({ action = "hide" })
end)

RegisterNetEvent("eas:openMenu")
AddEventHandler("eas:openMenu", function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "openUI" })
end)

RegisterNUICallback("submitEAS", function(data, cb)
    SetNuiFocus(false, false)
    TriggerServerEvent("eas:broadcast", data.message, data.sound, data.authority, data.tts, data.repeatText, data.displayMode)
    cb("ok")
end)

RegisterNUICallback("closeUI", function(_, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)
