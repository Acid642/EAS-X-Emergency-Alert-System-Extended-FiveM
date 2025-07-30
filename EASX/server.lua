RegisterCommand("easui", function(source, args, raw)
    if IsPlayerAceAllowed(source, "eas.open") then
        TriggerClientEvent("eas:openMenu", source)
    else
        TriggerClientEvent("chat:addMessage", source, {
            args = {"EAS", "❌ You do not have permission to use this command."}
        })
    end
end, false)
