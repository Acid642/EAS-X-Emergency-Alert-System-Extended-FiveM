Config = {}

-- Base display duration (in ms), will auto-scale with message length
Config.BaseDuration = 30000 -- 30 seconds
Config.ExtraPerChar = 100   -- +100ms per char after 200 characters

-- Sound options
Config.Sounds = {
    ["eas"] = "eas_siren.ogg",
    ["amber"] = "amber_alert.ogg"
}

-- Default sound volume
Config.Volume = 0.8
