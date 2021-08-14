# FRITZ!Box 7590 07.27

- [urn:dslforum-org:service:DeviceInfo:1](##urn:dslforum-org:service:DeviceInfo:1)
- [urn:dslforum-org:service:DeviceConfig:1](##urn:dslforum-org:service:DeviceConfig:1)
- [urn:dslforum-org:service:Layer3Forwarding:1](##urn:dslforum-org:service:Layer3Forwarding:1)
- [urn:dslforum-org:service:LANConfigSecurity:1](##urn:dslforum-org:service:LANConfigSecurity:1)
- [urn:dslforum-org:service:ManagementServer:1](##urn:dslforum-org:service:ManagementServer:1)
- [urn:dslforum-org:service:Time:1](##urn:dslforum-org:service:Time:1)
- [urn:dslforum-org:service:UserInterface:1](##urn:dslforum-org:service:UserInterface:1)
- [urn:dslforum-org:service:X_AVM-DE_Storage:1](##urn:dslforum-org:service:X_AVM-DE_Storage:1)
- [urn:dslforum-org:service:X_AVM-DE_WebDAVClient:1](##urn:dslforum-org:service:X_AVM-DE_WebDAVClient:1)
- [urn:dslforum-org:service:X_AVM-DE_UPnP:1](##urn:dslforum-org:service:X_AVM-DE_UPnP:1)
- [urn:dslforum-org:service:X_AVM-DE_Speedtest:1](##urn:dslforum-org:service:X_AVM-DE_Speedtest:1)
- [urn:dslforum-org:service:X_AVM-DE_RemoteAccess:1](##urn:dslforum-org:service:X_AVM-DE_RemoteAccess:1)
- [urn:dslforum-org:service:X_AVM-DE_MyFritz:1](##urn:dslforum-org:service:X_AVM-DE_MyFritz:1)
- [urn:dslforum-org:service:X_VoIP:1](##urn:dslforum-org:service:X_VoIP:1)
- [urn:dslforum-org:service:X_AVM-DE_OnTel:1](##urn:dslforum-org:service:X_AVM-DE_OnTel:1)
- [urn:dslforum-org:service:X_AVM-DE_Dect:1](##urn:dslforum-org:service:X_AVM-DE_Dect:1)
- [urn:dslforum-org:service:X_AVM-DE_TAM:1](##urn:dslforum-org:service:X_AVM-DE_TAM:1)
- [urn:dslforum-org:service:X_AVM-DE_AppSetup:1](##urn:dslforum-org:service:X_AVM-DE_AppSetup:1)
- [urn:dslforum-org:service:X_AVM-DE_Homeauto:1](##urn:dslforum-org:service:X_AVM-DE_Homeauto:1)
- [urn:dslforum-org:service:X_AVM-DE_Homeplug:1](##urn:dslforum-org:service:X_AVM-DE_Homeplug:1)
- [urn:dslforum-org:service:X_AVM-DE_Filelinks:1](##rn:dslforum-org:service:X_AVM-DE_Filelinks:1)
- [urn:dslforum-org:service:X_AVM-DE_Auth:1](##urn:dslforum-org:service:X_AVM-DE_Auth:1)
- [urn:dslforum-org:service:X_AVM-DE_HostFilter:1](##urn:dslforum-org:service:X_AVM-DE_HostFilter:1)
- [urn:dslforum-org:service:WLANConfiguration:1](##urn:dslforum-org:service:WLANConfiguration:1)
- [urn:dslforum-org:service:WLANConfiguration:2](##urn:dslforum-org:service:WLANConfiguration:2)
- [urn:dslforum-org:service:WLANConfiguration:3](##urn:dslforum-org:service:WLANConfiguration:3)
- [urn:dslforum-org:service:Hosts:1](##urn:dslforum-org:service:Hosts:1)
- [urn:dslforum-org:service:LANEthernetInterfaceConfig:1](##urn:dslforum-org:service:LANEthernetInterfaceConfig:1)
- [urn:dslforum-org:service:LANHostConfigManagement:1](##urn:dslforum-org:service:LANHostConfigManagement:1)
- [urn:dslforum-org:service:WANCommonInterfaceConfig:1](##urn:dslforum-org:service:WANCommonInterfaceConfig:1)
- [urn:dslforum-org:service:WANDSLInterfaceConfig:1](##urn:dslforum-org:service:WANDSLInterfaceConfig:1)
- [urn:dslforum-org:service:WANDSLLinkConfig:1](##urn:dslforum-org:service:WANDSLLinkConfig:1)
- [urn:dslforum-org:service:WANEthernetLinkConfig:1](##urn:dslforum-org:service:WANEthernetLinkConfig:1)
- [urn:dslforum-org:service:WANPPPConnection:1](##urn:dslforum-org:service:WANPPPConnection:1)
- [urn:dslforum-org:service:WANIPConnection:1](##urn:dslforum-org:service:WANIPConnection:1)
- [urn:schemas-any-com:service:Any:1](##urn:schemas-any-com:service:Any:1)
- [urn:schemas-upnp-org:service:WANCommonInterfaceConfig:1](##urn:schemas-upnp-org:service:WANCommonInterfaceConfig:1)
- [urn:schemas-upnp-org:service:WANDSLLinkConfig:1](##urn:schemas-upnp-org:service:WANDSLLinkConfig:1)
- [urn:schemas-upnp-org:service:WANIPConnection:1](##urn:schemas-upnp-org:service:WANIPConnection:1)
- [urn:schemas-upnp-org:service:WANIPv6FirewallControl:1](##urn:schemas-upnp-org:service:WANIPv6FirewallControl:1)

<br />

## urn:dslforum-org:service:DeviceInfo:1

### GetInfo()

     OUT : NewManufacturerName
     OUT : NewManufacturerOUI
     OUT : NewModelName
     OUT : NewDescription
     OUT : NewProductClass
     OUT : NewSerialNumber
     OUT : NewSoftwareVersion
     OUT : NewHardwareVersion
     OUT : NewSpecVersion
     OUT : NewProvisioningCode
     OUT : NewUpTime
     OUT : NewDeviceLog

### SetProvisioningCode()

     IN : NewProvisioningCode

### GetDeviceLog()

     OUT : NewDeviceLog

### GetSecurityPort()

     OUT : NewSecurityPort

## urn:dslforum-org:service:DeviceConfig:1

### GetPersistentData()

     OUT : NewPersistentData

### SetPersistentData()

     IN : NewPersistentData

### ConfigurationStarted()

     IN : NewSessionID

### ConfigurationFinished()

     OUT : NewStatus

### FactoryReset()

### Reboot()

### X_GenerateUUID()

     OUT : NewUUID

### X_AVM-DE_GetConfigFile()

     IN : NewX_AVM-DE_Password
     OUT : NewX_AVM-DE_ConfigFileUrl

### X_AVM-DE_SetConfigFile()

     IN : NewX_AVM-DE_Password
     IN : NewX_AVM-DE_ConfigFileUrl

### X_AVM-DE_CreateUrlSID()

     OUT : NewX_AVM-DE_UrlSID

### X_AVM-DE_SendSupportData()

     IN : NewX_AVM-DE_SupportDataMode

### X_AVM-DE_GetSupportDataInfo()

     OUT : NewX_AVM-DE_SupportDataMode
     OUT : NewX_AVM-DE_SupportDataID
     OUT : NewX_AVM-DE_SupportDataTimestamp
     OUT : NewX_AVM-DE_SupportDataStatus

## urn:dslforum-org:service:Layer3Forwarding:1

### SetDefaultConnectionService()

     IN : NewDefaultConnectionService

### GetDefaultConnectionService()

     OUT : NewDefaultConnectionService

### GetForwardNumberOfEntries()

     OUT : NewForwardNumberOfEntries

### AddForwardingEntry()

     IN : NewType
     IN : NewDestIPAddress
     IN : NewDestSubnetMask
     IN : NewSourceIPAddress
     IN : NewSourceSubnetMask
     IN : NewGatewayIPAddress
     IN : NewInterface
     IN : NewForwardingMetric

### DeleteForwardingEntry()

     IN : NewDestIPAddress
     IN : NewDestSubnetMask
     IN : NewSourceIPAddress
     IN : NewSourceSubnetMask

### GetSpecificForwardingEntry()

     IN : NewDestIPAddress
     IN : NewDestSubnetMask
     IN : NewSourceIPAddress
     IN : NewSourceSubnetMask
     OUT : NewGatewayIPAddress
     OUT : NewEnable
     OUT : NewStatus
     OUT : NewType
     OUT : NewInterface
     OUT : NewForwardingMetric

### GetGenericForwardingEntry()

     IN : NewForwardingIndex
     OUT : NewEnable
     OUT : NewStatus
     OUT : NewType
     OUT : NewDestIPAddress
     OUT : NewDestSubnetMask
     OUT : NewSourceIPAddress
     OUT : NewSourceSubnetMask
     OUT : NewGatewayIPAddress
     OUT : NewInterface
     OUT : NewForwardingMetric

### SetForwardingEntryEnable()

     IN : NewDestIPAddress
     IN : NewDestSubnetMask
     IN : NewSourceIPAddress
     IN : NewSourceSubnetMask
     IN : NewEnable

## urn:dslforum-org:service:LANConfigSecurity:1

### GetInfo()

     OUT : NewMaxCharsPassword
     OUT : NewMinCharsPassword
     OUT : NewAllowedCharsPassword

### X_AVM-DE_GetCurrentUser()

     OUT : NewX_AVM-DE_CurrentUsername
     OUT : NewX_AVM-DE_CurrentUserRights

### X_AVM-DE_GetAnonymousLogin()

     OUT : NewX_AVM-DE_AnonymousLoginEnabled
     OUT : NewX_AVM-DE_ButtonLoginEnabled

### SetConfigPassword()

     IN : NewPassword

### X_AVM-DE_GetUserList()

     OUT : NewX_AVM-DE_UserList

## urn:dslforum-org:service:ManagementServer:1

### GetInfo()

     OUT : NewURL
     OUT : NewUsername
     OUT : NewPeriodicInformEnable
     OUT : NewPeriodicInformInterval
     OUT : NewPeriodicInformTime
     OUT : NewParameterKey
     OUT : NewParameterHash
     OUT : NewConnectionRequestURL
     OUT : NewConnectionRequestUsername
     OUT : NewUpgradesManaged

### SetManagementServerURL()

     IN : NewURL

### SetManagementServerUsername()

     IN : NewUsername

### SetManagementServerPassword()

     IN : NewPassword

### SetPeriodicInform()

     IN : NewPeriodicInformEnable
     IN : NewPeriodicInformInterval
     IN : NewPeriodicInformTime

### SetConnectionRequestAuthentication()

     IN : NewConnectionRequestUsername
     IN : NewConnectionRequestPassword

### SetUpgradeManagement()

     IN : NewUpgradesManaged

### X_SetTR069Enable()

     IN : NewTR069Enabled

### X_AVM-DE_GetTR069FirmwareDownloadEnabled()

     OUT : NewTR069FirmwareDownloadEnabled

### X_AVM-DE_SetTR069FirmwareDownloadEnabled()

     IN : NewTR069FirmwareDownloadEnabled

## urn:dslforum-org:service:Time:1

### GetInfo()

     OUT : NewNTPServer1
     OUT : NewNTPServer2
     OUT : NewCurrentLocalTime
     OUT : NewLocalTimeZone
     OUT : NewLocalTimeZoneName
     OUT : NewDaylightSavingsUsed
     OUT : NewDaylightSavingsStart
     OUT : NewDaylightSavingsEnd

### SetNTPServers()

     IN : NewNTPServer1
     IN : NewNTPServer2

## urn:dslforum-org:service:UserInterface:1

### GetInfo()

     OUT : NewUpgradeAvailable
     OUT : NewPasswordRequired
     OUT : NewPasswordUserSelectable
     OUT : NewWarrantyDate
     OUT : NewX_AVM-DE_Version
     OUT : NewX_AVM-DE_DownloadURL
     OUT : NewX_AVM-DE_InfoURL
     OUT : NewX_AVM-DE_UpdateState
     OUT : NewX_AVM-DE_LaborVersion

### X_AVM-DE_CheckUpdate()

     IN : NewX_AVM-DE_LaborVersion

### X_AVM-DE_DoUpdate()

     OUT : NewUpgradeAvailable
     OUT : NewX_AVM-DE_UpdateState

### X_AVM-DE_DoPrepareCGI()

     OUT : NewX_AVM-DE_CGI
     OUT : NewX_AVM-DE_SessionID

### X_AVM-DE_DoManualUpdate()

     IN : NewX_AVM-DE_AllowDowngrade
     IN : NewX_AVM-DE_DownloadURL

### X_AVM-DE_GetInternationalConfig()

     OUT : NewX_AVM-DE_Language
     OUT : NewX_AVM-DE_Country
     OUT : NewX_AVM-DE_Annex
     OUT : NewX_AVM-DE_LanguageList
     OUT : NewX_AVM-DE_CountryList
     OUT : NewX_AVM-DE_AnnexList

### X_AVM-DE_SetInternationalConfig()

     IN : NewX_AVM-DE_Language
     IN : NewX_AVM-DE_Country
     IN : NewX_AVM-DE_Annex

### X_AVM-DE_GetInfo()

     OUT : NewX_AVM-DE_AutoUpdateMode
     OUT : NewX_AVM-DE_UpdateTime
     OUT : NewX_AVM-DE_LastFwVersion
     OUT : NewX_AVM-DE_LastInfoUrl
     OUT : NewX_AVM-DE_CurrentFwVersion
     OUT : NewX_AVM-DE_UpdateSuccessful

### X_AVM-DE_SetConfig()

     IN : NewX_AVM-DE_AutoUpdateMode

## urn:dslforum-org:service:X_AVM-DE_Storage:1

### GetInfo()

     OUT : NewFTPEnable
     OUT : NewFTPStatus
     OUT : NewSMBEnable
     OUT : NewFTPWANEnable
     OUT : NewFTPWANSSLOnly
     OUT : NewFTPWANPort

### RequestFTPServerWAN()

     OUT : NewFTPWANPort
     OUT : NewFTPWANLifetime

### SetFTPServer()

     IN : NewFTPEnable

### SetFTPServerWAN()

     IN : NewFTPWANEnable
     IN : NewFTPWANSSLOnly

### SetSMBServer()

     IN : NewSMBEnable

### GetUserInfo()

     OUT : NewEnable
     OUT : NewUsername
     OUT : NewX_AVM-DE_NetworkAccessReadOnly

### SetUserConfig()

     IN : NewEnable
     IN : NewPassword
     IN : NewX_AVM-DE_NetworkAccessReadOnly

## urn:dslforum-org:service:X_AVM-DE_WebDAVClient:1

### GetInfo()

     OUT : NewEnable
     OUT : NewHostURL
     OUT : NewUsername
     OUT : NewMountpointName

### SetConfig()

     IN : NewEnable
     IN : NewHostURL
     IN : NewUsername
     IN : NewPassword
     IN : NewMountpointName

## urn:dslforum-org:service:X_AVM-DE_UPnP:1

### GetInfo()

     OUT : NewEnable
     OUT : NewUPnPMediaServer

### SetConfig()

     IN : NewEnable
     IN : NewUPnPMediaServer

## urn:dslforum-org:service:X_AVM-DE_Speedtest:1

### GetInfo()

     OUT : NewEnableTcp
     OUT : NewEnableUdp
     OUT : NewEnableUdpBidirect
     OUT : NewWANEnableTcp
     OUT : NewWANEnableUdp
     OUT : NewPortTcp
     OUT : NewPortUdp
     OUT : NewPortUdpBidirect

### SetConfig()

     IN : NewEnableTcp
     IN : NewEnableUdp
     IN : NewEnableUdpBidirect
     IN : NewWANEnableTcp
     IN : NewWANEnableUdp

## urn:dslforum-org:service:X_AVM-DE_RemoteAccess:1

### GetInfo()

     OUT : NewEnabled
     OUT : NewPort
     OUT : NewUsername

### SetConfig()

     IN : NewEnabled
     IN : NewPort
     IN : NewUsername
     IN : NewPassword

### SetEnable()

     IN : NewEnabled
     OUT : NewPort

### GetDDNSInfo()

     OUT : NewEnabled
     OUT : NewProviderName
     OUT : NewUpdateURL
     OUT : NewDomain
     OUT : NewStatusIPv4
     OUT : NewStatusIPv6
     OUT : NewUsername
     OUT : NewMode
     OUT : NewServerIPv4
     OUT : NewServerIPv6

### GetDDNSProviders()

     OUT : NewProviderList

### SetDDNSConfig()

     IN : NewEnabled
     IN : NewProviderName
     IN : NewUpdateURL
     IN : NewDomain
     IN : NewUsername
     IN : NewMode
     IN : NewServerIPv4
     IN : NewServerIPv6
     IN : NewPassword

## urn:dslforum-org:service:X_AVM-DE_MyFritz:1

### GetInfo()

     OUT : NewEnabled
     OUT : NewDeviceRegistered
     OUT : NewDynDNSName
     OUT : NewPort

### GetNumberOfServices()

     OUT : NewNumberOfServices

### GetServiceByIndex()

     IN : NewIndex
     OUT : NewEnabled
     OUT : NewName
     OUT : NewScheme
     OUT : NewPort
     OUT : NewURLPath
     OUT : NewType
     OUT : NewIPv4ForwardingWarning
     OUT : NewIPv4Addresses
     OUT : NewIPv6Addresses
     OUT : NewIPv6InterfaceIDs
     OUT : NewMACAddress
     OUT : NewHostName
     OUT : NewDynDnsLabel
     OUT : NewStatus

### SetServiceByIndex()

     IN : NewIndex
     IN : NewEnabled
     IN : NewName
     IN : NewScheme
     IN : NewPort
     IN : NewURLPath
     IN : NewType
     IN : NewIPv4Address
     IN : NewIPv6Address
     IN : NewIPv6InterfaceID
     IN : NewMACAddress
     IN : NewHostName

### DeleteServiceByIndex()

     IN : NewIndex

## urn:dslforum-org:service:X_VoIP:1

### GetInfoEx()

     OUT : NewVoIPNumberMinChars
     OUT : NewVoIPNumberMaxChars
     OUT : NewVoIPNumberAllowedChars
     OUT : NewVoIPUsernameMinChars
     OUT : NewVoIPUsernameMaxChars
     OUT : NewVoIPUsernameAllowedChars
     OUT : NewVoIPPasswordMinChars
     OUT : NewVoIPPasswordMaxChars
     OUT : NewVoIPPasswordAllowedChars
     OUT : NewVoIPRegistrarMinChars
     OUT : NewVoIPRegistrarMaxChars
     OUT : NewVoIPRegistrarAllowedChars
     OUT : NewVoIPSTUNServerMinChars
     OUT : NewVoIPSTUNServerMaxChars
     OUT : NewVoIPSTUNServerAllowedChars
     OUT : NewX_AVM-DE_ClientUsernameMinChars
     OUT : NewX_AVM-DE_ClientUsernameMaxChars
     OUT : NewX_AVM-DE_ClientUsernameAllowedChars
     OUT : NewX_AVM-DE_ClientPasswordMinChars
     OUT : NewX_AVM-DE_ClientPasswordMaxChars
     OUT : NewX_AVM-DE_ClientPasswordAllowedChars

### X_AVM-DE_AddVoIPAccount()

     IN : NewVoIPAccountIndex
     IN : NewVoIPRegistrar
     IN : NewVoIPNumber
     IN : NewVoIPUsername
     IN : NewVoIPPassword
     IN : NewVoIPOutboundProxy
     IN : NewVoIPSTUNServer

### X_AVM-DE_GetVoIPAccount()

     IN : NewVoIPAccountIndex
     OUT : NewVoIPRegistrar
     OUT : NewVoIPNumber
     OUT : NewVoIPUsername
     OUT : NewVoIPPassword
     OUT : NewVoIPOutboundProxy
     OUT : NewVoIPSTUNServer

### X_AVM-DE_DelVoIPAccount()

     IN : NewVoIPAccountIndex

### GetInfo()

     OUT : NewFaxT38Enable
     OUT : NewVoiceCoding

### SetConfig()

     IN : NewFaxT38Enable
     IN : NewVoiceCoding

### GetMaxVoIPNumbers()

     OUT : NewMaxVoIPNumbers

### GetExistingVoIPNumbers()

     OUT : NewExistingVoIPNumbers

### X_AVM-DE_GetNumberOfClients()

     OUT : NewX_AVM-DE_NumberOfClients

### X_AVM-DE_GetClient()

     IN : NewX_AVM-DE_ClientIndex
     OUT : NewX_AVM-DE_ClientUsername
     OUT : NewX_AVM-DE_ClientRegistrar
     OUT : NewX_AVM-DE_ClientRegistrarPort
     OUT : NewX_AVM-DE_PhoneName
     OUT : NewX_AVM-DE_OutGoingNumber

### X_AVM-DE_GetClient2()

     IN : NewX_AVM-DE_ClientIndex
     OUT : NewX_AVM-DE_ClientUsername
     OUT : NewX_AVM-DE_ClientRegistrar
     OUT : NewX_AVM-DE_ClientRegistrarPort
     OUT : NewX_AVM-DE_PhoneName
     OUT : NewX_AVM-DE_ClientId
     OUT : NewX_AVM-DE_OutGoingNumber
     OUT : NewX_AVM-DE_InternalNumber

### X_AVM-DE_SetClient()

     IN : NewX_AVM-DE_ClientIndex
     IN : NewX_AVM-DE_ClientPassword
     IN : NewX_AVM-DE_PhoneName
     IN : NewX_AVM-DE_OutGoingNumber

### X_AVM-DE_SetClient2()

     IN : NewX_AVM-DE_ClientIndex
     IN : NewX_AVM-DE_ClientPassword
     IN : NewX_AVM-DE_ClientId
     IN : NewX_AVM-DE_PhoneName
     IN : NewX_AVM-DE_OutGoingNumber

### X_AVM-DE_GetClient3()

     IN : NewX_AVM-DE_ClientIndex
     OUT : NewX_AVM-DE_ClientUsername
     OUT : NewX_AVM-DE_ClientRegistrar
     OUT : NewX_AVM-DE_ClientRegistrarPort
     OUT : NewX_AVM-DE_PhoneName
     OUT : NewX_AVM-DE_ClientId
     OUT : NewX_AVM-DE_OutGoingNumber
     OUT : NewX_AVM-DE_InComingNumbers
     OUT : NewX_AVM-DE_ExternalRegistration
     OUT : NewX_AVM-DE_InternalNumber
     OUT : NewX_AVM-DE_DelayedCallNotification

### X_AVM-DE_GetClientByClientId()

     IN : NewX_AVM-DE_ClientId
     OUT : NewX_AVM-DE_ClientId
     OUT : NewX_AVM-DE_ClientIndex
     OUT : NewX_AVM-DE_ClientUsername
     OUT : NewX_AVM-DE_ClientRegistrar
     OUT : NewX_AVM-DE_ClientRegistrarPort
     OUT : NewX_AVM-DE_PhoneName
     OUT : NewX_AVM-DE_OutGoingNumber
     OUT : NewX_AVM-DE_InComingNumbers
     OUT : NewX_AVM-DE_ExternalRegistration
     OUT : NewX_AVM-DE_InternalNumber
     OUT : NewX_AVM-DE_DelayedCallNotification

### X_AVM-DE_SetClient3()

     IN : NewX_AVM-DE_ClientIndex
     IN : NewX_AVM-DE_ClientPassword
     IN : NewX_AVM-DE_ClientId
     IN : NewX_AVM-DE_PhoneName
     IN : NewX_AVM-DE_OutGoingNumber
     IN : NewX_AVM-DE_InComingNumbers
     IN : NewX_AVM-DE_ExternalRegistration

### X_AVM-DE_SetClient4()

     IN : NewX_AVM-DE_ClientIndex
     IN : NewX_AVM-DE_ClientPassword
     IN : NewX_AVM-DE_ClientUsername
     IN : NewX_AVM-DE_PhoneName
     IN : NewX_AVM-DE_ClientId
     IN : NewX_AVM-DE_OutGoingNumber
     IN : NewX_AVM-DE_InComingNumbers
     OUT : NewX_AVM-DE_InternalNumber

### X_AVM-DE_GetClients()

     OUT : NewX_AVM-DE_ClientList

### X_AVM-DE_GetNumberOfNumbers()

     OUT : NewNumberOfNumbers

### X_AVM-DE_GetNumbers()

     OUT : NewNumberList

### X_AVM-DE_DeleteClient()

     IN : NewX_AVM-DE_ClientIndex

### X_AVM-DE_DialGetConfig()

     OUT : NewX_AVM-DE_PhoneName

### X_AVM-DE_DialSetConfig()

     IN : NewX_AVM-DE_PhoneName

### X_AVM-DE_DialNumber()

     IN : NewX_AVM-DE_PhoneNumber

### X_AVM-DE_DialHangup()

### X_AVM-DE_GetPhonePort()

     IN : NewIndex
     OUT : NewX_AVM-DE_PhoneName

### X_AVM-DE_SetDelayedCallNotification()

     IN : NewX_AVM-DE_ClientIndex
     IN : NewX_AVM-DE_DelayedCallNotification

### GetVoIPCommonCountryCode()

     OUT : NewVoIPCountryCode

### X_AVM-DE_GetVoIPCommonCountryCode()

     OUT : NewX_AVM-DE_LKZ
     OUT : NewX_AVM-DE_LKZPrefix

### SetVoIPCommonCountryCode()

     IN : NewVoIPCountryCode

### X_AVM-DE_SetVoIPCommonCountryCode()

     IN : NewX_AVM-DE_LKZ
     IN : NewX_AVM-DE_LKZPrefix

### GetVoIPEnableCountryCode()

     IN : NewVoIPAccountIndex
     OUT : NewVoIPEnableCountryCode

### SetVoIPEnableCountryCode()

     IN : NewVoIPAccountIndex
     IN : NewVoIPEnableCountryCode

### GetVoIPCommonAreaCode()

     OUT : NewVoIPAreaCode

### X_AVM-DE_GetVoIPCommonAreaCode()

     OUT : NewX_AVM-DE_OKZ
     OUT : NewX_AVM-DE_OKZPrefix

### SetVoIPCommonAreaCode()

     IN : NewVoIPAreaCode

### X_AVM-DE_SetVoIPCommonAreaCode()

     IN : NewX_AVM-DE_OKZ
     IN : NewX_AVM-DE_OKZPrefix

### GetVoIPEnableAreaCode()

     IN : NewVoIPAccountIndex
     OUT : NewVoIPEnableAreaCode

### SetVoIPEnableAreaCode()

     IN : NewVoIPAccountIndex
     IN : NewVoIPEnableAreaCode

### X_AVM-DE_GetAlarmClock()

     IN : NewIndex
     OUT : NewX_AVM-DE_AlarmClockEnable
     OUT : NewX_AVM-DE_AlarmClockName
     OUT : NewX_AVM-DE_AlarmClockTime
     OUT : NewX_AVM-DE_AlarmClockWeekdays
     OUT : NewX_AVM-DE_AlarmClockPhoneName

### X_AVM-DE_SetAlarmClockEnable()

     IN : NewIndex
     IN : NewX_AVM-DE_AlarmClockEnable

### X_AVM-DE_GetNumberOfAlarmClocks()

     OUT : NewX_AVM-DE_NumberOfAlarmClocks

## urn:dslforum-org:service:X_AVM-DE_OnTel:1

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewLastConnect
     OUT : NewUrl
     OUT : NewServiceId
     OUT : NewUsername
     OUT : NewName

### SetEnable()

     IN : NewEnable

### SetConfig()

     IN : NewEnable
     IN : NewUrl
     IN : NewServiceId
     IN : NewUsername
     IN : NewPassword
     IN : NewName

### GetInfoByIndex()

     IN : NewIndex
     OUT : NewEnable
     OUT : NewStatus
     OUT : NewLastConnect
     OUT : NewUrl
     OUT : NewServiceId
     OUT : NewUsername
     OUT : NewName

### SetEnableByIndex()

     IN : NewIndex
     IN : NewEnable

### SetConfigByIndex()

     IN : NewIndex
     IN : NewEnable
     IN : NewUrl
     IN : NewServiceId
     IN : NewUsername
     IN : NewPassword
     IN : NewName

### DeleteByIndex()

     IN : NewIndex

### GetNumberOfEntries()

     OUT : NewOnTelNumberOfEntries

### GetCallList()

     OUT : NewCallListURL

### GetPhonebookList()

     OUT : NewPhonebookList

### GetPhonebook()

     IN : NewPhonebookID
     OUT : NewPhonebookName
     OUT : NewPhonebookExtraID
     OUT : NewPhonebookURL

### AddPhonebook()

     IN : NewPhonebookExtraID
     IN : NewPhonebookName

### DeletePhonebook()

     IN : NewPhonebookID
     IN : NewPhonebookExtraID

### GetPhonebookEntry()

     IN : NewPhonebookID
     IN : NewPhonebookEntryID
     OUT : NewPhonebookEntryData

### GetPhonebookEntryUID()

     IN : NewPhonebookID
     IN : NewPhonebookEntryUniqueID
     OUT : NewPhonebookEntryData

### SetPhonebookEntry()

     IN : NewPhonebookID
     IN : NewPhonebookEntryID
     IN : NewPhonebookEntryData

### SetPhonebookEntryUID()

     IN : NewPhonebookID
     IN : NewPhonebookEntryData
     OUT : NewPhonebookEntryUniqueID

### DeletePhonebookEntry()

     IN : NewPhonebookID
     IN : NewPhonebookEntryID

### DeletePhonebookEntryUID()

     IN : NewPhonebookID
     IN : NewPhonebookEntryUniqueID

### GetCallBarringEntry()

     IN : NewPhonebookEntryID
     OUT : NewPhonebookEntryData

### GetCallBarringEntryByNum()

     IN : NewNumber
     OUT : NewPhonebookEntryData

### GetCallBarringList()

     OUT : NewPhonebookURL

### SetCallBarringEntry()

     IN : NewPhonebookEntryData
     OUT : NewPhonebookEntryUniqueID

### DeleteCallBarringEntryUID()

     IN : NewPhonebookEntryUniqueID

### GetDECTHandsetList()

     OUT : NewDectIDList

### GetDECTHandsetInfo()

     IN : NewDectID
     OUT : NewHandsetName
     OUT : NewPhonebookID

### SetDECTHandsetPhonebook()

     IN : NewDectID
     IN : NewPhonebookID

### GetNumberOfDeflections()

     OUT : NewNumberOfDeflections

### GetDeflection()

     IN : NewDeflectionId
     OUT : NewEnable
     OUT : NewType
     OUT : NewNumber
     OUT : NewDeflectionToNumber
     OUT : NewMode
     OUT : NewOutgoing
     OUT : NewPhonebookID

### GetDeflections()

     OUT : NewDeflectionList

### SetDeflectionEnable()

     IN : NewDeflectionId
     IN : NewEnable

## urn:dslforum-org:service:X_AVM-DE_Dect:1

### GetNumberOfDectEntries()

     OUT : NewNumberOfEntries

### GetGenericDectEntry()

     IN : NewIndex
     OUT : NewID
     OUT : NewActive
     OUT : NewName
     OUT : NewModel
     OUT : NewUpdateAvailable
     OUT : NewUpdateSuccessful
     OUT : NewUpdateInfo

### GetSpecificDectEntry()

     IN : NewID
     OUT : NewActive
     OUT : NewName
     OUT : NewModel
     OUT : NewUpdateAvailable
     OUT : NewUpdateSuccessful
     OUT : NewUpdateInfo

### DectDoUpdate()

     IN : NewID

### GetDectListPath()

     OUT : NewDectListPath

## urn:dslforum-org:service:X_AVM-DE_TAM:1

### GetInfo()

     IN : NewIndex
     OUT : NewEnable
     OUT : NewName
     OUT : NewTAMRunning
     OUT : NewStick
     OUT : NewStatus
     OUT : NewCapacity
     OUT : NewMode
     OUT : NewRingSeconds
     OUT : NewPhoneNumbers

### SetEnable()

     IN : NewIndex
     IN : NewEnable

### GetMessageList()

     IN : NewIndex
     OUT : NewURL

### MarkMessage()

     IN : NewIndex
     IN : NewMessageIndex
     IN : NewMarkedAsRead

### DeleteMessage()

     IN : NewIndex
     IN : NewMessageIndex

### GetList()

     OUT : NewTAMList

## urn:dslforum-org:service:X_AVM-DE_AppSetup:1

### GetInfo()

     OUT : NewMinCharsAppId
     OUT : NewMaxCharsAppId
     OUT : NewAllowedCharsAppId
     OUT : NewMinCharsAppDisplayName
     OUT : NewMaxCharsAppDisplayName
     OUT : NewMinCharsAppUsername
     OUT : NewMaxCharsAppUsername
     OUT : NewAllowedCharsAppUsername
     OUT : NewMinCharsAppPassword
     OUT : NewMaxCharsAppPassword
     OUT : NewAllowedCharsAppPassword
     OUT : NewMinCharsIPSecIdentifier
     OUT : NewMaxCharsIPSecIdentifier
     OUT : NewAllowedCharsIPSecIdentifier
     OUT : NewAllowedCharsCryptAlgos
     OUT : NewAllowedCharsAppAVMAddress
     OUT : NewMinCharsFilter
     OUT : NewMaxCharsFilter
     OUT : NewAllowedCharsFilter
     OUT : NewMinCharsIPSecPreSharedKey
     OUT : NewMaxCharsIPSecPreSharedKey
     OUT : NewAllowedCharsIPSecPreSharedKey
     OUT : NewMinCharsIPSecXauthUsername
     OUT : NewMaxCharsIPSecXauthUsername
     OUT : NewAllowedCharsIPSecXauthUsername
     OUT : NewMinCharsIPSecXauthPassword
     OUT : NewMaxCharsIPSecXauthPassword
     OUT : NewAllowedCharsIPSecXauthPassword

### GetConfig()

     OUT : NewConfigRight
     OUT : NewAppRight
     OUT : NewNasRight
     OUT : NewPhoneRight
     OUT : NewDialRight
     OUT : NewHomeautoRight
     OUT : NewInternetRights
     OUT : NewAccessFromInternet

### GetAppMessageFilter()

     IN : NewAppId
     OUT : NewFilterList

### RegisterApp()

     IN : NewAppId
     IN : NewAppDisplayName
     IN : NewAppDeviceMAC
     IN : NewAppUsername
     IN : NewAppPassword
     IN : NewAppRight
     IN : NewNasRight
     IN : NewPhoneRight
     IN : NewHomeautoRight
     IN : NewAppInternetRights

### SetAppVPN()

     IN : NewAppId
     IN : NewIPSecIdentifier
     IN : NewIPSecPreSharedKey
     IN : NewIPSecXauthUsername
     IN : NewIPSecXauthPassword

### SetAppVPNwithPFS()

     IN : NewAppId
     IN : NewIPSecIdentifier
     IN : NewIPSecPreSharedKey
     IN : NewIPSecXauthUsername
     IN : NewIPSecXauthPassword

### SetAppMessageFilter()

     IN : NewAppId
     IN : NewType
     IN : NewFilter

### SetAppMessageReceiver()

     IN : NewAppId
     IN : NewCryptAlgos
     IN : NewAppAVMAddress
     IN : NewAppAVMPasswordHash
     OUT : EncryptionSecret
     OUT : BoxSenderId

### ResetEvent()

     IN : NewEventId

### GetAppRemoteInfo()

     OUT : NewSubnetMask
     OUT : NewIPAddress
     OUT : NewExternalIPAddress
     OUT : NewExternalIPv6Address
     OUT : NewRemoteAccessDDNSEnabled
     OUT : NewRemoteAccessDDNSDomain
     OUT : NewMyFritzEnabled
     OUT : NewMyFritzDynDNSName

## urn:dslforum-org:service:X_AVM-DE_Homeauto:1

### GetInfo()

     OUT : NewAllowedCharsAIN
     OUT : NewMaxCharsAIN
     OUT : NewMinCharsAIN
     OUT : NewMaxCharsDeviceName
     OUT : NewMinCharsDeviceName

### GetGenericDeviceInfos()

     IN : NewIndex
     OUT : NewAIN
     OUT : NewDeviceId
     OUT : NewFunctionBitMask
     OUT : NewFirmwareVersion
     OUT : NewManufacturer
     OUT : NewProductName
     OUT : NewDeviceName
     OUT : NewPresent
     OUT : NewMultimeterIsEnabled
     OUT : NewMultimeterIsValid
     OUT : NewMultimeterPower
     OUT : NewMultimeterEnergy
     OUT : NewTemperatureIsEnabled
     OUT : NewTemperatureIsValid
     OUT : NewTemperatureCelsius
     OUT : NewTemperatureOffset
     OUT : NewSwitchIsEnabled
     OUT : NewSwitchIsValid
     OUT : NewSwitchState
     OUT : NewSwitchMode
     OUT : NewSwitchLock
     OUT : NewHkrIsEnabled
     OUT : NewHkrIsValid
     OUT : NewHkrIsTemperature
     OUT : NewHkrSetVentilStatus
     OUT : NewHkrSetTemperature
     OUT : NewHkrReduceVentilStatus
     OUT : NewHkrReduceTemperature
     OUT : NewHkrComfortVentilStatus
     OUT : NewHkrComfortTemperature

### GetSpecificDeviceInfos()

     IN : NewAIN
     OUT : NewDeviceId
     OUT : NewFunctionBitMask
     OUT : NewFirmwareVersion
     OUT : NewManufacturer
     OUT : NewProductName
     OUT : NewDeviceName
     OUT : NewPresent
     OUT : NewMultimeterIsEnabled
     OUT : NewMultimeterIsValid
     OUT : NewMultimeterPower
     OUT : NewMultimeterEnergy
     OUT : NewTemperatureIsEnabled
     OUT : NewTemperatureIsValid
     OUT : NewTemperatureCelsius
     OUT : NewTemperatureOffset
     OUT : NewSwitchIsEnabled
     OUT : NewSwitchIsValid
     OUT : NewSwitchState
     OUT : NewSwitchMode
     OUT : NewSwitchLock
     OUT : NewHkrIsEnabled
     OUT : NewHkrIsValid
     OUT : NewHkrIsTemperature
     OUT : NewHkrSetVentilStatus
     OUT : NewHkrSetTemperature
     OUT : NewHkrReduceVentilStatus
     OUT : NewHkrReduceTemperature
     OUT : NewHkrComfortVentilStatus
     OUT : NewHkrComfortTemperature

### SetDeviceName()

     IN : NewAIN
     IN : NewDeviceName

### SetSwitch()

     IN : NewAIN
     IN : NewSwitchState

## urn:dslforum-org:service:X_AVM-DE_Homeplug:1

### GetNumberOfDeviceEntries()

     OUT : NewNumberOfEntries

### GetGenericDeviceEntry()

     IN : NewIndex
     OUT : NewMACAddress
     OUT : NewActive
     OUT : NewName
     OUT : NewModel
     OUT : NewUpdateAvailable
     OUT : NewUpdateSuccessful

### GetSpecificDeviceEntry()

     IN : NewMACAddress
     OUT : NewActive
     OUT : NewName
     OUT : NewModel
     OUT : NewUpdateAvailable
     OUT : NewUpdateSuccessful

### DeviceDoUpdate()

     IN : NewMACAddress

## urn:dslforum-org:service:X_AVM-DE_Filelinks:1

### GetNumberOfFilelinkEntries()

     OUT : NewNumberOfEntries

### GetGenericFilelinkEntry()

     IN : NewIndex
     OUT : NewID
     OUT : NewValid
     OUT : NewPath
     OUT : NewIsDirectory
     OUT : NewUrl
     OUT : NewUsername
     OUT : NewAccessCountLimit
     OUT : NewAccessCount
     OUT : NewExpire
     OUT : NewExpireDate

### GetSpecificFilelinkEntry()

     IN : NewID
     OUT : NewValid
     OUT : NewPath
     OUT : NewIsDirectory
     OUT : NewUrl
     OUT : NewUsername
     OUT : NewAccessCountLimit
     OUT : NewAccessCount
     OUT : NewExpire
     OUT : NewExpireDate

### NewFilelinkEntry()

     IN : NewPath
     IN : NewAccessCountLimit
     IN : NewExpire
     OUT : NewID

### SetFilelinkEntry()

     IN : NewID
     IN : NewAccessCountLimit
     IN : NewExpire

### DeleteFilelinkEntry()

     IN : NewID

### GetFilelinkListPath()

     OUT : NewFilelinkListPath

## urn:dslforum-org:service:X_AVM-DE_Auth:1

### GetInfo()

     OUT : NewEnabled

### GetState()

     OUT : NewState

### SetConfig()

     IN : NewAction
     OUT : NewState
     OUT : NewToken
     OUT : NewMethods

## urn:dslforum-org:service:X_AVM-DE_HostFilter:1

### MarkTicket()

     OUT : NewTicketID

### GetTicketIDStatus()

     IN : NewTicketID
     OUT : NewTicketIDStatus

### DiscardAllTickets()

### DisallowWANAccessByIP()

     IN : NewIPv4Address
     IN : NewDisallow

### GetWANAccessByIP()

     IN : NewIPv4Address
     OUT : NewDisallow
     OUT : NewWANAccess

## urn:dslforum-org:service:WLANConfiguration:1

### SetEnable()

     IN : NewEnable

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewMaxBitRate
     OUT : NewChannel
     OUT : NewSSID
     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes
     OUT : NewMACAddressControlEnabled
     OUT : NewStandard
     OUT : NewBSSID
     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode
     OUT : NewMaxCharsSSID
     OUT : NewMinCharsSSID
     OUT : NewAllowedCharsSSID
     OUT : NewMinCharsPSK
     OUT : NewMaxCharsPSK
     OUT : NewAllowedCharsPSK

### SetConfig()

     IN : NewMaxBitRate
     IN : NewChannel
     IN : NewSSID
     IN : NewBeaconType
     IN : NewMACAddressControlEnabled
     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### SetSecurityKeys()

     IN : NewWEPKey0
     IN : NewWEPKey1
     IN : NewWEPKey2
     IN : NewWEPKey3
     IN : NewPreSharedKey
     IN : NewKeyPassphrase

### GetSecurityKeys()

     OUT : NewWEPKey0
     OUT : NewWEPKey1
     OUT : NewWEPKey2
     OUT : NewWEPKey3
     OUT : NewPreSharedKey
     OUT : NewKeyPassphrase

### SetDefaultWEPKeyIndex()

     IN : NewDefaultWEPKeyIndex

### GetDefaultWEPKeyIndex()

     OUT : NewDefaultWEPKeyIndex

### SetBasBeaconSecurityProperties()

     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### GetBasBeaconSecurityProperties()

     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode

### GetStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetPacketStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetBSSID()

     OUT : NewBSSID

### GetSSID()

     OUT : NewSSID

### SetSSID()

     IN : NewSSID

### GetBeaconType()

     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes

### SetBeaconType()

     IN : NewBeaconType

### GetChannelInfo()

     OUT : NewChannel
     OUT : NewPossibleChannels

### SetChannel()

     IN : NewChannel

### GetBeaconAdvertisement()

     OUT : NewBeaconAdvertisementEnabled

### SetBeaconAdvertisement()

     IN : NewBeaconAdvertisementEnabled

### GetTotalAssociations()

     OUT : NewTotalAssociations

### GetGenericAssociatedDeviceInfo()

     IN : NewAssociatedDeviceIndex
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### GetSpecificAssociatedDeviceInfo()

     IN : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetSpecificAssociatedDeviceInfoByIp()

     IN : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetWLANDeviceListPath()

     OUT : NewX_AVM-DE_WLANDeviceListPath

### X_AVM-DE_SetStickSurfEnable()

     IN : NewStickSurfEnable

### X_AVM-DE_GetIPTVOptimized()

     OUT : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_SetIPTVOptimized()

     IN : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_GetNightControl()

     OUT : NewNightControl
     OUT : NewNightTimeControlNoForcedOff

### X_AVM-DE_GetWLANHybridMode()

     OUT : NewEnable
     OUT : NewBeaconType
     OUT : NewKeyPassphrase
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewTrafficMode
     OUT : NewManualSpeed
     OUT : NewMaxSpeedDS
     OUT : NewMaxSpeedUS

### X_AVM-DE_SetWLANHybridMode()

     IN : NewEnable
     IN : NewBeaconType
     IN : NewKeyPassphrase
     IN : NewSSID
     IN : NewBSSID
     IN : NewTrafficMode
     IN : NewManualSpeed
     IN : NewMaxSpeedDS
     IN : NewMaxSpeedUS

### X_AVM-DE_GetWLANExtInfo()

     OUT : NewX_AVM-DE_APEnabled
     OUT : NewX_AVM-DE_APType
     OUT : NewX_AVM-DE_TimeoutActive
     OUT : NewX_AVM-DE_Timeout
     OUT : NewX_AVM-DE_TimeRemain
     OUT : NewX_AVM-DE_NoForcedOff
     OUT : NewX_AVM-DE_UserIsolation
     OUT : NewX_AVM-DE_EncryptionMode
     OUT : NewX_AVM-DE_LastChangedStamp

### X_AVM-DE_GetWPSInfo()

     OUT : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSConfig()

     IN : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSEnable()

     IN : NewX_AVM-DE_WPSEnable

### X_AVM-DE_SetWLANGlobalEnable()

     IN : NewX_AVM-DE_WLANGlobalEnable

### X_AVM-DE_GetWLANConnectionInfo()

     OUT : NewAssociatedDeviceMACAddress
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewBeaconType
     OUT : NewChannel
     OUT : NewStandard
     OUT : NewX_AVM-DE_SignalStrength
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SpeedRX
     OUT : NewX_AVM-DE_SpeedMax
     OUT : NewX_AVM-DE_SpeedRXMax

## urn:dslforum-org:service:WLANConfiguration:2

### SetEnable()

     IN : NewEnable

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewMaxBitRate
     OUT : NewChannel
     OUT : NewSSID
     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes
     OUT : NewMACAddressControlEnabled
     OUT : NewStandard
     OUT : NewBSSID
     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode
     OUT : NewMaxCharsSSID
     OUT : NewMinCharsSSID
     OUT : NewAllowedCharsSSID
     OUT : NewMinCharsPSK
     OUT : NewMaxCharsPSK
     OUT : NewAllowedCharsPSK

### SetConfig()

     IN : NewMaxBitRate
     IN : NewChannel
     IN : NewSSID
     IN : NewBeaconType
     IN : NewMACAddressControlEnabled
     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### SetSecurityKeys()

     IN : NewWEPKey0
     IN : NewWEPKey1
     IN : NewWEPKey2
     IN : NewWEPKey3
     IN : NewPreSharedKey
     IN : NewKeyPassphrase

### GetSecurityKeys()

     OUT : NewWEPKey0
     OUT : NewWEPKey1
     OUT : NewWEPKey2
     OUT : NewWEPKey3
     OUT : NewPreSharedKey
     OUT : NewKeyPassphrase

### SetDefaultWEPKeyIndex()

     IN : NewDefaultWEPKeyIndex

### GetDefaultWEPKeyIndex()

     OUT : NewDefaultWEPKeyIndex

### SetBasBeaconSecurityProperties()

     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### GetBasBeaconSecurityProperties()

     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode

### GetStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetPacketStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetBSSID()

     OUT : NewBSSID

### GetSSID()

     OUT : NewSSID

### SetSSID()

     IN : NewSSID

### GetBeaconType()

     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes

### SetBeaconType()

     IN : NewBeaconType

### GetChannelInfo()

     OUT : NewChannel
     OUT : NewPossibleChannels

### SetChannel()

     IN : NewChannel

### GetBeaconAdvertisement()

     OUT : NewBeaconAdvertisementEnabled

### SetBeaconAdvertisement()

     IN : NewBeaconAdvertisementEnabled

### GetTotalAssociations()

     OUT : NewTotalAssociations

### GetGenericAssociatedDeviceInfo()

     IN : NewAssociatedDeviceIndex
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### GetSpecificAssociatedDeviceInfo()

     IN : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetSpecificAssociatedDeviceInfoByIp()

     IN : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetWLANDeviceListPath()

     OUT : NewX_AVM-DE_WLANDeviceListPath

### X_AVM-DE_SetStickSurfEnable()

     IN : NewStickSurfEnable

### X_AVM-DE_GetIPTVOptimized()

     OUT : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_SetIPTVOptimized()

     IN : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_GetNightControl()

     OUT : NewNightControl
     OUT : NewNightTimeControlNoForcedOff

### X_AVM-DE_GetWLANHybridMode()

     OUT : NewEnable
     OUT : NewBeaconType
     OUT : NewKeyPassphrase
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewTrafficMode
     OUT : NewManualSpeed
     OUT : NewMaxSpeedDS
     OUT : NewMaxSpeedUS

### X_AVM-DE_SetWLANHybridMode()

     IN : NewEnable
     IN : NewBeaconType
     IN : NewKeyPassphrase
     IN : NewSSID
     IN : NewBSSID
     IN : NewTrafficMode
     IN : NewManualSpeed
     IN : NewMaxSpeedDS
     IN : NewMaxSpeedUS

### X_AVM-DE_GetWLANExtInfo()

     OUT : NewX_AVM-DE_APEnabled
     OUT : NewX_AVM-DE_APType
     OUT : NewX_AVM-DE_TimeoutActive
     OUT : NewX_AVM-DE_Timeout
     OUT : NewX_AVM-DE_TimeRemain
     OUT : NewX_AVM-DE_NoForcedOff
     OUT : NewX_AVM-DE_UserIsolation
     OUT : NewX_AVM-DE_EncryptionMode
     OUT : NewX_AVM-DE_LastChangedStamp

### X_AVM-DE_GetWPSInfo()

     OUT : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSConfig()

     IN : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSEnable()

     IN : NewX_AVM-DE_WPSEnable

### X_AVM-DE_SetWLANGlobalEnable()

     IN : NewX_AVM-DE_WLANGlobalEnable

### X_AVM-DE_GetWLANConnectionInfo()

     OUT : NewAssociatedDeviceMACAddress
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewBeaconType
     OUT : NewChannel
     OUT : NewStandard
     OUT : NewX_AVM-DE_SignalStrength
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SpeedRX
     OUT : NewX_AVM-DE_SpeedMax
     OUT : NewX_AVM-DE_SpeedRXMax

## urn:dslforum-org:service:WLANConfiguration:3

### SetEnable()

     IN : NewEnable

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewMaxBitRate
     OUT : NewChannel
     OUT : NewSSID
     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes
     OUT : NewMACAddressControlEnabled
     OUT : NewStandard
     OUT : NewBSSID
     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode
     OUT : NewMaxCharsSSID
     OUT : NewMinCharsSSID
     OUT : NewAllowedCharsSSID
     OUT : NewMinCharsPSK
     OUT : NewMaxCharsPSK
     OUT : NewAllowedCharsPSK

### SetConfig()

     IN : NewMaxBitRate
     IN : NewChannel
     IN : NewSSID
     IN : NewBeaconType
     IN : NewMACAddressControlEnabled
     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### SetSecurityKeys()

     IN : NewWEPKey0
     IN : NewWEPKey1
     IN : NewWEPKey2
     IN : NewWEPKey3
     IN : NewPreSharedKey
     IN : NewKeyPassphrase

### GetSecurityKeys()

     OUT : NewWEPKey0
     OUT : NewWEPKey1
     OUT : NewWEPKey2
     OUT : NewWEPKey3
     OUT : NewPreSharedKey
     OUT : NewKeyPassphrase

### SetDefaultWEPKeyIndex()

     IN : NewDefaultWEPKeyIndex

### GetDefaultWEPKeyIndex()

     OUT : NewDefaultWEPKeyIndex

### SetBasBeaconSecurityProperties()

     IN : NewBasicEncryptionModes
     IN : NewBasicAuthenticationMode

### GetBasBeaconSecurityProperties()

     OUT : NewBasicEncryptionModes
     OUT : NewBasicAuthenticationMode

### GetStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetPacketStatistics()

     OUT : NewTotalPacketsSent
     OUT : NewTotalPacketsReceived

### GetBSSID()

     OUT : NewBSSID

### GetSSID()

     OUT : NewSSID

### SetSSID()

     IN : NewSSID

### GetBeaconType()

     OUT : NewBeaconType
     OUT : NewX_AVM-DE_PossibleBeaconTypes

### SetBeaconType()

     IN : NewBeaconType

### GetChannelInfo()

     OUT : NewChannel
     OUT : NewPossibleChannels

### SetChannel()

     IN : NewChannel

### GetBeaconAdvertisement()

     OUT : NewBeaconAdvertisementEnabled

### SetBeaconAdvertisement()

     IN : NewBeaconAdvertisementEnabled

### GetTotalAssociations()

     OUT : NewTotalAssociations

### GetGenericAssociatedDeviceInfo()

     IN : NewAssociatedDeviceIndex
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### GetSpecificAssociatedDeviceInfo()

     IN : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetSpecificAssociatedDeviceInfoByIp()

     IN : NewAssociatedDeviceIPAddress
     OUT : NewAssociatedDeviceMACAddress
     OUT : NewAssociatedDeviceAuthState
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SignalStrength

### X_AVM-DE_GetWLANDeviceListPath()

     OUT : NewX_AVM-DE_WLANDeviceListPath

### X_AVM-DE_SetStickSurfEnable()

     IN : NewStickSurfEnable

### X_AVM-DE_GetIPTVOptimized()

     OUT : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_SetIPTVOptimized()

     IN : NewX_AVM-DE_IPTVoptimize

### X_AVM-DE_GetNightControl()

     OUT : NewNightControl
     OUT : NewNightTimeControlNoForcedOff

### X_AVM-DE_GetWLANHybridMode()

     OUT : NewEnable
     OUT : NewBeaconType
     OUT : NewKeyPassphrase
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewTrafficMode
     OUT : NewManualSpeed
     OUT : NewMaxSpeedDS
     OUT : NewMaxSpeedUS

### X_AVM-DE_SetWLANHybridMode()

     IN : NewEnable
     IN : NewBeaconType
     IN : NewKeyPassphrase
     IN : NewSSID
     IN : NewBSSID
     IN : NewTrafficMode
     IN : NewManualSpeed
     IN : NewMaxSpeedDS
     IN : NewMaxSpeedUS

### X_AVM-DE_GetWLANExtInfo()

     OUT : NewX_AVM-DE_APEnabled
     OUT : NewX_AVM-DE_APType
     OUT : NewX_AVM-DE_TimeoutActive
     OUT : NewX_AVM-DE_Timeout
     OUT : NewX_AVM-DE_TimeRemain
     OUT : NewX_AVM-DE_NoForcedOff
     OUT : NewX_AVM-DE_UserIsolation
     OUT : NewX_AVM-DE_EncryptionMode
     OUT : NewX_AVM-DE_LastChangedStamp

### X_AVM-DE_GetWPSInfo()

     OUT : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSConfig()

     IN : NewX_AVM-DE_WPSMode
     OUT : NewX_AVM-DE_WPSStatus

### X_AVM-DE_SetWPSEnable()

     IN : NewX_AVM-DE_WPSEnable

### X_AVM-DE_SetWLANGlobalEnable()

     IN : NewX_AVM-DE_WLANGlobalEnable

### X_AVM-DE_GetWLANConnectionInfo()

     OUT : NewAssociatedDeviceMACAddress
     OUT : NewSSID
     OUT : NewBSSID
     OUT : NewBeaconType
     OUT : NewChannel
     OUT : NewStandard
     OUT : NewX_AVM-DE_SignalStrength
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_SpeedRX
     OUT : NewX_AVM-DE_SpeedMax
     OUT : NewX_AVM-DE_SpeedRXMax

## urn:dslforum-org:service:Hosts:1

### GetHostNumberOfEntries()

     OUT : NewHostNumberOfEntries

### GetSpecificHostEntry()

     IN : NewMACAddress
     OUT : NewIPAddress
     OUT : NewAddressSource
     OUT : NewLeaseTimeRemaining
     OUT : NewInterfaceType
     OUT : NewActive
     OUT : NewHostName

### GetGenericHostEntry()

     IN : NewIndex
     OUT : NewIPAddress
     OUT : NewAddressSource
     OUT : NewLeaseTimeRemaining
     OUT : NewMACAddress
     OUT : NewInterfaceType
     OUT : NewActive
     OUT : NewHostName

### X_AVM-DE_GetChangeCounter()

     OUT : NewX_AVM-DE_ChangeCounter

### X_AVM-DE_SetHostNameByMACAddress()

     IN : NewMACAddress
     IN : NewHostName

### X_AVM-DE_GetAutoWakeOnLANByMACAddress()

     IN : NewMACAddress
     OUT : NewAutoWOLEnabled

### X_AVM-DE_SetAutoWakeOnLANByMACAddress()

     IN : NewMACAddress
     IN : NewAutoWOLEnabled

### X_AVM-DE_WakeOnLANByMACAddress()

     IN : NewMACAddress

### X_AVM-DE_GetSpecificHostEntryByIP()

     IN : NewIPAddress
     OUT : NewMACAddress
     OUT : NewActive
     OUT : NewHostName
     OUT : NewInterfaceType
     OUT : NewX_AVM-DE_Port
     OUT : NewX_AVM-DE_Speed
     OUT : NewX_AVM-DE_UpdateAvailable
     OUT : NewX_AVM-DE_UpdateSuccessful
     OUT : NewX_AVM-DE_InfoURL
     OUT : NewX_AVM-DE_Model
     OUT : NewX_AVM-DE_URL

### X_AVM-DE_HostsCheckUpdate()

### X_AVM-DE_HostDoUpdate()

     IN : NewMACAddress

### X_AVM-DE_GetHostListPath()

     OUT : NewX_AVM-DE_HostListPath

### X_AVM-DE_GetMeshListPath()

     OUT : NewX_AVM-DE_MeshListPath

## urn:dslforum-org:service:LANEthernetInterfaceConfig:1

### SetEnable()

     IN : NewEnable

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewMACAddress
     OUT : NewMaxBitRate
     OUT : NewDuplexMode

### GetStatistics()

     OUT : NewBytesSent
     OUT : NewBytesReceived
     OUT : NewPacketsSent
     OUT : NewPacketsReceived

## urn:dslforum-org:service:LANHostConfigManagement:1

### GetInfo()

     OUT : NewDHCPServerConfigurable
     OUT : NewDHCPRelay
     OUT : NewMinAddress
     OUT : NewMaxAddress
     OUT : NewReservedAddresses
     OUT : NewDHCPServerEnable
     OUT : NewDNSServers
     OUT : NewDomainName
     OUT : NewIPRouters
     OUT : NewSubnetMask

### SetDHCPServerEnable()

     IN : NewDHCPServerEnable

### SetIPInterface()

     IN : NewEnable
     IN : NewIPAddress
     IN : NewSubnetMask
     IN : NewIPAddressingType

### GetAddressRange()

     OUT : NewMinAddress
     OUT : NewMaxAddress

### SetAddressRange()

     IN : NewMinAddress
     IN : NewMaxAddress

### GetIPRoutersList()

     OUT : NewIPRouters

### SetIPRouter()

     IN : NewIPRouters

### GetSubnetMask()

     OUT : NewSubnetMask

### SetSubnetMask()

     IN : NewSubnetMask

### GetDNSServers()

     OUT : NewDNSServers

### GetIPInterfaceNumberOfEntries()

     OUT : NewIPInterfaceNumberOfEntries

## urn:dslforum-org:service:WANCommonInterfaceConfig:1

### GetCommonLinkProperties()

     OUT : NewWANAccessType
     OUT : NewLayer1UpstreamMaxBitRate
     OUT : NewLayer1DownstreamMaxBitRate
     OUT : NewPhysicalLinkStatus

### GetTotalBytesSent()

     OUT : NewTotalBytesSent

### GetTotalBytesReceived()

     OUT : NewTotalBytesReceived

### GetTotalPacketsSent()

     OUT : NewTotalPacketsSent

### GetTotalPacketsReceived()

     OUT : NewTotalPacketsReceived

### X_AVM-DE_SetWANAccessType()

     IN : NewAccessType

### X_AVM-DE_GetOnlineMonitor()

     IN : NewSyncGroupIndex
     OUT : NewTotalNumberSyncGroups
     OUT : NewSyncGroupName
     OUT : NewSyncGroupMode
     OUT : Newmax_ds
     OUT : Newmax_us
     OUT : Newds_current_bps
     OUT : Newmc_current_bps
     OUT : Newus_current_bps
     OUT : Newprio_realtime_bps
     OUT : Newprio_high_bps
     OUT : Newprio_default_bps
     OUT : Newprio_low_bps

## urn:dslforum-org:service:WANDSLInterfaceConfig:1

### GetInfo()

     OUT : NewEnable
     OUT : NewStatus
     OUT : NewDataPath
     OUT : NewUpstreamCurrRate
     OUT : NewDownstreamCurrRate
     OUT : NewUpstreamMaxRate
     OUT : NewDownstreamMaxRate
     OUT : NewUpstreamNoiseMargin
     OUT : NewDownstreamNoiseMargin
     OUT : NewUpstreamAttenuation
     OUT : NewDownstreamAttenuation
     OUT : NewATURVendor
     OUT : NewATURCountry
     OUT : NewUpstreamPower
     OUT : NewDownstreamPower

### GetStatisticsTotal()

     OUT : NewReceiveBlocks
     OUT : NewTransmitBlocks
     OUT : NewCellDelin
     OUT : NewLinkRetrain
     OUT : NewInitErrors
     OUT : NewInitTimeouts
     OUT : NewLossOfFraming
     OUT : NewErroredSecs
     OUT : NewSeverelyErroredSecs
     OUT : NewFECErrors
     OUT : NewATUCFECErrors
     OUT : NewHECErrors
     OUT : NewATUCHECErrors
     OUT : NewCRCErrors
     OUT : NewATUCCRCErrors

### X_AVM-DE_GetDSLDiagnoseInfo()

     OUT : NewX_AVM-DE_DSLDiagnoseState
     OUT : NewX_AVM-DE_CableNokDistance
     OUT : NewX_AVM-DE_DSLLastDiagnoseTime
     OUT : NewX_AVM-DE_DSLSignalLossTime
     OUT : NewX_AVM-DE_DSLActive
     OUT : NewX_AVM-DE_DSLSync

### X_AVM-DE_GetDSLInfo()

     OUT : NewSNRGds
     OUT : NewSNRGus
     OUT : NewSNRpsds
     OUT : NewSNRpsus
     OUT : NewSNRMTds
     OUT : NewSNRMTus
     OUT : NewLATNds
     OUT : NewLATNus
     OUT : NewFECErrors
     OUT : NewCRCErrors
     OUT : NewLinkStatus
     OUT : NewModulationType
     OUT : NewCurrentProfile
     OUT : NewUpstreamCurrRate
     OUT : NewDownstreamCurrRate
     OUT : NewUpstreamMaxRate
     OUT : NewDownstreamMaxRate
     OUT : NewUpstreamNoiseMargin
     OUT : NewDownstreamNoiseMargin
     OUT : NewUpstreamAttenuation
     OUT : NewDownstreamAttenuation
     OUT : NewATURVendor
     OUT : NewATURCountry
     OUT : NewUpstreamPower
     OUT : NewDownstreamPower

## urn:dslforum-org:service:WANDSLLinkConfig:1

### GetInfo()

     OUT : NewEnable
     OUT : NewLinkStatus
     OUT : NewLinkType
     OUT : NewDestinationAddress
     OUT : NewATMEncapsulation
     OUT : NewAutoConfig
     OUT : NewATMQoS
     OUT : NewATMPeakCellRate
     OUT : NewATMSustainableCellRate

### SetEnable()

     IN : NewEnable

### GetAutoConfig()

     OUT : NewAutoConfig

### SetDSLLinkType()

     IN : NewLinkType

### GetDSLLinkInfo()

     OUT : NewLinkType
     OUT : NewLinkStatus

### SetDestinationAddress()

     IN : NewDestinationAddress

### GetDestinationAddress()

     OUT : NewDestinationAddress

### SetATMEncapsulation()

     IN : NewATMEncapsulation

### GetATMEncapsulation()

     OUT : NewATMEncapsulation

### GetStatistics()

     OUT : NewATMTransmittedBlocks
     OUT : NewATMReceivedBlocks
     OUT : NewAAL5CRCErrors
     OUT : NewATMCRCErrors

## urn:dslforum-org:service:WANEthernetLinkConfig:1

## urn:dslforum-org:service:WANPPPConnection:1

### GetInfo()

     OUT : NewEnable
     OUT : NewConnectionStatus
     OUT : NewPossibleConnectionTypes
     OUT : NewConnectionType
     OUT : NewName
     OUT : NewUptime
     OUT : NewUpstreamMaxBitRate
     OUT : NewDownstreamMaxBitRate
     OUT : NewLastConnectionError
     OUT : NewIdleDisconnectTime
     OUT : NewRSIPAvailable
     OUT : NewUserName
     OUT : NewNATEnabled
     OUT : NewExternalIPAddress
     OUT : NewDNSServers
     OUT : NewMACAddress
     OUT : NewConnectionTrigger
     OUT : NewLastAuthErrorInfo
     OUT : NewMaxCharsUsername
     OUT : NewMinCharsUsername
     OUT : NewAllowedCharsUsername
     OUT : NewMaxCharsPassword
     OUT : NewMinCharsPassword
     OUT : NewAllowedCharsPassword
     OUT : NewTransportType
     OUT : NewRouteProtocolRx
     OUT : NewPPPoEServiceName
     OUT : NewRemoteIPAddress
     OUT : NewPPPoEACName
     OUT : NewDNSEnabled
     OUT : NewDNSOverrideAllowed

### GetConnectionTypeInfo()

     OUT : NewConnectionType
     OUT : NewPossibleConnectionTypes

### SetConnectionType()

     IN : NewConnectionType

### GetStatusInfo()

     OUT : NewConnectionStatus
     OUT : NewLastConnectionError
     OUT : NewUptime

### GetUserName()

     OUT : NewUserName

### SetUserName()

     IN : NewUserName

### SetPassword()

     IN : NewPassword

### GetNATRSIPStatus()

     OUT : NewRSIPAvailable
     OUT : NewNATEnabled

### SetConnectionTrigger()

     IN : NewConnectionTrigger

### ForceTermination()

### RequestConnection()

### GetGenericPortMappingEntry()

     IN : NewPortMappingIndex
     OUT : NewRemoteHost
     OUT : NewExternalPort
     OUT : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### GetSpecificPortMappingEntry()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### AddPortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     IN : NewInternalPort
     IN : NewInternalClient
     IN : NewEnabled
     IN : NewPortMappingDescription
     IN : NewLeaseDuration

### DeletePortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol

### GetExternalIPAddress()

     OUT : NewExternalIPAddress

### X_GetDNSServers()

     OUT : NewDNSServers

### GetLinkLayerMaxBitRates()

     OUT : NewUpstreamMaxBitRate
     OUT : NewDownstreamMaxBitRate

### GetPortMappingNumberOfEntries()

     OUT : NewPortMappingNumberOfEntries

### SetRouteProtocolRx()

     IN : NewRouteProtocolRx

### SetIdleDisconnectTime()

     IN : NewIdleDisconnectTime

### X_AVM-DE_GetAutoDisconnectTimeSpan()

     OUT : NewX_AVM-DE_DisconnectPreventionEnable
     OUT : NewX_AVM-DE_DisconnectPreventionHour

### X_AVM-DE_SetAutoDisconnectTimeSpan()

     IN : NewX_AVM-DE_DisconnectPreventionEnable
     IN : NewX_AVM-DE_DisconnectPreventionHour

## urn:dslforum-org:service:WANIPConnection:1

### GetInfo()

     OUT : NewEnable
     OUT : NewConnectionStatus
     OUT : NewPossibleConnectionTypes
     OUT : NewConnectionType
     OUT : NewName
     OUT : NewUptime
     OUT : NewLastConnectionError
     OUT : NewRSIPAvailable
     OUT : NewNATEnabled
     OUT : NewExternalIPAddress
     OUT : NewDNSServers
     OUT : NewMACAddress
     OUT : NewConnectionTrigger
     OUT : NewRouteProtocolRx
     OUT : NewDNSEnabled
     OUT : NewDNSOverrideAllowed

### GetConnectionTypeInfo()

     OUT : NewConnectionType
     OUT : NewPossibleConnectionTypes

### SetConnectionType()

     IN : NewConnectionType

### GetStatusInfo()

     OUT : NewConnectionStatus
     OUT : NewLastConnectionError
     OUT : NewUptime

### GetNATRSIPStatus()

     OUT : NewRSIPAvailable
     OUT : NewNATEnabled

### SetConnectionTrigger()

     IN : NewConnectionTrigger

### ForceTermination()

### RequestConnection()

### GetGenericPortMappingEntry()

     IN : NewPortMappingIndex
     OUT : NewRemoteHost
     OUT : NewExternalPort
     OUT : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### GetSpecificPortMappingEntry()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### AddPortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     IN : NewInternalPort
     IN : NewInternalClient
     IN : NewEnabled
     IN : NewPortMappingDescription
     IN : NewLeaseDuration

### DeletePortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol

### GetExternalIPAddress()

     OUT : NewExternalIPAddress

### X_GetDNSServers()

     OUT : NewDNSServers

### GetPortMappingNumberOfEntries()

     OUT : NewPortMappingNumberOfEntries

### SetRouteProtocolRx()

     IN : NewRouteProtocolRx

### SetIdleDisconnectTime()

     IN : NewIdleDisconnectTime

## urn:schemas-any-com:service:Any:1

## urn:schemas-upnp-org:service:WANCommonInterfaceConfig:1

### GetCommonLinkProperties()

     OUT : NewWANAccessType
     OUT : NewLayer1UpstreamMaxBitRate
     OUT : NewLayer1DownstreamMaxBitRate
     OUT : NewPhysicalLinkStatus

### GetTotalBytesSent()

     OUT : NewTotalBytesSent

### GetTotalBytesReceived()

     OUT : NewTotalBytesReceived

### GetTotalPacketsSent()

     OUT : NewTotalPacketsSent

### GetTotalPacketsReceived()

     OUT : NewTotalPacketsReceived

### GetAddonInfos()

     OUT : NewByteSendRate
     OUT : NewByteReceiveRate
     OUT : NewPacketSendRate
     OUT : NewPacketReceiveRate
     OUT : NewTotalBytesSent
     OUT : NewTotalBytesReceived
     OUT : NewAutoDisconnectTime
     OUT : NewIdleDisconnectTime
     OUT : NewDNSServer1
     OUT : NewDNSServer2
     OUT : NewVoipDNSServer1
     OUT : NewVoipDNSServer2
     OUT : NewUpnpControlEnabled
     OUT : NewRoutedBridgedModeBoth
     OUT : NewX_AVM_DE_TotalBytesSent64
     OUT : NewX_AVM_DE_TotalBytesReceived64
     OUT : NewX_AVM_DE_WANAccessType

### X_AVM_DE_GetDsliteStatus()

     OUT : NewX_AVM_DE_DsliteStatus

### X_AVM_DE_GetIPTVInfos()

     OUT : NewX_AVM_DE_IPTV_Enabled
     OUT : NewX_AVM_DE_IPTV_Provider
     OUT : NewX_AVM_DE_IPTV_URL

## urn:schemas-upnp-org:service:WANDSLLinkConfig:1

### SetDSLLinkType()

     IN : NewLinkType

### GetDSLLinkInfo()

     OUT : NewLinkType
     OUT : NewLinkStatus

### GetAutoConfig()

     OUT : NewAutoConfig

### GetModulationType()

     OUT : NewModulationType

### SetDestinationAddress()

     IN : NewDestinationAddress

### GetDestinationAddress()

     OUT : NewDestinationAddress

### SetATMEncapsulation()

     IN : NewATMEncapsulation

### GetATMEncapsulation()

     OUT : NewATMEncapsulation

### SetFCSPreserved()

     IN : NewFCSPreserved

### GetFCSPreserved()

     OUT : NewFCSPreserved

## urn:schemas-upnp-org:service:WANIPConnection:1

### SetConnectionType()

     IN : NewConnectionType

### GetConnectionTypeInfo()

     OUT : NewConnectionType
     OUT : NewPossibleConnectionTypes

### GetAutoDisconnectTime()

     OUT : NewAutoDisconnectTime

### GetIdleDisconnectTime()

     OUT : NewIdleDisconnectTime

### RequestConnection()

### RequestTermination()

### ForceTermination()

### GetStatusInfo()

     OUT : NewConnectionStatus
     OUT : NewLastConnectionError
     OUT : NewUptime

### GetNATRSIPStatus()

     OUT : NewRSIPAvailable
     OUT : NewNATEnabled

### GetGenericPortMappingEntry()

     IN : NewPortMappingIndex
     OUT : NewRemoteHost
     OUT : NewExternalPort
     OUT : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### GetSpecificPortMappingEntry()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     OUT : NewInternalPort
     OUT : NewInternalClient
     OUT : NewEnabled
     OUT : NewPortMappingDescription
     OUT : NewLeaseDuration

### AddPortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol
     IN : NewInternalPort
     IN : NewInternalClient
     IN : NewEnabled
     IN : NewPortMappingDescription
     IN : NewLeaseDuration

### DeletePortMapping()

     IN : NewRemoteHost
     IN : NewExternalPort
     IN : NewProtocol

### GetExternalIPAddress()

     OUT : NewExternalIPAddress

### X_AVM_DE_GetExternalIPv6Address()

     OUT : NewExternalIPv6Address
     OUT : NewPrefixLength
     OUT : NewValidLifetime
     OUT : NewPreferedLifetime

### X_AVM_DE_GetIPv6Prefix()

     OUT : NewIPv6Prefix
     OUT : NewPrefixLength
     OUT : NewValidLifetime
     OUT : NewPreferedLifetime

### X_AVM_DE_GetDNSServer()

     OUT : NewIPv4DNSServer1
     OUT : NewIPv4DNSServer2

### X_AVM_DE_GetIPv6DNSServer()

     OUT : NewIPv6DNSServer1
     OUT : NewValidLifetime1
     OUT : NewIPv6DNSServer2
     OUT : NewValidLifetime

## urn:schemas-upnp-org:service:WANIPv6FirewallControl:1

### GetFirewallStatus()

     OUT : FirewallEnabled
     OUT : InboundPinholeAllowed

### GetOutboundPinholeTimeout()

     IN : RemoteHost
     IN : RemotePort
     IN : InternalClient
     IN : InternalPort
     IN : Protocol
     OUT : OutboundPinholeTimeout

### AddPinhole()

     IN : RemoteHost
     IN : RemotePort
     IN : InternalClient
     IN : InternalPort
     IN : Protocol
     IN : LeaseTime
     OUT : UniqueID

### UpdatePinhole()

     IN : UniqueID
     IN : NewLeaseTime

### DeletePinhole()

     IN : UniqueID

### GetPinholePackets()

     IN : UniqueID
     OUT : PinholePackets

### CheckPinholeWorking()

     IN : UniqueID
     OUT : IsWorking
